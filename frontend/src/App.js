import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import Bookings from './pages/Bookings';
import BookingDetails from './pages/Bookings/BookingDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/bookings" component={Bookings} />
        <Route exact path="/booking" component={BookingDetails} />
      </Switch>
    </Router>
  );
}

export default App;
