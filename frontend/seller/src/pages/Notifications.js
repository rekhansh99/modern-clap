import React from 'react';

import { Bell } from 'react-feather';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NotificationCard from '../components/Notifications/NotificationCard';
import SwitchBusiness from '../components/common/SwitchBusiness';

const Notifications = () => {
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
      <h1 className="mt-4 dv_page_heading" id="myBtn">
        Notifications
      </h1>
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
            icon={<Bell />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <NotificationCard
            icon={<Bell />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <NotificationCard
            icon={<Bell />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <NotificationCard
            icon={<Bell />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <NotificationCard
            icon={<Bell />}
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
            unseen notification
          </span>
          <NotificationCard
            icon={<Bell />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <NotificationCard
            icon={<Bell />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <NotificationCard
            icon={<Bell />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <NotificationCard
            icon={<Bell />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
          <NotificationCard
            icon={<Bell />}
            orderNo="MD 12345"
            message="Today 04:00 PM Appointment has shedule with you. "
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Notifications;
