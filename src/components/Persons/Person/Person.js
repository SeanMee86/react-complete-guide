import React, {Component, Fragment} from 'react';
import styles from './Person.css';
// import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import withClass from "../../../hoc/withClass";
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    // const rnd = Math.random();
    //
    // if(rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus()
    }

    render() {
        return (
            <Fragment>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Login</p>}
                <h4 onClick={this.props.click}>
                    My name is {this.props.name} and I am {this.props.age} years old!
                </h4>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    ref={this.inputElementRef}
                    // ref={(inputEl) => {this.inputEl = inputEl}}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Fragment>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person,styles.Person);
