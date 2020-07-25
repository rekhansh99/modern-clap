import React from 'react';

import { Container } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import RequestCard from '../components/Requests/RequestCard';
import avatar from '../images/avatar.png';

const Requests = () => {
  document.title = 'Booking List - Modernclap';

  const requests = [
    {
      id: 'MD12345',
      customer: 'Rupali Sharma',
      avatar: null,
      services: ['Haircut', 'Spa'],
      payment: 250,
      status: 'pending'
    },
    {
      id: 'MD12345',
      customer: 'Sanjay Chavan',
      avatar: avatar,
      services: ['Haircut', 'Spa'],
      payment: 250,
      status: 'missed'
    },
    {
      id: 'MD12345',
      customer: 'Dipali Jadhav',
      avatar: avatar,
      services: ['Haircut', 'Spa'],
      payment: 250,
      status: 'accepted'
    },
    {
      id: 'MD12345',
      customer: 'Rupali Sharma',
      avatar: null,
      services: ['Haircut', 'Spa'],
      payment: 250,
      status: 'pending'
    },
    {
      id: 'MD12345',
      customer: 'Sanjay Chavan',
      avatar: avatar,
      services: ['Haircut', 'Spa'],
      payment: 250,
      status: 'missed'
    },
    {
      id: 'MD12345',
      customer: 'Dipali Jadhav',
      avatar: avatar,
      services: ['Haircut', 'Spa'],
      payment: 250,
      status: 'accepted'
    }
  ];

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
      <span className="subtitle">pending request</span>
      {requests.map((request, index) => (
        <RequestCard
          key={index}
          orderId={request.id}
          name={request.customer}
          img={request.avatar}
          services={request.services}
          amount={request.payment}
          status={request.status}
        />
      ))}
      <span className="subtitle" style={{ textTransform: 'inherit' }}>
        Total we have sent you <strong>120 request </strong>
      </span>
    </Container>
  );
};

export default Requests;
