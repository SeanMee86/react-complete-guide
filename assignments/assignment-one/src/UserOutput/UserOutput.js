import React from 'react';

const userOutput = props => {
    const style = {
        color: 'blue',
    };
    return (
        <div><p
            style={style}
            onClick={props.changeName}>Hello my name is {props.userName}</p></div>
    )
};

export default userOutput;