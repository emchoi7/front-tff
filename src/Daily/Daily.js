/* 
    Contains Daily, DateSelector, and Record components
    Props are passed to DateSelector and Record from Daily
    Record components are put into an array 
*/
import React from 'react';

export default function Daily(props) {
    console.log(props.records)
    const records = props.records.map((record, index) => <Record 
            key={index}
            score={record["hunger-score"]}
            time={record.timestamp}
            notes={record.notes}
        />
    );
    return (
        <div>
            <DateSelector date={props.date} />
            {records}
        </div>
    )
}

function DateSelector(props) {
    return (
        <div>
            <button> {"<"} </button>

            <button>
                <h3>{props.date}</h3>
            </button>

            <button> {">"} </button>
        </div>
    )
}

function Record(props) {
    let hungerLevel = 'Neutral';
    let colorClass = 'hunger-blue';

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

    return (
        <div className={colorClass}>
            <p>{props.time}</p>
            <h2>{hungerLevel}</h2>
        </div>
    )
}