import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Requests from './pages/Requests';

function App() {
  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/notifications">
        <Notifications />
      </Route>
      <Route exact path="/requests">
        <Requests />
      </Route>
    </Router>
  );
}

export default App;
