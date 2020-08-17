import React from 'react';

//CSS
import classes from './Button.module.css';

const Button = (props) => {
    const classNames = [classes.Button, classes[props.type]];
    return (
        <button
            className={classNames.join(' ')}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;

// WIP: Where should the css be? 
//Because if we wanna pass classes that we don't wanna ALL define in the Button.css, we need to import it from elsewhere/or sth 
// Above works with a universal CSS file... 
// We could also just already have everything in the Button.css