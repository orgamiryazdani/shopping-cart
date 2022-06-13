import React, { useContext, useState } from "react";

const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();

const CounterProvider = ({ children }) => {
  const [products, setProducts] = useState();
  return (
    <CounterContext.Provider value={products}>
      <CounterContextDispatcher.Provider value={setProducts}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);
export const useCountAction = () => {
  return useContext(CounterContextDispatcher);
};
