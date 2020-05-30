/*
    Contains the AddScreen, AddModal, ScoreSlider, TextField, SaveButton components
    State lives in AddScreen
    AddScreen uses AddModal, ScoreSlider, TextField, SaveButton components
*/
import React, { Component } from 'react';

export default class AddModal extends Component {
    constructor() {
        super();
        this.state = {
            score: 4,
            text: "",

        };
    }

    handleSliderChange = (e) => {
        const score = e.target.value;
        this.setState({
            score
        });
    }

    render() {
        let hungerLevel = 'Neutral'
        let colorClass = 'hunger-blue' 
        if(this.state.score >= 0 && this.state.score < 1) {
            hungerLevel = 'Starving';
            colorClass = 'hunger-red';
        } else if(this.state.score >= 1 && this.state.score < 2) {
            hungerLevel = 'Famished';
            colorClass = 'hunger-orange';
        } else if(this.state.score >= 2 && this.state.score < 3) {
            hungerLevel = 'Hungry';
            colorClass = 'hunger-yellow';
        } else if(this.state.score >= 3 && this.state.score < 4) {
            hungerLevel = 'Peckish';
            colorClass = 'hunger-green';
        } else if(this.state.score >= 4 && this.state.score < 5) {
            hungerLevel = 'Neutral';
            colorClass = 'hunger-blue';
        } else if(this.state.score >= 5 && this.state.score < 6) {
            hungerLevel = 'Satiated';
            colorClass = 'hunger-green';
        } else if(this.state.score >= 6 && this.state.score < 7) {
            hungerLevel = 'Full';
            colorClass = 'hunger-yellow';
        } else if(this.state.score >= 7 && this.state.score < 8) {
            hungerLevel = 'Stuffed';
            colorClass = 'hunger-orange';
        } else if(this.state.score >= 8 && this.state.score <= 9) {
            hungerLevel = 'Bursting';
            colorClass = 'hunger-red';
        }
        return (
            <div className={colorClass + ' container text-center'}>
                <div className="row">
                    <h4 className="col">Date here</h4>
                </div>
                <div className="row">
                    <h2 className="col">Time here</h2>
                </div>
                <form>
                    <div className="row">
                        <div className="col"><input 
                            type="range" 
                            min="0" 
                            max="9"
                            step="0.1" 
                            value={this.state.score} 
                            className="score-slider"
                            onChange={this.handleSliderChange}
                        ></input></div>
                    </div>
                    <div classname="row">
                        <div className="col"><input
                        type="text"
                        value={this.state.text}
                        className="col"
                    ></input></div>
                    </div>

                </form>
            </div>
        )
    }
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