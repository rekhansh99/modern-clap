import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/blogs" component={Blogs} />
      </Switch>
    </Router>
  );
}

export default App;
