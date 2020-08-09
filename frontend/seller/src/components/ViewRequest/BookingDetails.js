import React from 'react';

import { Col } from 'react-bootstrap';

const BookingDetails = () => {
  return (
    <>
      <h4 className="view_request_title">booking details</h4>
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
              Ref ID: <strong>MD 12345</strong>
            </li>
            {/* if they will select time based type */}
            {/* <li>Total Time : <strong>01:10 Min </strong></li> */}
            <li>
              Promo code : <strong>-</strong>
            </li>
            <li>
              Booking Status :{' '}
              <strong style={{ color: 'green' }}>Completed</strong>
            </li>
            <li>
              Payment Status :{' '}
              <strong style={{ color: '#ff9800' }}>Pending</strong>
            </li>
            <li>
              Payment Mode : <strong>Cash </strong>
            </li>
            <li>
              Total Amount : <strong>AED 50 </strong>
            </li>
            <li>
              Distance : <strong>3.2 KM </strong>
            </li>
            <li>
              Penalty : <strong>AED 15 </strong>, 10 min Late Reach
            </li>
          </ul>
        </div>
      </Col>
    </>
  );
};

export default BookingDetails;
