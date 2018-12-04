import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Filter List</p>
        <FilterList />
      </div>
    );
  }
}

export default App;

class FilterList extends Component{
  constructor(){
    super();
    
    this.state = {
      animals: ['dog', 'cat', 'frog', 'horse', 'cow'],
      userInput: '',
      filteredAnimals: []
    } // state end
    this.getInput = this.getInput.bind(this);
  } //constructor end

  getInput(e){
    // console.log(e);
    
    this.setState({
      userInput: e,
    })
  }



  render(){
    // let filteredAnimals = [];
    // for(let i = 0;i < this.state.animals.length;i++){
    //   console.log('for loop')
    //   if(this.state.animals[i].includes(this.state.userInput)){
    //     console.log('true')
    //     this.state.filteredAnimals.push(this.state.animals[i])
    //   }
    // }
    let displayAnimals = this.state.animals.filter((e)=>{
      return e.includes(this.state.userInput);
    }).map((e,i)=> {
        return <h2 key={i}>{e}</h2>
      })
      

      
    return(
      <div>
        <input onChange={(e) => this.getInput(e.target.value)}></input>
        { displayAnimals }
      </div>

    ) // return end
  } // render end
} // class end
