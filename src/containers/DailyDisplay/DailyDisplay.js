import React, {Component} from 'react';

// Container
import Daily from '../Daily/Daily';

// Components
import TwoColumnView from '../../components/UI/TwoColumnView/TwoColumnView';

// CSS
import classes from './DailyDisplay.module.css';

// Data
import recordsData from '../../data/data';
import twoColumnView from '../../components/UI/TwoColumnView/TwoColumnView';

class DailyDisplay extends Component {
    state = {
        currentDate: new Date(),
        year: "",
        month: "",
        day: "",
        data: []
    }

    // Click one day next
    handleClickDateNext = () => {
        const {currentDate} = this.state;
        const nextDate = new Date(currentDate);
        nextDate.setDate(nextDate.getDate() + 1);
        const year = String(nextDate.getFullYear());
        const month = String(nextDate.getMonth()+1);
        const day = String(nextDate.getDate());

        const currentData = recordsData.filter(
        record => record.year === year 
        && record.month === month 
        && record.day === day
        );

        this.setState({
            currentDate: nextDate,
            year,
            month,
            day,
            data: currentData
        });
    }

        // Click one day next
    handleClickDateBack = () => {
        const {currentDate} = this.state;
        const prevDate = new Date(currentDate);
        prevDate.setDate(prevDate.getDate() - 1);
        const year = String(prevDate.getFullYear());
        const month = String(prevDate.getMonth()+1);
        const day = String(prevDate.getDate());

        const currentData = recordsData.filter(
        record => record.year === year 
        && record.month === month 
        && record.day === day
        );

        this.setState({
            currentDate: prevDate,
            year,
            month,
            day,
            data: currentData
        });
    }

    // Handle DatePicker
    handleChangeDatePicker = date => {
        if(date !== -1 && date !== undefined) {
        const day = String(date.getDate());
        const month = String(date.getMonth()+1);
        const year = String(date.getFullYear());
        const currentData = recordsData.filter(
            record => record.year === year 
            && record.month === month 
            && record.day === day
        );
        this.setState({
            currentDate: date,
            data: currentData
        });
        }
    }

    render() {
        const daily = (<Daily 
            records={this.state.data} 
            date={this.state.currentDate}
            handleClickDateBack={this.handleClickDateBack}
            handleClickDateNext={this.handleClickDateNext}
            handleChangeDatePicker={this.handleChangeDatePicker}
        />);
        return (
            <div className={classes.DailyDisplay}>
                <TwoColumnView
                    mainContent={daily}
                    sideContent={"Side Content"}
                />
            </div>
        );
    }
};

export default DailyDisplay;