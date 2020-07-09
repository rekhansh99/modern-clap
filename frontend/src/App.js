import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import Bookings from './pages/Bookings';
import BookingDetails from './pages/Bookings/BookingDetails';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import TermsAndConditions from './pages/TermsAndConditions';

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
        <Route exact path="/bookings">
          <Bookings />
        </Route>
        <Route exact path="/booking">
          <BookingDetails />
        </Route>
        <Route exact path="/careers">
          <Careers />
        </Route>
        <Route exact path="/contact-us">
          <ContactUs />
        </Route>
        <Route exact path="/terms-and-conditions">
          <TermsAndConditions />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
