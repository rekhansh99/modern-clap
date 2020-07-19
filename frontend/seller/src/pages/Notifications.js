import React from 'react';

import { Bell, XCircle, Clock } from 'react-feather';
import { Container, Row, Col } from 'react-bootstrap';

import NotificationCard from '../components/Notifications/NotificationCard';
import SwitchBusiness from '../components/common/SwitchBusiness';

const Notifications = () => {
  document.title = 'Notifications - Modernclap';

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
      <Row>
        <Col xs={12}>
          <span
            style={{
              color: '#adadad',
              display: 'block',
              margin: '0 0 10px 0',
              textTransform: 'capitalize'
            }}
          >
            unseen notification
          </span>
          <NotificationCard
            icon={<Bell style={{ color: '#007bff' }} />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <NotificationCard
            icon={<Bell style={{ color: '#007bff' }} />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <NotificationCard
            icon={<XCircle style={{ color: '#ff4a4a' }} />}
            orderNo="MD 12345"
            message="Requet cancelled by customer. "
          />
          <NotificationCard
            icon={<Clock style={{ color: '#FA801C' }} />}
            orderNo="MD 12345"
            message="Request has been rescheduled. "
          />
          <NotificationCard
            icon={<Bell style={{ color: '#007bff' }} />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <span
            style={{
              color: '#adadad',
              display: 'block',
              margin: '0 0 10px 0',
              textTransform: 'capitalize'
            }}
          >
            seen notification
          </span>
          <NotificationCard
            icon={<Bell style={{ color: '#007bff' }} />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <NotificationCard
            icon={<Bell style={{ color: '#007bff' }} />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <NotificationCard
            icon={<Bell style={{ color: '#007bff' }} />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <NotificationCard
            icon={<Bell style={{ color: '#007bff' }} />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <NotificationCard
            icon={<Bell style={{ color: '#007bff' }} />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Notifications;
