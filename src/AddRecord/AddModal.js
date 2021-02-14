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

    handleTextInput = (e) => {
        const text = e.target.value;
        this.setState({
            text
        });
    }

    render() {
        const date = new Date();
        // const dateStr = date.toDateString();
        const dateStr = "Fri Jan 01 2021";
        const timeStr = date.toTimeString().split(':').slice(0,2).join(':');
        let hungerLevel = 'Neutral';
        let colorClass = 'hunger-level-5';
        if(this.state.score >= 0 && this.state.score < 1) {
            hungerLevel = 'Starving';
            colorClass = 'hunger-level-1';
        } else if(this.state.score >= 1 && this.state.score < 2) {
            hungerLevel = 'Famished';
            colorClass = 'hunger-level-2';
        } else if(this.state.score >= 2 && this.state.score < 3) {
            hungerLevel = 'Hungry';
            colorClass = 'hunger-level-3';
        } else if(this.state.score >= 3 && this.state.score < 4) {
            hungerLevel = 'Peckish';
            colorClass = 'hunger-level-4';
        } else if(this.state.score >= 4 && this.state.score < 5) {
            hungerLevel = 'Neutral';
            colorClass = 'hunger-level-5';
        } else if(this.state.score >= 5 && this.state.score < 6) {
            hungerLevel = 'Satiated';
            colorClass = 'hunger-level-4';
        } else if(this.state.score >= 6 && this.state.score < 7) {
            hungerLevel = 'Full';
            colorClass = 'hunger-level-3';
        } else if(this.state.score >= 7 && this.state.score < 8) {
            hungerLevel = 'Stuffed';
            colorClass = 'hunger-level-2';
        } else if(this.state.score >= 8 && this.state.score <= 9) {
            hungerLevel = 'Bursting';
            colorClass = 'hunger-level-1';
        }
        return (
            <div className={colorClass + ' container text-center py-2 my-2 add-modal'}>
                <div className="row">
                    <h5 className="col">{dateStr}</h5>
                </div>
                <div className="row">
                    <h5 className="col">{timeStr}</h5>
                </div>
                <div className="row">
                    <h3 className="col">{hungerLevel}</h3>
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
                    <div className="row">
                        <div className="col"><input
                        type="text"
                        value={this.state.text}
                        onChange={this.handleTextInput}
                        className="col add-text"
                    ></input></div>
                    </div>
                    <button
                        className="save-record-btn my-2"
                        onClick={(e) => this.props.handleSubmitData(e, this.state.score, this.state.text)} // Refer to the react course...
                    >Save Record</button>
                </form>
            </div>
        )
    }
}