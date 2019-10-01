import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return(
        <input
            onChange={props.changeValue}
            type="text"
            value={props.name} />
    )
};

export default userInput;