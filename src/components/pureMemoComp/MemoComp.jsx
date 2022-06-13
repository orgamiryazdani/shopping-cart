import React from "react";

const MemoComp = (props) => {
  console.log("memoComp");
  return <div>Memo Comp : {props.name}</div>;
};

export default React.memo(MemoComp);
