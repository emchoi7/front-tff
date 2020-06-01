/* 
    Contains Daily, DateSelector, and Record components
    Props are passed to DateSelector and Record from Daily
    Record components are put into an array 
*/
import React, {Component} from 'react';
import AddModal from '../AddRecord/AddModal';
import '../colors.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// Clicking on Record is only a rendering change so... Fcn should stay in the Daily component? Or Record component?
export default class Daily extends Component {
    constructor() {
        super();
        this.state = {
            showRecordDetailsKey: -1
        };
    }

    handleClickRecord = (key) => {
        if(this.state.showRecordDetailsKey !== key) {
            this.setState({
                showRecordDetailsKey: key
            });
        } else {
            this.setState({
                showRecordDetailsKey: -1
            });
        }

    }

    render() {
        const records = this.props.records.map(record => 
            {
                if(this.state.showRecordDetailsKey === record.time) {
                    return <Record 
                        key={record.time}
                        score={record.score}
                        time={record.time}
                        notes={record.text}
                        showDetails={true}
                        handleClickRecord={this.handleClickRecord}
                    />
                } else {
                    return <Record 
                        key={record.time}
                        score={record.score}
                        time={record.time}
                        notes={record.text}
                        showDetails={false}
                        handleClickRecord={this.handleClickRecord}
                    />
                }
            }
        );

        // let addModal = null;
        // if(
        //     // this.props.date.getMonth() === new Date().getMonth() 
        //     // && this.props.date.getDate() === new Date().getDate()
        //     // && this.props.date.getFullYear() === new Date().getFullYear() 
        //     this.props.date.getMonth() === 11
        //     && this.props.date.getDate() === 30
        //     && this.props.date.getFullYear() === 2019

        // ) {
        //     addModal = 
        //     (<div className="row">
        //         <AddModal />
        //     </div>);
        // }
        
        return (
            <div className="container">
            <div className="row mb-2">
                <div className="col text-center">
                    <DateSelector 
                        date={this.props.date} 
                        handleClickDateBack={this.props.handleClickDateBack}
                        handleClickDateNext={this.props.handleClickDateNext}
                        handleChangeDatePicker={this.props.handleChangeDatePicker}
                    />
                </div>
            </div>
            {/* {addModal} */}
            <div className="row">
                <div className="col text-center">
                    {records}
                </div>
            </div>
        </div>
        )
    }
}


function DateSelector(props) {
    return (
        <div className="date-selector">
                <button 
                    className="date-back" 
                    onClick={props.handleClickDateBack}
                > {"<"} </button>
                <DatePicker
                    selected={props.date}
                    onChange={props.handleChangeDatePicker}
                    onSelect={props.handleSelectDatePicker}
                />
                <button 
                    className="date-next"
                    onClick={props.handleClickDateNext}
                > {">"} </button>
        </div>
    )
}

function Record(props) {
    let hungerLevel = 'Neutral';
    let colorClass = 'hunger-blue';
    let classNames = ['record-card', 'container', 'mb-3'];

    if(props.score >= 0 && props.score < 1) {
        hungerLevel = 'Starving';
        colorClass = 'hunger-red';
    } else if(props.score >= 1 && props.score < 2) {
        hungerLevel = 'Famished';
        colorClass = 'hunger-orange';
    } else if(props.score >= 2 && props.score < 3) {
        hungerLevel = 'Hungry';
        colorClass = 'hunger-yellow';
    } else if(props.score >= 3 && props.score < 4) {
        hungerLevel = 'Peckish';
        colorClass = 'hunger-green';
    } else if(props.score >= 4 && props.score < 5) {
        hungerLevel = 'Neutral';
        colorClass = 'hunger-blue';
    } else if(props.score >= 5 && props.score < 6) {
        hungerLevel = 'Satiated';
        colorClass = 'hunger-green';
    } else if(props.score >= 6 && props.score < 7) {
        hungerLevel = 'Full';
        colorClass = 'hunger-yellow';
    } else if(props.score >= 7 && props.score < 8) {
        hungerLevel = 'Stuffed';
        colorClass = 'hunger-orange';
    } else if(props.score >= 8 && props.score < 9) {
        hungerLevel = 'Bursting';
        colorClass = 'hunger-red';
    }

    classNames.push(colorClass);
    const classes = classNames.join(' ');

    let details = null;
    if(props.showDetails) {
        details = (<div className="row record-card-add">
            <p>{props.notes}</p>
        </div>);
    }

    return (
        <div className={classes} onClick={props.handleClickRecord.bind(this, props.time)}>
                <div className="row">
                    <p className="text-center col m-1">{props.time}</p>
                </div>
                <div className="row">
                    <h3 className="text-center col mt-0">{hungerLevel}</h3>
                </div>
                {details}
        </div>
    )
}