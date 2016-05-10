import React, { Component } from 'react';

export default class Button extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.setState = this.setState.bind(this);
    this.getState = this.getState.bind(this);
  };

  getState() {
    return {
      count: this.props.initialCount
    };
  };


  handleClick() {
    this.setState ({count: this.getState().count+1});
  };

  render() {
    return (
      <button onClick={this.handleClick}>{this.getState().count}</button>
    );
  }
};
