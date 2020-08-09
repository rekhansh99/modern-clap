import React from 'react';

import { Col } from 'react-bootstrap';

const ServiceDetails = () => {
  return (
    <>
      <h4 className="view_request_title">Services</h4>
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
              Total <strong>4 </strong>
            </li>
            <li>
              1) <strong>Manicure Pedicure </strong>
            </li>
            <li>
              2) <strong>Hair Keratin </strong>
            </li>
            <li>
              3) <strong>Waxing </strong>
            </li>
            <li>
              4) <strong>Spa </strong>
            </li>
            <li>
              TIming : <strong>12/12/2020 , 1 PM</strong>
            </li>
            <li>
              Total Amount : <strong>AED 50 </strong>
            </li>
          </ul>
        </div>
      </Col>
    </>
  );
};

export default ServiceDetails;
