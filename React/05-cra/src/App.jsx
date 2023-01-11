import React, { Component } from 'react';
import Button from './components/Button';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <>
        <h1>app</h1>
        <Button />
        <img src={logo} alt="lgo" />
      </>
    );
  }
}

export default App;
