import React from 'react'

const charChomponent = (props) => {
    return(
        <p
            onClick={props.click}
            className={'singleChar'}
            style={props.styling}>{props.content}</p>
    )
};

export default charChomponent;