import React, { useEffect } from "react";

interface Iprops {
  random: number;
  generate: () => void;
  setError: (arf0:boolean) => void;
}

const RandomNumberGenerator = (props:Iprops) => {
  const { random, generate, setError } = { ...props };

  useEffect(() => {
    if (random < 5) {
      setError(true);
      throw new Error("Number is less than 5");
    } else {
      setError(false);
    }
  }, [random]);

  return (
    <>
      <h1>Number : {random}</h1>
      <button onClick={generate}>Reset</button>
    </>
  );
};

export default RandomNumberGenerator;
