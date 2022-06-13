import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("regComp");
    return <div>reg comp : {this.props.name}</div>;
  }
}

export default RegComp;
