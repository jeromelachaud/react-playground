import React, { Component } from 'react';
import Button from './components/button'
import Exemple from './components/exemple'

export default class App extends Component {
  render() {
    return (
    <div>
      <h1>Hello, world.</h1>
      <Exemple />
      <Button initialCount={23}/>
    </div>
    );
  }
}
