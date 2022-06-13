import { useReducer } from "react";

const initialState = {
  firsCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add1":
      return { ...state, firsCounter: state.firsCounter + action.value };
    case "decrement":
      return { ...state, firsCounter: state.firsCounter - action.value };
    case "add2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>count is : {count.firsCounter}</h2>
      <h2>count is : {count.secondCounter}</h2>

      <div>
        <button onClick={() => dispatch({ type: "add1", value: 1 })}>
          add one
        </button>
        <button onClick={() => dispatch({ type: "add1", value: 5 })}>
          add five
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
      </div>

      <div>
        <button onClick={() => dispatch({ type: "add2", value: 1 })}>
          add one
        </button>
        <button onClick={() => dispatch({ type: "add2", value: 5 })}>
          add five
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          decrement
        </button>
      </div>

      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CountReducer;
