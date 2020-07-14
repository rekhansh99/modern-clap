import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import Bookings from './pages/Bookings';
import BookingDetails from './pages/BookingDetails';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Landing from './pages/Landing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Reviews from './pages/Reviews';
import SelectServices from './pages/SelectServices';
import SellerRegistration from './pages/SellerRegistration';
import ServiceDetails from './pages/ServiceDetails';
import ScrollToTop from './components/ScrollToTop';
import MobileSeach from './pages/mobile/Search';
import MyReviews from './pages/MyReviews';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/terms-and-conditions">
          <TermsAndConditions />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
        <Route exact path="/my-reviews">
          <MyReviews />
        </Route>
        <Route exact path="/select-services/:service">
          <SelectServices />
        </Route>
        <Route exact path="/seller/register">
          <SellerRegistration />
        </Route>
        <Route exact path="/service">
          <ServiceDetails />
        </Route>
        <Route exact path="/search">
          <MobileSeach />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
