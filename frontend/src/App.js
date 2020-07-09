import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
