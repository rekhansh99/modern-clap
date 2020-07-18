import React from 'react';
import PropTypes from 'prop-types';

const NotificationCard = ({ icon, orderNo, message }) => {
  return (
    <div className="card mb-3">
      <div className="dv_notification_to_details">
        {icon}
        <a href="#!">{orderNo}</a> {message}
        you.
      </div>
    </div>
  );
};

NotificationCard.propTypes = {
  icon: PropTypes.object.isRequired,
  orderNo: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default NotificationCard;
