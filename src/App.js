import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  appLogo = "App-logo";

  state = ({
    persons: [
        {id: 1, name: 'Sean', age: '33'},
        {id: 2, name: 'Sam', age: '31'},
        {id: 3, name: 'Shari', age: '32'},
        {id: 4, name: 'Brooke', age: '31'}
    ],
    otherState: 'some state',
    showPersons: false,
  });

  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => p.id === id);
      const person = {...this.state.persons[personIndex]};
      // const person = Object.assign({}, this.state.persons[personIndex]);
      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
    this.setState({persons});
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
          backgroundColor: 'green',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer',
          color: 'white'
      };

    let persons = null;

    if(this.state.showPersons){
        persons = (
            <div>
                {this.state.persons.map((person, index) =>
                        <Person
                            name={person.name}
                            age={person.age}
                            click={() => this.deletePersonHandler(index)}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    )
                }
            </div>
        );
        style.backgroundColor = 'red';

    }

    let classes = [];

    if(this.state.persons.length <= 2){
        classes.push('red');
    }
    if(this.state.persons.length <= 1){
        classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi I'm react App</h1>
        <p className={classes.join(' ')}>This is working! Look at the fancy spinner!</p>
        <img src={logo} className={this.appLogo} alt="logo"/>
        <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Names</button>
        {persons}
      </div>
    )
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Does this work now?`))
  }
}

export default App;
