import React, {Component} from 'react';
import Display from './Display/Display';
import data from './data/data';
import './App.css';
import './Mobile.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="container">
      <div className="row">

        <div className="col">
        </div>
        <div className="col">
          <Display records={data.log} />
        </div>
        <div className="col">
    
        </div>
      </div>
      </div>

    )
  }
}
