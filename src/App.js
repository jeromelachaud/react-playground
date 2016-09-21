import React, { Component } from 'react';
import Button from './components/button'
import Exemple from './components/exemple'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

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
