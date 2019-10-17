import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
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
            characters: Array.from(event.target.value).map(char => char)
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
      const style = {
          display: "inline-block",
          color: "white",
          backgroundColor: "gray",
          border: "1px solid teal",
          padding: "5px",
          margin: "3px"
      };

    let chars = (
        <div>
            {this.state.characters.map((char, index) => {
                return <CharComponent
                    click={() => this.deleteCharHandle(index)}
                    styling={style}
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
          <ValidationComponent
              textLength={this.state.inputTextLength}/>
          {chars}
      </div>
    );
  }
}

export default App;
