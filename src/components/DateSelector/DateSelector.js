import React from 'react';
import DatePicker from 'react-datepicker';

// Components
import Button from '../UI/Button/Button';

function DateSelector(props) {
    return (
        <div className="date-selector">
                <Button
                    type={"Arrow"}
                    onClick={props.handleClickDateBack}
                > <i class="fas fa-caret-left"></i> </Button>
                <DatePicker
                    selected={props.date}
                    onChange={props.handleChangeDatePicker}
                    onSelect={props.handleSelectDatePicker}
                />
                <Button
                    type={"Arrow"}
                    onClick={props.handleClickDateNext}
                > <i class="fas fa-caret-right"></i> </Button>
        </div>
    )
}

export default DateSelector;