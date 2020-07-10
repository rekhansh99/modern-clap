import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';

const Services = ({ isOpen, setOpen }) => {
  return (
    <Modal
      id="viewrequestdetails"
      dialogClassName="dv_choose_location_md_dialog"
      show={isOpen}
      onHide={() => setOpen(false)}
      style={{ margin: '12% auto 0 auto' }}
    >
      <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          Booking Details{' '}
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
                className="feather feather-list"
              >
                <line x1={8} y1={6} x2={21} y2={6} />
                <line x1={8} y1={12} x2={21} y2={12} />
                <line x1={8} y1={18} x2={21} y2={18} />
                <line x1={3} y1={6} x2="3.01" y2={6} />
                <line x1={3} y1={12} x2="3.01" y2={12} />
                <line x1={3} y1={18} x2="3.01" y2={18} />
              </svg>
              Services
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
                className="feather feather-credit-card"
              >
                <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                <line x1={1} y1={10} x2={23} y2={10} />
              </svg>
              Amount
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
