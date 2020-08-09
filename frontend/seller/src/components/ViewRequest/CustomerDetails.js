import React from 'react';

import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import userDefaultImg from '../../images/user-default.png';


const CustomerDetails = () => {
  return (
    <>
      <h4 className="view_request_title" style={{ paddingLeft: '25px' }}>
        Customer
      </h4>
      <Col md={12} className="pr-0">
        <div className="dv_provider_customer_details p-0">
          <ul
            className="dv_booking_details"
            style={{
              borderBottom: 'none',
              borderTop: 'none',
              borderLeft: 'none'
            }}
          >
            <li>
              <img
                src={userDefaultImg}
                style={{
                  opacity: '0.4',
                  float: 'left',
                  width: '23px',
                  margin: '0 10px 0 0',
                  borderRadius: '50%'
                }}
                alt=""
              />
              <strong>Sanjay sakpal </strong>
            </li>
            <li>
              Phone no <strong>971 56 876 8765</strong>
            </li>
            <li>
              email ID <strong>demo@gmail.com</strong>
            </li>
            <li>
              PO Box <strong>81748</strong>
            </li>
            <li>
              city <strong>dubai</strong>
            </li>
            <li>
              state <strong>dubai</strong>
            </li>
            <li>
              country <strong>United Arab Emirates </strong>
            </li>
            <li>
              address{' '}
              <strong>
                <span>Home </span>... M-3, Buhaleeba plaza, al muraqabat road,
                Al rigga DUbai UAE PO Box 81748
              </strong>{' '}
              <Link style={{ display: 'block' }} to="#!">
                View in Map
              </Link>
            </li>
          </ul>
        </div>
      </Col>
    </>
  );
};

export default CustomerDetails;
