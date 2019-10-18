import React from 'react';

const validation = (props) => {
    let validationMessage = props.textLength < 5 ? 'Too Short' : 'Long Enough';
    return (
        <p>{validationMessage}</p>
    )
};

export default validation;