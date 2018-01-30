import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    people: [
      { name: "Casey", age: 32 },
      { name: "Matt", age: 31 },
      { name: "CJ", age: 30 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      people: [
        { name: "KC", age: 32 },
        { name: "Matt", age: 31 },
        { name: "CJ", age: 0 }
      ] })
  }

  render() {
    return (
      <div className="App">
        <h1>REACT APP STUFF</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}/>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>Hobbies: Yoga</Person> 
        <Person name={this.state.people[2].name} age={this.state.people[2].age}/>
      </div>
    );
  }
}

export default App;
