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
        {name: 'Shari', age: '32'},
        {name: 'Brooke', age: '31'}
    ],
    otherState: 'some state',
    showPersons: false
  });

  nameChangedHandler = (event) => {
    this.setState({
        persons: [
            {name: event.target.value, age: '33'},
            {name: 'Sam', age: '31'},
            {name: 'Shari', age: '27'},
            {name: 'Brooke', age: '31'}
        ],
        otherState: 'Some other state'
    })
  };

  deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons})
  };

  togglePersonsHandler = () => this.setState({showPersons: !this.state.showPersons});

  render(){
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

    let persons = null;

    if(this.state.showPersons){
        persons = (
            <div>
                {this.state.persons.map((person, index) => <Person
                    name={person.name}
                    age={person.age}
                    click={() => this.deletePersonHandler(index)}/>
                    )
                }
            </div>
        )
    }
    return (
      <div className="App">
        <h1>Hi I'm react App</h1>
        <p>This is working! Look at the fancy spinner!</p>
        <img src={logo} className={this.appLogo} alt="logo"/>
        <button
            style={style}
            onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    )
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Does this work now?`))
  }
}

export default App;
