import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{

    componentWillUnmount() {
        console.log('Persons component will Unmount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.persons !== this.props.persons;
    }

    render() {
            return (
                this.props.persons.map((person, index) =>
                    <Person
                        name={person.name}
                        age={person.age}
                        click={() => this.props.clicked(index)}
                        key={person.id}
                        changed={(event) => this.props.changed(event, person.id)}/>
                )
            );
    }
}

export default Persons;