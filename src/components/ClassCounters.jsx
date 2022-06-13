import React, { Component } from "react";

class ClassCounters extends Component {
  state = {
    name: "",
    count: 0,
  };

  componentDidMount() {
    document.title = `clicked: ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("document title updating");
      document.title = `clicked: ${this.state.count} times`;
      console.log(prevState);
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ nam: e.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {this.state.count}
        </button>
        <p>{this.state.nam}</p>
      </div>
    );
  }
}

export default ClassCounters;
