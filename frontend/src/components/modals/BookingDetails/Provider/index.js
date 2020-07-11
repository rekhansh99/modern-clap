import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  X,
  Star,
  AlertCircle,
  ChevronDown,
  Smartphone,
  PhoneCall
} from 'react-feather';

import { ReactComponent as Reviews } from '../../../../svgs/reviews.svg';
import { ReactComponent as House } from '../../../../svgs/house.svg';

const Provider = ({ isOpen, close }) => {
  return (
    <Modal
      id="providers"
      dialogClassName="dv_faqs_md_dialog"
      show={isOpen}
      onHide={close}
    >
      <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          Providers Details
        </ModalTitle>
        <X size={24} onClick={close} />
      </ModalHeader>
      <ModalBody
        style={{
          border: 'none',
          maxHeight: '90%',
          padding: '15px',
          borderRadius: '0 0 5px 5px',
          overflow: 'auto'
        }}
      >
        <Accordion>
          <div className="dv_provider_card" style={{ position: 'relative' }}>
            <div className="dv_provider_logo">
              <img src="images/facebook.png" alt="" />
            </div>
            <span
              style={{
                float: 'left',
                position: 'absolute',
                left: '23px',
                fontWeight: 900,
                color: '#0eca0e',
                bottom: '7px'
              }}
            >
              <Star
                style={{
                  width: '16px',
                  position: 'relative',
                  top: '-2px',
                  fill: '#0eca0e',
                  color: '#0eca0e'
                }}
              />{' '}
              4.5
            </span>
            <div className="dv_provider_name">
              lightspeed general trading llc
            </div>
            <div className="dv_provider_location">al rigga, dubai, UAE</div>
            <div className="dv_rating_from_customer">
              &quot;Got <span>24</span> Review&quot;
            </div>
            <Dropdown className="dv_about_provider_dropdown">
              <Dropdown.Toggle as={AlertCircle} id="dropdown-basic" size={24} />

              <Dropdown.Menu className="dv_about_provider_dropdown_menu">
                <Dropdown.Item href="#/action-1">
                  <House
                    style={{
                      width: '20px',
                      float: 'left',
                      height: '20px',
                      margin: '0 15px 0 0'
                    }}
                  />
                  Provider Details
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Reviews
                    style={{
                      width: '20px',
                      float: 'left',
                      height: '20px',
                      margin: '0 15px 0 0'
                    }}
                  />
                  Reviews
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="dv_divider_in_booking_request" />
          <Card>
            <Card.Header className="dv_faq_card_header">
              <Accordion.Toggle
                as={Card.Link}
                href="#contact"
                variant="link"
                eventKey="0"
              >
                Contact Information
                <ChevronDown
                  style={{
                    float: 'right',
                    position: 'absolute',
                    right: '15px',
                    top: '15px'
                  }}
                />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p className="dv_sub_headings_para"></p>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                  <li
                    style={{
                      display: 'block',
                      margin: 0,
                      padding: '0 0 15px 0',
                      color: '#282828'
                    }}
                  >
                    <Smartphone style={{ width: '30px' }} /> :{' '}
                    <a style={{ color: '#282828' }} href="tel:+971568476532">
                      +971 56 847 6532
                    </a>
                  </li>
                  <li
                    style={{
                      display: 'block',
                      margin: 0,
                      padding: 0,
                      color: '#282828'
                    }}
                  >
                    <PhoneCall style={{ width: '30px' }} /> :{' '}
                    <a style={{ color: '#282828' }} href="tel:+971568476532">
                      +971 56 847 6532
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className="dv_divider_in_booking_request" />
          <Card>
            <Card.Header className="dv_faq_card_header">
              <Accordion.Toggle as={Card.Link} variant="link" eventKey="1">
                Note
                <ChevronDown
                  style={{
                    float: 'right',
                    position: 'absolute',
                    right: '15px',
                    top: '15px'
                  }}
                />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p className="dv_sub_headings_para">
                  Service Providers will arrived at your location before service
                  time.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </ModalBody>
    </Modal>
  );
};

Provider.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default Provider;
