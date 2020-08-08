import React from 'react';
import PropTypes from 'prop-types';

import { Home, Search, FileText, HelpCircle, MoreHorizontal } from 'react-feather';
import { Link } from 'react-router-dom';

const BottomNav = ({ toggleMenu }) => {
  return (
    <div className="show-mobile-991 dv_fixed_bottom_bar">
      <ul>
        <li>
          <Link to="/requests">
            <Home size={24} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/accepted-requests">
            <Search size={24} />
            Search
          </Link>
        </li>
        <li>
          <Link to="/sale">
            <FileText size={24} />
            My Booking
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <HelpCircle size={24} />
            Help
          </Link>
        </li>
        <li>
          <Link
            to="#"
            id="mobilemenu"
            onClick={e => {
              e.preventDefault();
              toggleMenu();
            }}
          >
            <MoreHorizontal size={24} />
            Menu
          </Link>
        </li>
      </ul>
    </div>
  );
};

BottomNav.propTypes = {
  toggleMenu: PropTypes.func.isRequired
};

export default BottomNav;
