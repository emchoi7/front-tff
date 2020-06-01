/*
    Contains the AddButton component that triggers the rendering of AddScreen
*/
import React from 'react';

export default function AddButton(props) {
    return (
        <button
            className="add-button"
            onClick={props.handleClickAddButton}
        >
            Add Record
        </button>
    )
}
