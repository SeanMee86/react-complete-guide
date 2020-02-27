import React, {Component, Fragment} from 'react';
import styles from './Person.css';
import Aux from '../../../hoc/Auxiliary'
import withClass from "../../../hoc/withClass";

class Person extends Component {
    // const rnd = Math.random();
    //
    // if(rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }
    render() {
        return (
            <Fragment>
                <h4 onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old!</h4>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Fragment>
        )
    }
}

export default withClass(Person,styles.Person);
