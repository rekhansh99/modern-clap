import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      </Switch>
    </Router>
  );
}

export default App;
