import React, {Component} from 'react';

// Container
import Daily from '../Daily/Daily';

// Components
import TwoColumnView from '../../components/UI/TwoColumnView/TwoColumnView';

// CSS
import classes from './DailyDisplay.module.css';

// Data
import recordsData from '../../data/data';

class DailyDisplay extends Component {
    state = {
        currentDate: new Date(2021, 0, 1),
        year: "2021",
        month: "1",
        day: "1",
        data: []
    }

    loadCurrentData = (year, month, day) => {
        return recordsData.filter(
            record => record.year === year 
            && record.month === month 
            && record.day === day
        );
    }

    // Click one day next
    handleClickDateNext = () => {
        const {currentDate} = this.state;
        const nextDate = new Date(currentDate);
        nextDate.setDate(nextDate.getDate() + 1);
        const year = String(nextDate.getFullYear());
        const month = String(nextDate.getMonth()+1);
        const day = String(nextDate.getDate());

        const currentData = this.loadCurrentData(year, month, day);

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

        const currentData = this.loadCurrentData(year, month, day);

        this.setState({
            currentDate: prevDate,
            year,
            month,
            day,
            data: currentData
        });
    }

    componentDidMount = () => {
        const currentData = this.loadCurrentData(this.state.year, this.state.month, this.state.day);

        this.setState({
            data: currentData
        });
    }

    // Handle DatePicker
    handleChangeDatePicker = date => {
        if(date !== -1 && date !== undefined) {
            const day = String(date.getDate());
            const month = String(date.getMonth()+1);
            const year = String(date.getFullYear());

            const currentData = this.loadCurrentData(year, month, day);

            this.setState({
                currentDate: date,
                year,
                month,
                day,
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
                {daily}
            </div>
            // <div className={classes.DailyDisplay}>
                // <TwoColumnView
                //     mainContent={daily}
                //     sideContent={"Side Content"}
                // />
            // </div>
        );
    }
};

export default DailyDisplay;