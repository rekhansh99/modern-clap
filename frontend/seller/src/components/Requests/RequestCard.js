import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import DefaultUserImg from '../../images/user-default.png';

const RequestCard = ({ orderId, name, img, services, payment, status }) => {
  let statusColor;

  switch (status) {
    case 'accepted':
      statusColor = '#007bff';
      break;
    case 'pending':
      statusColor = '#adadad';
      break;
    case 'missed':
      statusColor = 'red';
      break;
    case 'rejected':
      statusColor = '#999';
      break;
    default:
      statusColor = '#999';
  }

  return (
    <Card className="mb-3">
      <div className="dv_per_request_wrapper">
        <img src={img || DefaultUserImg} alt="" />
        <div className="dv_customer_name_id_details">
          <span>{name}</span>
          <span>
            {services.length} Services in{' '}
            <span style={{ fontFamily: 'Segoe ui bold' }}>
              {services.map(service => service + ' ')}
            </span>{' '}
            - AED {payment}
          </span>
          <span style={{ color: statusColor, fontSize: '12px' }}>
            Request {status}
          </span>
        </div>
        <Link to={'/request/' + orderId}>view</Link>
      </div>
    </Card>
  );
};

RequestCard.propTypes = {
  orderId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  services: PropTypes.array.isRequired,
  payment: PropTypes.number.isRequired,
  status: PropTypes.string
};

export default RequestCard;
