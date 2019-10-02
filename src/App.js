import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  appLogo = "App-logo";
  state = ({
    persons: [
      {name: 'Sean', age: '33'},
      {name: 'Sam', age: '31'},
      {name: 'Shari', age: '32'}
    ],
    otherState: 'some state',
      showPersons: false
  });
  switchNameHandler = (newName) => {
    //BAD ----> this.state.persons[0].name = 'Sean Mee'
    this.setState({
      persons: [
        {name: newName, age: '33'},
        {name: 'Sam', age: '31'},
        {name: 'Shari', age: '27'}
      ],
      otherState: 'Some other state',
    })
  };
  nameChangedHandler = (event) => {
      this.setState({
          persons: [
              {name: event.target.value, age: '33'},
              {name: 'Sam', age: '31'},
              {name: 'Shari', age: '27'}
          ],
          otherState: 'Some other state'
      })
  };
  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  };
  render(){
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };
    return (
      <div className="App">
        <h1>Hi I'm react App</h1>
        <p>This is working! Look at the fancy spinner!</p>
        <img src={logo} className={this.appLogo} alt="logo"/>
        <button
            style={style}
            onClick={this.togglePersonsHandler}>Switch Name</button>
          {
              this.state.showPersons === true ?
              <div>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'Shoueyaweyn')}
                    changed={this.nameChangedHandler}>My Hobbies are Climbing, Guitar, and
                    Games</Person>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}/>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
              </div> : null
          }
      </div>
    )
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Does this work now?`))
  }
}

export default App;
