import React, { Component, useEffect, useState } from "react";

const FunctionalCounter = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("document title updating");
    document.title = `clicked: ${count} times`;
  }, [count]);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <p>{name}</p>
    </div>
  );
};

export default FunctionalCounter;
