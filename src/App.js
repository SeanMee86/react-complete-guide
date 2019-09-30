import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  appLogo = "App-logo";
  state = {
    persons: [
      {name: 'Sean', age: '33'},
      {name: 'Sam', age: '31'},
      {name: 'Shari', age: '32'}
    ],
    switch: 0
  };
  switchNameHandler = () => {
    //BAD ----> this.state.persons[0].name = 'Sean Mee'
    this.state.switch === 0 ? this.setState({
      persons: [
        {name: 'Sean mee', age: '33'},
        {name: 'Sam', age: '31'},
        {name: 'Shari', age: '27'}
      ],
      switch: 1
    }) : this.setState({
      persons: [
        {name: 'Sean', age: '33'},
        {name: 'Sam', age: '31'},
        {name: 'Shari', age: '32'}
      ],
      switch: 0
    })
  };
  render() {
    return (
      <div className="App">
        <h1>Hi I'm react App</h1>
        <p>This is working! Look at the fancy spinner!</p>
        <img src={logo} className={this.appLogo} alt="logo"/>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies are Climbing, Guitar, and Games</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Does this work now?`))
  }
}

export default App;
