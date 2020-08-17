import React from 'react';

// CSS
import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    const classNames = props.classNames + ' ' + classes.NavigationItem;
    return (
        <li className={classNames}>
            <span>{props.children}</span>
        </li>
    );
};

export default navigationItem;