/* Main display panel in the middle of the page */
import React, { Component } from 'react';
import Daily from '../Daily/Daily';

export default class Display extends Component {
    constructor() {
        super();
        this.state = {
            mode: "daily"
        };
    }

    render() {
        let time = <Daily />
        return (
            <div>
                {time}
            </div>
        )
    }
}
