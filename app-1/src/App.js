import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddInfo />
      </div>
    );
  }
}

class AddInfo extends Component {
  constructor() {
    super()

    this.state = {
      userInput: ''
    }
  }

  getInput(e) {
    console.log('getInput')
    this.setState({
      userInput: e
    })
  }

  render() {

    return (
      <div>
        <input onChange={(e) => this.getInput(e.target.value)}></input>
        <p>{this.state.userInput}</p>      
      </div>
    )
  }
}

export default App;
