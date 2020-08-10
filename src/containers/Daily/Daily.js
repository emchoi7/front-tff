/* 
    Contains Daily, DateSelector, and Record components
    Props are passed to DateSelector and Record from Daily
    Record components are put into an array 
*/
import React, {Component} from 'react';
// import AddModal from '../AddRecord/AddModal';
import Record from '../../components/Record/Record';
import DateSelector from '../../components/DateSelector/DateSelector';

import '../colors.css';
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




