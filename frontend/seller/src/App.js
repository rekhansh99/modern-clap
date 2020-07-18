import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import classnames from 'classnames';

import Header from './components/common/Header';
import SideNav from './components/common/SideNav';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Requests from './pages/Requests';
import AcceptedRequests from './pages/AcceptedRequests';
import Services from './pages/Services';
import Sale from './pages/Sale';
import Reviews from './pages/Reviews';
import Settings from './pages/Settings';
import FlashCards from './components/common/FlashCards';
import avatar from './images/avatar.png';

import './App.css';
import Footer from './components/common/Footer';
import BottomNav from './components/common/BottomNav';

function App() {
  const [sideNav, setSideNav] = useState(false);

  const flashCards = [
    {
      name: 'Rupali Sharma',
      img: avatar,
      service: 'Cleaners',
      message: 'New request recieved!'
    },
    {
      name: 'Rupali Sharma',
      img: avatar,
      service: 'Cleaners',
      message: 'New request recieved!'
    }
  ];

  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
      <div
        className={classnames('sb-nav-fixed', {
          'sb-sidenav-toggled': sideNav
        })}
      >
        <Header toggleSideNav={() => setSideNav(!sideNav)} />
        <div id="layoutSidenav">
          <SideNav close={() => setSideNav(false)} />
          <div id="layoutSidenav_content">
            <main>
              <Switch>
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
                <Route exact path="/reviews">
                  <Reviews />
                </Route>
                <Route exact path="/settings">
                  <Settings />
                </Route>
              </Switch>
              <FlashCards cards={flashCards} />
            </main>
            <Footer />
          </div>
        </div>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
