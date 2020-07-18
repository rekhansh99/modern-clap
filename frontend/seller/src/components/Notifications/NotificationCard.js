import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const NotificationCard = ({ icon, orderNo, message }) => {
  return (
    <Card className="mb-3">
      <div className="dv_notification_to_details">
        {icon}
        <Link href="#!">{orderNo}</Link> {message}
      </div>
    </Card>
  );
};

NotificationCard.propTypes = {
  icon: PropTypes.object.isRequired,
  orderNo: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default NotificationCard;
