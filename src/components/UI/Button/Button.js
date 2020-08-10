import React from 'react';

const Button = (props) => (
    <button
        className={props.classes ? [props.classes].join(' ') : null}
        onClick={props.onClick}
    >
        {props.children}
    </button>
)

export default Button;