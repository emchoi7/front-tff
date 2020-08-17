/*
    Custom column component that wraps its children in a column class from bootstrap
*/
import React from 'react';

// CSS
import classes from './Column.module.css'

const column = (props) => {
    let colNum = "col";
    if(props.colNum) {
        colNum = "col-" + props.colNum.toString();
    }
    const classNames = [colNum, ...props.customClasses.map(className => classes[className])];
    
    return (
        <div className={classNames.join(' ')}>
            {props.children}
        </div>
    );
};

export default column;