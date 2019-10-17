import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {

    state = {
        inputText: '',
        inputTextLength: 0,
        characters: []
    };

    inputChangeHandler = (event) => {
        this.setState({
            inputText: event.target.value,
            inputTextLength: event.target.value.length,
            characters: Array
                .from(event.target.value)
                .map(char => char)
        });
    };

    deleteCharHandle = (charIndex) => {
        const charArray = [...this.state.characters];
        charArray.splice(charIndex, 1);
        const inputText = charArray.join('');
        this.setState({
            characters: charArray,
            inputText,
            inputTextLength: this.state.inputTextLength-1
        });
    };

  render() {
      const charStyle = {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "60px",
          width: "60px",
          height: "60px",
          color: "white",
          backgroundColor: "gray",
          border: "1px solid teal",
          padding: "5px",
          margin: "3px"
      };
      const style = {
          display: "flex",
          justifyContent: "center"
      };

    let chars = (
        <div style={style}>
            {this.state.characters.map((char, index) => {
                return <Char
                    click={() => this.deleteCharHandle(index)}
                    styling={charStyle}
                    content={char} />
            })}
        </div>
    );

    return (
      <div className="App">
          <input
              type="text"
              value={this.state.inputText}
              onChange={(event) => this.inputChangeHandler(event)}/>
          <p>{this.state.inputTextLength}</p>
          <Validation
              textLength={this.state.inputTextLength}/>
          {chars}
      </div>
    );
  }
}

export default App;
