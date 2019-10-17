import React from 'react';

const validation = (props) => {
    return (
        <p>{props.textLength < 5 ? 'Too Short' : 'Long Enough'}</p>
    )
};

export default validation;