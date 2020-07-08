import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/blogs">
          <Blogs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
