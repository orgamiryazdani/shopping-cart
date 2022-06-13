import React, { Component, createRef } from "react";
class ClassRef extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.inputeRef = createRef();
  }

  componentDidMount() {
    this.inputeRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputeRef} />
      </div>
    );
  }
}

export default ClassRef;
