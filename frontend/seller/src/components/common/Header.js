import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { AlignRight, PlusCircle } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SwitchBusinessModal from './SwitchBusinessModal';

const Header = ({ toggleSideNav }) => {
  const [switchBusinessModal, setSwitchBusinessModal] = useState(false);

  return (
    <Navbar className="sb-topnav" variant="dark" bg="dark">
      <Navbar.Brand
        as={Link}
        to="https://mirrorssalonandspa.com/html/mirrors/img/react/"
      >
        Modernclap
      </Navbar.Brand>
      <button
        className="btn btn-link btn-sm order-1 order-lg-0"
        id="sidebarToggle"
        onClick={toggleSideNav}
      >
        <AlignRight size={24} />
      </button>
      {/* Navbar */}
      <Nav as="ul" className="ml-auto mr-md-0">
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/notifications">
            <FontAwesomeIcon icon="bell" fixedWidth />
            <span className="notification-dot">12</span>
          </Nav.Link>
        </Nav.Item>
        <Dropdown as="li">
          <Dropdown.Toggle as={Nav.Link} title="Add New">
            <PlusCircle size={24} />{' '}
          </Dropdown.Toggle>
          <Dropdown.Menu alignRight>
            <Dropdown.Item as={Link} to="#">
              Add Parent Business
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/service/add">
              Add New Service
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/requests">
              View Request - <span>05 </span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as="li">
          <Dropdown.Toggle as={Nav.Link}>
            <FontAwesomeIcon icon="user" fixedWidth />
            <span className="hide-mobile-767">Account </span>
          </Dropdown.Toggle>
          <Dropdown.Menu alignRight>
            <Dropdown.Item as={Link} to="#">
              Profile
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/reset-password">
              Change Password
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/settings">
              Settings
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to="#"
              onClick={e => {
                e.preventDefault();
                setSwitchBusinessModal(true);
              }}
            >
              Switch to another
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#">
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
      <SwitchBusinessModal
        isOpen={switchBusinessModal}
        close={() => setSwitchBusinessModal(false)}
      />
    </Navbar>
  );
};

Header.propTypes = {
  toggleSideNav: PropTypes.func.isRequired
};

export default Header;
