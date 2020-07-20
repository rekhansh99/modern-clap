import React from 'react';

import { Container } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import RequestCard from '../components/Requests/RequestCard';
import avatar from '../images/avatar.png';

const Requests = () => {
  document.title = 'Booking List - Modernclap';

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
      <h1 className="mt-4 dv_page_heading">Request List</h1>
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
      <span
        style={{
          color: '#adadad',
          display: 'block',
          margin: '0 0 10px 0',
          textTransform: 'inherit'
        }}
      >
        Total we have sent you <strong>120 request </strong>
      </span>
    </Container>
  );
};

export default Requests;
