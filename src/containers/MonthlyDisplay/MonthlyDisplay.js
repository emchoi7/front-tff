import React, { Component } from 'react';

// Components
import TwoColumnView from '../../components/UI/TwoColumnView/TwoColumnView';


export default class MonthlyDisplay extends Component {
    render() {
        return (
            <div>
                <TwoColumnView
                    mainContent={'monthly'}
                    sideContent={"Side Content"}
                />
            </div>
        )
    }
}
