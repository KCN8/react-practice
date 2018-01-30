import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>REACT APP STUFF</h1>
        <p>This is really working</p>
        <Person name="Casey" age="32"/>
        <Person name="Matt" age="32">Hobbies: Yoga</Person> 
        <Person name="Joe" age="31"/>
      </div>
    );
  }
}

export default App;
