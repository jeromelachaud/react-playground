import React, { Component } from 'react';

export default class Button extends Component {

  constructor() {
    super();
    this.updtateCounter = this.updtateCounter.bind(this);
    this.state = {
      count : 1,
    };
  };

  updtateCounter() {
    const count = this.state.count;
    this.setState ({count: count+1});
  };

  render() {
    return (
      <div>
        <button onClick={this.updtateCounter}></button>
        <div>{this.state.count}</div>
      </div>

    );
  }
};
