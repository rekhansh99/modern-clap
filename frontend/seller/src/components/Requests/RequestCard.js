import React from 'react';
import PropTypes from 'prop-types';

const RequestCard = ({ orderId, name, img, services, payment, status }) => {
  return (
    <div className="card mb-3">
      <div className="dv_per_request_wrapper">
        <img src={img} />
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
        <a href={'/request/' + orderId}>view</a>
      </div>
    </div>
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
