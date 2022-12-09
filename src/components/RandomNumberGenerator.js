import React,{useEffect} from "react";

const RandomNumberGenerator = (props) => {
  const { random, generate,setError } = { ...props };

  useEffect(()=>{
    if(random<5){
      setError(true);
      throw new Error("Number is less than 5")
    }
    else{
      setError(false);
    }
  },[random])
  
  return (
    <>
      <h1>Number : {random}</h1>
      <button onClick={generate}>Reset</button>
    </>
  );
};

export default RandomNumberGenerator;
