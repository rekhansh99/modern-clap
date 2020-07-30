import React, { useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

import { Container } from 'react-bootstrap';

import NotificationCard from '../components/Notifications/NotificationCard';
import SwitchBusiness from '../components/common/SwitchBusiness';

const GET_NOTIFICATIONS = gql`
  query {
    notifications {
      data {
        id
        type
        requestId
        message
        seen
      }
      count
    }
  }
`;

const MARK_AS_READ = gql`
  mutation MarkAsRead($id: String!) {
    markAsRead(id: $id)
  }
`;

const Notifications = () => {
  document.title = 'Notifications - Modernclap';

  const { data } = useQuery(GET_NOTIFICATIONS, { pollInterval: 2000 });
  const [markAsRead] = useMutation(MARK_AS_READ);

  const unseenNotification = [],
    seenNotification = [];

  if (data) {
    for (let i = 0; i < data.notifications.data.length; i++) {
      if (data.notifications.data[i].seen) {
        seenNotification.push(...data.notifications.data.slice(i));
        break;
      } else {
        unseenNotification.push(data.notifications.data[i]);
      }
    }
  }

  useEffect(() => () => {
    if (data) markAsRead({ variables: { id: data.notifications.data[0].id } });
  }, [data, markAsRead]);

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
