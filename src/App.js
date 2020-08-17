import React from 'react';
import {Route} from 'react-router-dom';

// HOC
import Layout from './hoc/Layout/Layout';

// Container
import DailyDisplay from './containers/DailyDisplay/DailyDisplay';

import './App.css';
import './Mobile.css';
import './Web.css';

const App = () => {
  return (
      <div>
        <Layout>
          <DailyDisplay />
        </Layout>
      </div>
    );
}

export default App;