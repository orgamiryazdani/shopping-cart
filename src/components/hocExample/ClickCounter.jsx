import { useState } from "react";
import WithCounter from "../hoc/withCount";

const ClickCounter = ({count, incrementCount,name}) => {
  console.log(name);
  return <button onClick={incrementCount}>clicked{count}Times</button>;
};

export default WithCounter(ClickCounter,5);
