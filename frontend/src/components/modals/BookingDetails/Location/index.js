import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import { X, MapPin } from 'react-feather';

const Location = ({ isOpen, setOpen }) => {
  return (
    <Modal
      id="viewlocation"
      dialogClassName="dv_choose_location_md_dialog"
      show={isOpen}
      onHide={() => setOpen(false)}
    >
      <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          Location Details
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
        <div className="dv_ciuntry_based_filter">
          <ul className="dv_country_based_ul">
            <li>
              <MapPin size={24} /> Home
            </li>
            <li style={{ display: 'block', margin: '0 0 15px 0' }}>
              <Link to="#!" style={{ background: 'no-repeat', padding: 0 }}>
                <strong>
                  301, Buhaleeba Plaza, al muaraqabat road, Dubai, United Arab
                  Emirates. P:O Box : 81748{' '}
                </strong>{' '}
              </Link>
            </li>
          </ul>
        </div>
      </ModalBody>
    </Modal>
  );
};

Location.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default Location;
