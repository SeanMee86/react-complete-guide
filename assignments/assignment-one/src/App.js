import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput"

class App extends Component {
  state = {
    username: "Sean"
  };

  switchNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  };

  render() {
    return (
      <div className="App">
        <UserInput
            name={this.state.username}
            changeValue={this.switchNameHandler} />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName='Sean Mee'/>
      </div>
    );
  }
}

export default App;
