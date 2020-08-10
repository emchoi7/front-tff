import React from 'react';
import DatePicker from 'react-datepicker';

function DateSelector(props) {
    return (
        <div className="date-selector">
                <button 
                    className="date-back" 
                    onClick={props.handleClickDateBack}
                > {"<"} </button>
                <DatePicker
                    selected={props.date}
                    onChange={props.handleChangeDatePicker}
                    onSelect={props.handleSelectDatePicker}
                />
                <button 
                    className="date-next"
                    onClick={props.handleClickDateNext}
                > {">"} </button>
        </div>
    )
}

export default DateSelector;