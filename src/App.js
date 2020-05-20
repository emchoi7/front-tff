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
      today: "",
      year: "",
      month: "",
      day: "",
      mode: "daily",
      data: []
    };
  }

  // When the app loads, I want it to 
  // 1. Get today's date
  // 2. Get year, month, day from date
  // 3. Get the corresponding data
  componentWillMount = () => { 
    const date = new Date("2019-12-30");
    const dateStr = date.toDateString();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1);
    const day = String(date.getDate()+1);
    const todaysData = recordsData.filter(
      record => record.year === year 
      && record.month === month 
      && record.day === day
    );
    this.setState(() => {
      return {
        today: dateStr,
        year,
        month,
        day,
        data: todaysData
      }
    });

  }

  render() {
    return (
      <div className="container">
        <div className="row">

          {/* <div className="col">
          </div> */}
          <div className="col">
            <Display records={this.state.data} date={this.state.today} mode={this.state.mode}/>
          </div>
          {/* <div className="col">
          </div> */}
        </div>
      </div>

    )
  }
}
