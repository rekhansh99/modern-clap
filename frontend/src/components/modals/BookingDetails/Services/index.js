import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import { X, List, CreditCard } from 'react-feather';

const Services = ({ isOpen, setOpen }) => {
  return (
    <Modal
      id="viewrequestdetails"
      dialogClassName="dv_choose_location_md_dialog"
      show={isOpen}
      onHide={() => setOpen(false)}
    >
      <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          Booking Details{' '}
        </ModalTitle>
        <X size={24} onClick={() => setOpen(false)} />
      </ModalHeader>
      <ModalBody
        style={{
          border: 'none',
          padding: '15px',
          borderRadius: '0 0 5px 5px'
        }}
      >
        <div className="dv_country_based_filter">
          <ul className="dv_country_based_ul">
            <li>
              <List size={24} /> Services
            </li>
            <li style={{ display: 'block', margin: '0 0 15px 0' }}>
              <Link to="#!">
                <strong>manicure pedicure</strong>{' '}
              </Link>
            </li>
            <li style={{ display: 'block', margin: '0 0 15px 0' }}>
              <Link to="#!">
                <strong>GK keratin treatment</strong>{' '}
              </Link>
            </li>
          </ul>
          <ul className="dv_country_based_ul">
            <li>
              <CreditCard size={24} /> Amount
            </li>
            <li>
              <Link to="#!">
                <strong>AED 1200</strong>{' '}
              </Link>
            </li>
          </ul>
        </div>
      </ModalBody>
    </Modal>
  );
};

Services.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default Services;
