/* 
    Contains Daily, DateSelector, and Record components
    Props are passed to DateSelector and Record from Daily
    Record components are put into an array 
*/
import React from 'react';
import '../colors.css';

// Clicking on Record is only a rendering change so... Fcn should stay in the Daily component? Or Record component?
export default function Daily(props) {
    const records = props.records.map((record, index) => <Record 
            key={index}
            score={record.score}
            time={record.time}
            notes={record.text}
        />
    );

    return (
        <div className="container">
            <div className="row mb-2">
                <div className="col text-center">
                    <DateSelector 
                        date={props.date} 
                        handleClickDateBack={props.handleClickDateBack}
                        handleClickDateNext={props.handleClickDateNext}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {records}
                </div>
            </div>
        </div>
    )
}

function DateSelector(props) {
    return (
        <div className="date-selector">
                <button 
                    className="date-back" 
                    onClick={props.handleClickDateBack}
                > {"<"} </button>

                <button className="date-selector-btn">
                    <h4>{props.date}</h4>
                </button>

                <button 
                    className="date-next"
                    onClick={props.handleClickDateNext}
                > {">"} </button>
        </div>
    )
}

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

    return (
        <div className={classes}>
                <div className="row">
                    <p className="text-center col m-1">{props.time}</p>
                </div>
                <div className="row">
                    <h3 className="text-center col mt-0">{hungerLevel}</h3>
                </div>
        </div>
    )
}