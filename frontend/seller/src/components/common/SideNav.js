import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { X } from 'react-feather';

const SideNav = ({ close }) => {
  const [reqMenu, setReqMenu] = useState(false);

  return (
    <div id="layoutSidenav_nav">
      <nav className="sb-sidenav sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <Nav>
            <Nav.Link as={Link} to="/">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/notifications">
              {' '}
              Notification <span className="dv_pending_numbders">29</span>{' '}
            </Nav.Link>
            <Nav.Link as={Link} to="/inbox">
              {' '}
              Inbox <span className="dv_pending_numbders">12</span>{' '}
            </Nav.Link>
            <Nav.Link
              as={Link}
              onClick={e => {
                e.preventDefault();
                setReqMenu(!reqMenu);
              }}
            >
              Request
              <div className="sb-sidenav-collapse-arrow">
                <FontAwesomeIcon icon="angle-down" />
              </div>
            </Nav.Link>
            <div
              id="Request"
              className={classnames('toggle', { 'toggle-open': reqMenu })}
            >
              <Nav as="nav" className="sb-sidenav-menu-nested">
                <Nav.Link as={Link} to="/requests">
                  Request List <span className="dv_pending_numbders">5</span>{' '}
                </Nav.Link>
                <Nav.Link as={Link} to="/accepted-requests">
                  Accepted Request{' '}
                </Nav.Link>
              </Nav>
            </div>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/sale">
              sale
            </Nav.Link>
            <Nav.Link as={Link} to="/reviews">
              Reviews
            </Nav.Link>
            <Nav.Link as={Link} to="/settings">
              Setting
            </Nav.Link>
            <X size={24} id="dv_close_mobile_menu" onClick={close} />
          </Nav>
        </div>
      </nav>
    </div>
  );
};

SideNav.propTypes = {
  close: PropTypes.func.isRequired
};

export default SideNav;
