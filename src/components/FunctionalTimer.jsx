import React, { Component, useEffect, useState } from "react";

const FunctionalTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("grate amir");
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>class interval</div>
      <p>{count}</p>
    </>
  );
};

export default FunctionalTimer;
