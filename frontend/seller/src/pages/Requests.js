import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import RequestCard from '../components/Requests/RequestCard';
import avatar from '../images/avatar.png';

const Requests = () => {
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
        Request List
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
            pending request
          </span>
          <RequestCard
            orderId="MD12345"
            name="rupali sharma"
            img={avatar}
            services={['Haircut', 'Spa']}
            payment={{ currency: 'AED', total: 250 }}
            status="Requested Accepted"
          />
          <RequestCard
            orderId="MD12345"
            name="rupali sharma"
            img={avatar}
            services={['Haircut', 'Spa']}
            payment={{ currency: 'AED', total: 250 }}
            status="Requested Accepted"
          />
          <RequestCard
            orderId="MD12345"
            name="rupali sharma"
            img={avatar}
            services={['Haircut', 'Spa']}
            payment={{ currency: 'AED', total: 250 }}
            status="Requested Accepted"
          />
          <RequestCard
            orderId="MD12345"
            name="rupali sharma"
            img={avatar}
            services={['Haircut', 'Spa']}
            payment={{ currency: 'AED', total: 250 }}
            status="Requested Accepted"
          />
          <RequestCard
            orderId="MD12345"
            name="rupali sharma"
            img={avatar}
            services={['Haircut', 'Spa']}
            payment={{ currency: 'AED', total: 250 }}
            status="Requested Accepted"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Requests;
