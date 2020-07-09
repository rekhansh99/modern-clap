import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
          <Image
            style={{ float: 'right', cursor: 'pointer' }}
            src="/images/svgs/close.svg"
            width="24"
            height="24"
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
            Get OTP{' '}
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
            Login{' '}
          </Button>
        </div>
        <div className="dv_after_login_menus">
          <ul className="dv_menu_links_a" style={{ margin: '0 0 30px 0' }}>
            <li>
              <Link to="#">
                <Image src="/images/svgs/avatar.svg" />
                Sanjay Sakpal
              </Link>
            </li>
            <li>
              <Link to="/bookings">
                <Image src="/images/svgs/bookings.svg" />
                My Bookings{' '}
              </Link>
            </li>
          </ul>
        </div>
        <ul className="dv_menu_links_a">
          <li>
            <Link to="/about-us">
              <Image src="/images/svgs/about-us.svg" />
              About us{' '}
            </Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">
              <Image src="/images/svgs/tnc.svg" />
              terms &amp; condition{' '}
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy">
              <Image src="/images/svgs/privacy.svg" />
              privacy policy{' '}
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              <Image src="/images/svgs/blogs.svg" />
              blog{' '}
            </Link>
          </li>
          <li>
            <Link to="/reviews">
              <Image src="/images/svgs/reviews.svg" />
              reviews{' '}
            </Link>
          </li>
          <li>
            <Link to="/careers">
              <Image src="/images/svgs/careers.svg" />
              careers{' '}
            </Link>
          </li>
          <li>
            <Link to="/contact-us">
              <Image src="/images/svgs/contact-us.svg" />
              contact us
            </Link>
          </li>
        </ul>
        <Button className="btn-default dv_logout_btn" type="submit">
          Logout
          <Image
            src="/images/svgs/logout.svg"
            width="15px"
            style={{ margin: '0 0 0 7px' }}
          />{' '}
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
