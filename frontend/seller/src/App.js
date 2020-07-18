import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Requests from './pages/Requests';
import AcceptedRequests from './pages/AcceptedRequests';
import Services from './pages/Services';
import Sale from './pages/Sale';

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
      <Route exact path="/accepted-requests">
        <AcceptedRequests />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
      <Route exact path="/sale">
        <Sale />
      </Route>
    </Router>
  );
}

export default App;
