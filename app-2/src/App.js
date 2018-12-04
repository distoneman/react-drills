import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayArray />
      </div>
    );
  }
}

export default App;

class DisplayArray extends Component {
  constructor() {
    super()

    this.state = {
      myArray: ['dog', 'cat', 'frog', 'horse', 'cow']
    }
  }

  // displayList() {
  //   console.log('displayList')
  //   {
  //     this.state.myArray.map((i) => (
  //       <h2>{i}</h2>
  //     )))
  //   }
  //   </div >

  // }

  render() {
    let list = this.state.myArray.map((arr) => (<h2>{arr}</h2>))

    return (
      <div>
       {list}
      </div>
    )
  }
}


