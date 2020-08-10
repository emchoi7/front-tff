import React from 'react';

function Record(props) {
    let hungerLevel = 'Neutral';
    let colorClass = 'hunger-blue';
    let classNames = ['record-card', 'container', 'mb-3'];

    if(props.score >= 0 && props.score < 1) {
        hungerLevel = 'Starving';
        colorClass = 'hunger-red';
    } else if(props.score >= 1 && props.score < 2) {
        hungerLevel = 'Famished';
        colorClass = 'hunger-orange';
    } else if(props.score >= 2 && props.score < 3) {
        hungerLevel = 'Hungry';
        colorClass = 'hunger-yellow';
    } else if(props.score >= 3 && props.score < 4) {
        hungerLevel = 'Peckish';
        colorClass = 'hunger-green';
    } else if(props.score >= 4 && props.score < 5) {
        hungerLevel = 'Neutral';
        colorClass = 'hunger-blue';
    } else if(props.score >= 5 && props.score < 6) {
        hungerLevel = 'Satiated';
        colorClass = 'hunger-green';
    } else if(props.score >= 6 && props.score < 7) {
        hungerLevel = 'Full';
        colorClass = 'hunger-yellow';
    } else if(props.score >= 7 && props.score < 8) {
        hungerLevel = 'Stuffed';
        colorClass = 'hunger-orange';
    } else if(props.score >= 8 && props.score < 9) {
        hungerLevel = 'Bursting';
        colorClass = 'hunger-red';
    }

    classNames.push(colorClass);
    const classes = classNames.join(' ');

    let details = null;
    if(props.showDetails) {
        details = 
        (<div className="row record-card-add">
            <p>{props.notes}</p>
        </div>);
    }

    return (
        <div className={classes} onClick={props.handleClickRecord.bind(this, props.time)}>
                <div className="row">
                    <p className="text-center col m-1">{props.time}</p>
                </div>
                <div className="row">
                    <h3 className="text-center col mt-0">{hungerLevel}</h3>
                </div>
                {details}
        </div>
    )
}

export default Record;