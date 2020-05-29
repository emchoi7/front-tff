/*
    Contains the AddScreen, AddCard, ScoreSlider, TextField, SaveButton components
    State lives in AddScreen
    AddScreen uses AddCard, ScoreSlider, TextField, SaveButton components
*/
import React, { Component } from 'react';

export default class AddScreen extends Component {
    constructor() {
        super();
        this.state = {
            score: 5,
            text: ""
        };
    }
    render() {
        return (
            <div>
                <div></div>
            </div>
        )
    }
}

function AddCard() {
    return (
        <div>
            
        </div>
    )
}

function ScoreSlider() {
    return (
        <div>
            
        </div>
    )
}

function TextField() {
    return (
        <div>
            
        </div>
    )
}

function SaveButton() {
    return (
        <div>
            
        </div>
    )
}