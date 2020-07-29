import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Container } from 'react-bootstrap';

import NotificationCard from '../components/Notifications/NotificationCard';
import SwitchBusiness from '../components/common/SwitchBusiness';

const GET_NOTIFICATIONS = gql`
  query {
    notifications {
      type
      requestId
      message
      seen
    }
  }
`;

const Notifications = () => {
  document.title = 'Notifications - Modernclap';

  const { data } = useQuery(GET_NOTIFICATIONS, { pollInterval: 2000 });

  const unseenNotification = [], seenNotification = [];

  if (data) {
    data.notifications.forEach(notification => {
      if(notification.seen)
        seenNotification.push(notification);
      else
        unseenNotification.push(notification);
    });
  }

  return (
    <Container fluid>
      <SwitchBusiness
        title="Goodhand Transaction LLC"
        options={[
          'Change',
          'Orville Real Estate',
          'Lightspeed General Trading',
          'Alahsa Stone',
          'TOG'
        ]}
      />
      <h1 className="mt-4 dv_page_heading">Notifications</h1>
      <span className="subtitle">unseen notification</span>
      {unseenNotification.map((notification, index) => (
        <NotificationCard key={index} {...notification} />
      ))}
      <span className="subtitle">seen notification</span>
      {seenNotification.map((notification, index) => (
        <NotificationCard key={index} {...notification} />
      ))}
    </Container>
  );
};

export default Notifications;
