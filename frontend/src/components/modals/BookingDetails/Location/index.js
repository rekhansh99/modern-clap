import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';

const Location = ({ isOpen, setOpen }) => {
  return (
    <Modal
      id="viewlocation"
      dialogClassName="dv_choose_location_md_dialog"
      show={isOpen}
      onHide={() => setOpen(false)}
      style={{ margin: '12% auto 0 auto' }}
    >
      <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          Location Details
        </ModalTitle>
        <img
          src="/images/svgs/close.svg"
          width={24}
          height={24}
          alt=""
          onClick={() => setOpen(false)}
        />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-map-pin"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx={12} cy={10} r={3} />
              </svg>
              Home
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
