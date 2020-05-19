import React from 'react';
import Daily from '../Daily/Daily';

export default function Display(props) {
    return (
        <div className="display">
            <Daily records={props.records} date={'May 05, 2020'}/>
        </div>
    )
}
