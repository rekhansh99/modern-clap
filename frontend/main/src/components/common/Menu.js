import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { X, LogOut } from 'react-feather';

import { ReactComponent as Avatar } from '../../svgs/avatar.svg';
import { ReactComponent as Bookings } from '../../svgs/bookings.svg';
import { ReactComponent as AboutUs } from '../../svgs/about-us.svg';
import { ReactComponent as TnC } from '../../svgs/tnc.svg';
import { ReactComponent as PrivacyPolicy } from '../../svgs/privacy.svg';
import { ReactComponent as Blogs } from '../../svgs/blogs.svg';
import { ReactComponent as Reviews } from '../../svgs/reviews.svg';
import { ReactComponent as Careers } from '../../svgs/careers.svg';
import { ReactComponent as ContactUs } from '../../svgs/contact-us.svg';

const Menu = ({ open, showMenu }) => {
  return (
    <Modal
      className="right"
      show={open}
      onHide={() => showMenu(false)}
      aria-labelledby="myModalLabel2"
    >
      <ModalHeader className="dv_login_modal_header">
        <ModalTitle className="dv_login_modal_header_h4">
          Account
          <X
            style={{ float: 'right', cursor: 'pointer' }}
            size={24}
            onClick={() => showMenu(false)}
          />
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <div className="dv_login_wrapper">
          <InputGroup>
            <InputGroup.Prepend>
              <Form.Control as="select" className="dv_select_phone_number">
                <option>+971 </option>
                <option>+91 </option>
                <option>+1 </option>
              </Form.Control>
            </InputGroup.Prepend>
            <Form.Control
              type="tel"
              className="dv_subscribe_us_input"
              placeholder="Mobile No"
            />
          </InputGroup>
          <Button className="btn-default dv_login_btn" type="submit">
            Get OTP
          </Button>
        </div>
        <div className="dv_login_otp_wrapper">
          <span className="dv_add_otp_txt">Add OTP to Login </span>
          <Form.Control
            type="tel"
            className="dv_subscribe_us_input"
            placeholder="OTP"
          />
          <Button className="btn-default dv_login_btn" type="submit">
            Login
          </Button>
        </div>
        <div className="dv_after_login_menus">
          <ul className="dv_menu_links_a" style={{ margin: '0 0 30px 0' }}>
            <li>
              <Link to="#">
                <Avatar />
                Sanjay Sakpal
              </Link>
            </li>
            <li>
              <Link to="/bookings">
                <Bookings />
                My Bookings
              </Link>
            </li>
            <li>
              <Link to="/my-reviews">
                <Reviews />
                My Reviews
              </Link>
            </li>
          </ul>
        </div>
        <ul className="dv_menu_links_a">
          <li>
            <Link to="/about-us">
              <AboutUs />
              About us
            </Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">
              <TnC />
              terms &amp; condition
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy">
              <PrivacyPolicy />
              privacy policy
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              <Blogs />
              blog
            </Link>
          </li>
          <li>
            <Link to="/reviews">
              <Reviews />
              reviews
            </Link>
          </li>
          <li>
            <Link to="/careers">
              <Careers />
              careers
            </Link>
          </li>
          <li>
            <Link to="/contact-us">
              <ContactUs />
              contact us
            </Link>
          </li>
        </ul>
        <Button className="btn-default dv_logout_btn" type="submit">
          Logout
          <LogOut width={15} style={{ margin: '0 0 0 7px' }} />
        </Button>
      </ModalBody>
    </Modal>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  showMenu: PropTypes.func.isRequired
};

export default Menu;
