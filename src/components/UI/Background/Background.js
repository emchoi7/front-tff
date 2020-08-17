import React from 'react';

// CSS
import classes from './Background.module.css';

const Background = (props) => (
    <div
        onClick={props.onClick}
        className={classes.Background}
        style={props.style}
    >
    </div>
);

export default Background;