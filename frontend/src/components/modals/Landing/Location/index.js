import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';

import { X } from 'react-feather';
import { ReactComponent as FlagIndia } from '../../../../svgs/flag-india.svg';
import { ReactComponent as FlagUAE } from '../../../../svgs/flag-uae.svg';

const Location = ({ isOpen, close }) => {
  return (
    <Modal
      id="myModal"
      dialogClassName="dv_choose_location_md_dialog"
      show={isOpen}
      onHide={close}
    >
      <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          Choose Location
        </ModalTitle>
        <X size={24} onClick={close} />
      </ModalHeader>
      <ModalBody
        style={{
          border: 'none',
          padding: '15px',
          borderRadius: '0 0 5px 5px'
        }}
      >
        <div className="dv_ciuntry_based_filter">
          <ul className="dv_country_based_ul">
            <li>
              <FlagIndia />
              India
            </li>
            <li>
              <a href="#!">mumbai </a>
            </li>
            <li>
              <a href="#!">pune </a>
            </li>
            <li>
              <a href="#!">banglore </a>
            </li>
            <li>
              <a href="#!">delhi</a>
            </li>
          </ul>
          <ul className="dv_country_based_ul">
            <li>
              <FlagUAE />
              United Arab Emirates
            </li>
            <li>
              <a href="#!">dubai </a>
            </li>
            <li>
              <a href="#!">abu dhabi </a>
            </li>
            <li>
              <a href="#!">sharjha </a>
            </li>
            <li>
              <a href="#!">ras al khaim </a>
            </li>
          </ul>
        </div>
      </ModalBody>
    </Modal>
  );
};

Location.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default Location;
