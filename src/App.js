import React from 'react';
import {Route, Switch} from 'react-router-dom';

// HOC
import Layout from './hoc/Layout/Layout';

// Container
import DailyDisplay from './containers/DailyDisplay/DailyDisplay';
import MonthlyDisplay from './containers/MonthlyDisplay/MonthlyDisplay';

// CSS
import classes from './App.module.css';

const App = () => {
  return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route exact path="/" component={DailyDisplay} />
            {/* <Route path="/calendar" component={MonthlyDisplay} />
            <Route path="/settings"><p>Settings</p></Route> */}
          </Switch>
        </Layout>
      </div>
    );
}

export default App;