import { useEffect, useRef, useState } from "react";

const FunctionalRef = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const previousValue = useRef();
  const previousCount = useRef();
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <p>
        my name is {inputValue} and it used be {previousValue.current}
      </p>
      <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
        generate number
      </button>
      <div>
        number one {count} and number prev one{previousCount.current}
      </div>
    </div>
  );
};

export default FunctionalRef;
