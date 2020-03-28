import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    // state = {
    //     counter: 0
    // };
    //
    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } );
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } );
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } );
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } );
    //             break;
    //     }
    // };

    subtractFromCounter(){
        this.props.onSubtractFromCounter(7);
    };

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddToCounter}  />
                <CounterControl label="Subtract 7" clicked={this.subtractFromCounter.bind(this)}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ctr: state.counter,
    storedResults: state.results
});

const mapDispatchToProps = dispatch => ({
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onAddToCounter: () => dispatch({type: 'ADD', value: 10}),
    onSubtractFromCounter: (num) => dispatch({type: 'SUBTRACT', value: num}),
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', id})
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);