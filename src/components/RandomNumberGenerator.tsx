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
      throw new Error(random+" (Less than 5)");
    } else {
      setError(false);
    }
  }, [random]);

  return (
    <>
      <h2>Number : {random}</h2>
      <button className="border-1" onClick={generate}>Generate</button>
    </>
  );
};

export default RandomNumberGenerator;
