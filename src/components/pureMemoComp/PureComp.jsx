import React, { Component } from "react";

class PureComp extends Component {
  render() {
    console.log("pureComp");
    return <div>pure comp : {this.props.name}</div>;
  }
}

export default PureComp;
