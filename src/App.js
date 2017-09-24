import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    loading: false,
  };

  handleClick = () => {
    this.setState({ loading: true });
  };

  unloading = () => {
    this.setState({ loading: false });
  };

  returnTrue = () => true;

  returnFalse = () => false;

  multiply = (x = 3) => x * x;

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {!this.state.loading ? <p className="App-intro">
          <button onClick={this.handleClick} className="load">click me!</button>
        </p> : <p>
          <button onClick={this.unloading} className="unload">Unload</button>
        </p>}
      </div>
    );
  }
}

export default App;
