import React from 'react';

const validationComponent = (props) => {
    return (
        <p>{props.textLength < 5 ? 'Too Short' : 'Long Enough'}</p>
    )
};

export default validationComponent;