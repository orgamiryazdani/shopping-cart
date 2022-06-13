import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component {
  state = {
    name: "amir",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "amir" });
    }, 1000);
  }

  render() {
    console.log("parentComp------------------------------------");
    return (
      <div>
        parent component
        <PureComp name={this.state.name} />
        <RegComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
