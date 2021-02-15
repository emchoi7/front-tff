import React from 'react';

//CSS
import classes from './Record.module.css';

const Record = (props) => {
    let hungerLevel = 'Neutral';
    let colorClass = 'hunger-level-5';
    let classNames = [classes.Record];//'container', 'mb-3'];

    if(props.score >= 0 && props.score < 1) {
        hungerLevel = 'Starving';
        colorClass = 'hunger-level-1';
    } else if(props.score >= 1 && props.score < 2) {
        hungerLevel = 'Famished';
        colorClass = 'hunger-level-2';
    } else if(props.score >= 2 && props.score < 3) {
        hungerLevel = 'Hungry';
        colorClass = 'hunger-level-3';
    } else if(props.score >= 3 && props.score < 4) {
        hungerLevel = 'Peckish';
        colorClass = 'hunger-level-4';
    } else if(props.score >= 4 && props.score < 5) {
        hungerLevel = 'Neutral';
        colorClass = 'hunger-level-5';
    } else if(props.score >= 5 && props.score < 6) {
        hungerLevel = 'Satiated';
        colorClass = 'hunger-level-4';
    } else if(props.score >= 6 && props.score < 7) {
        hungerLevel = 'Full';
        colorClass = 'hunger-level-3';
    } else if(props.score >= 7 && props.score < 8) {
        hungerLevel = 'Stuffed';
        colorClass = 'hunger-level-2';
    } else if(props.score >= 8 && props.score < 9) {
        hungerLevel = 'Bursting';
        colorClass = 'hunger-level-1';
    }

    classNames.push(colorClass);
    const classNamesStr = classNames.join(' ');

    let details = null;
    if(props.showDetails) {
        details = 
        (<div className={classes.RecordItem}>
            <p>{props.notes}</p>
        </div>);
    }

    return (
        <div className={classNamesStr} onClick={props.handleClickRecord.bind(this, props.time)}>
                <div className={classes.RecordItem}>
                    <p className="text-center col m-1">{props.time}</p>
                </div>
                <div className={classes.RecordItem}>
                    <h3 className="text-center col mt-0">{hungerLevel}</h3>
                </div>
                {details}
        </div>
    )
}

export default Record;