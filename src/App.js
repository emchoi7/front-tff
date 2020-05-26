import React, {Component} from 'react';
import Display from './Display/Display';
import recordsData from './data/data';
import './App.css';
import './Mobile.css';
import './Web.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: new Date(),
      year: "",
      month: "",
      day: "",
      mode: "daily",
      data: []
    };
  }

  // When the app loads, I want it to 
  // 1. Get currentDate's date
  // 2. Get year, month, day from date
  // 3. Get the corresponding data
  componentWillMount = () => { 
    const date = new Date("2019-12-30");
    const dateStr = date.toISOString().split('T')[0];
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1);
    const day = String(date.getDate()+1);
    const currentData = recordsData.filter(
      record => record.year === year 
      && record.month === month 
      && record.day === day
    );
    this.setState(() => {
      return {
        currentDate: date,
        year,
        month,
        day,
        data: currentData
      }
    });

  }

  // Click one day back
  handleClickDateBack = () => {
    let {year, month, day} = this.state
    let daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    // Deal with day based on leap-year or not 
    if(year%4 === 0) {
      if(year%100 === 0) {
        if(year%400 !== 0) {
          // Leap Year
          daysInMonth[1] = 29;
        }
      } else {
        // Leap Year
        daysInMonth[1] = 29;
      }
    }
    month = Number(month)-1;
    day = Number(day);

    if(day - 1 < 1) {
      if(month - 1 < 0) {
        month = 11;
        year = Number(year) - 1;
      } else {
        month = month - 1
      }
      
      day = daysInMonth[month];
      
    } else {
      day = day - 1;
    }
    day = String(day);
    month = String(month + 1);
    year = String(year);
    const dateStr = year + '-' + month + '-' + day;
    const date = new Date(dateStr);
    const formattedDateStr = date.toISOString().split('T')[0];
    const currentData = recordsData.filter(
      record => record.year === year 
      && record.month === month 
      && record.day === day
    );

    this.setState(() => {
      return {
        currentDate: date,
        year,
        month,
        day,
        data: currentData
      }
    });
  }

  // Click one day next
  handleClickDateNext = () => {
    let {year, month, day} = this.state
    let daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(year%4 === 0) {
      if(year%100 === 0) {
        if(year%400 !== 0) {
          // Leap Year
          daysInMonth[1] = 29;
        }
      } else {
        // Leap Year
        daysInMonth[1] = 29;
      }
    }
    
    let monthNum = Number(month) - 1
    day = Number(day);
    if(day + 1 > daysInMonth[monthNum]) {
      if(monthNum + 1 > 11) {
        monthNum = 0;
        year = Number(year) + 1;
      } else {
        monthNum = monthNum + 1
      }
      day = 1;
    } else {
      day = day + 1;
    }
    day = String(day);
    month = String(monthNum + 1);
    year = String(year);
    
    const dateStr = year + '-' + month + '-' + day;
    const date = new Date(dateStr);
    const formattedDateStr = date.toISOString().split('T')[0];
    const currentData = recordsData.filter(
      record => record.year === year 
      && record.month === month 
      && record.day === day
    );

    this.setState(() => {
      return {
        currentDate: date,
        year,
        month,
        day,
        data: currentData
      }
    });
  }

  // Handle DatePicker
  handleChangeDatePicker = (date) => {
    console.log('hi', date);
  }

  render() {
    return (
      <div className="container">

          <div className="col">
            <Display 
              records={this.state.data} 
              date={this.state.currentDate} 
              mode={this.state.mode}
              handleClickDateBack={this.handleClickDateBack}
              handleClickDateNext={this.handleClickDateNext}
              handleChangeDatePicker={this.handleChangeDatePicker}
            />
          </div>

      </div>

    )
  }
}
