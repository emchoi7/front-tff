/* 
    Contains the Display component which is the main middle part that 
    displays the user's records.
    Depending on the App component's state, it renders Daily or Monthly component.
*/
import React from 'react';
import Daily from '../Daily/Daily';

export default function Display(props) {
    return (
        <div className="display container">
            <div className="row">
                <Daily 
                    records={props.records} 
                    date={props.date}
                    handleClickDateBack={props.handleClickDateBack}
                    handleClickDateNext={props.handleClickDateNext}
                    handleChangeDatePicker={props.handleChangeDatePicker}
                    handleSelectDatePicker={props.handleSelectDatePicker}
                />
            </div>
        </div>
    )
}
