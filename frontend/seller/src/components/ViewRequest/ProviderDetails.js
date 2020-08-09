import React from 'react';

import { Col } from 'react-bootstrap';

import userDefaultImg from '../../images/user-default.png';

const ProviderDetails = () => {
  return (
    <>
      <h4 className="view_request_title">Provider</h4>
      <Col md={12} className="p-0">
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
              <strong>Goodhand Technical Services </strong>
            </li>
            <li>
              Phone no <strong>971 56 876 1235</strong>
            </li>
            <li>
              email ID <strong>Goodhand@gmail.com</strong>
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
                12 Millennium Dr, Isle of Dogs, London E14 3GJ, UAE
              </strong>
            </li>
          </ul>
        </div>
      </Col>
    </>
  );
};

export default ProviderDetails;
