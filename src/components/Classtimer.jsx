import React, { Component } from "react";

class ClassTimer extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
        <div>class interval</div>
        <p>{this.state.count}</p>
      </>
    );
  }

  componentWillUnmount() {
    console.log("cwum");
    clearInterval(this.myTimer);
  }

  componentDidMount() {
    this.myTimer = setInterval(() => {
      console.log("hi amir");
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
}

export default ClassTimer;
