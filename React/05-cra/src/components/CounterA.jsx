import React, { Component } from 'react';

class CounterA extends Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.default || 0 };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <h1>counter A</h1>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>incrementer</button>
      </>
    );
  }
}

export default CounterA;
