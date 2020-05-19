import React, {Component} from 'react';
import Display from './Display/Display';
import data from './data/data';

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <Display records={data.log} />
      </div>
    )
  }
}
