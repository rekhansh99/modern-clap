import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const RequestCard = ({ orderId, name, img, services, payment, status }) => {
  return (
    <Card className="mb-3">
      <div className="dv_per_request_wrapper">
        <img src={img} alt="" />
        <div className="dv_customer_name_id_details">
          <span>{name}</span>
          <span>
            {services.length} Services in{' '}
            <span style={{ fontFamily: 'Segoe ui bold' }}>
              {services.map(service => service + ' ')}
            </span>{' '}
            - {payment.currency + ' ' + payment.total}
          </span>
          <span style={{ color: 'red', fontSize: '12px' }}>{status}</span>
        </div>
        <Link to={'/request/' + orderId}>view</Link>
      </div>
    </Card>
  );
};

RequestCard.propTypes = {
  orderId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
  services: PropTypes.array.isRequired,
  payment: PropTypes.object.isRequired,
  status: PropTypes.string
};

export default RequestCard;
