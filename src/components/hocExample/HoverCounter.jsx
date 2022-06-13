import WithCounter from "../hoc/withCount";


const HoveredCounter = ({count,incrementCount}) => {

  return <button onMouseOver={incrementCount}>hovered{count}Times</button>;
};

export default WithCounter(HoveredCounter,10);