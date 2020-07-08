import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about-us" component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;
