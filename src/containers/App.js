import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = ({
    persons: [
        {id: 1, name: 'Sean', age: '33'},
        {id: 2, name: 'Sam', age: '31'},
        {id: 3, name: 'Shari', age: '32'},
        {id: 4, name: 'Brooke', age: '31'}
    ],
    showPersons: false,
    showCockpit: true
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

    let persons = null;

      if(this.state.showPersons){
        persons = <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
            />;
    }

    return (
      <div className={styles.App}>
          <button onClick={() => this.setState({showCockpit: !this.state.showCockpit})}>show cockpit</button>
          {this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}/> : null}
        {persons}
      </div>
    )
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Does this work now?`))
  }
}

export default App;
