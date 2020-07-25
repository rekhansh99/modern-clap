import React from 'react';

import { Container, Card } from 'react-bootstrap';

import RequestCard from '../components/Requests/RequestCard';
import AcceptedRequestsTable from '../components/Requests/AcceptedRequestsTable';

const AcceptedRequests = () => {
  document.title = 'Accepted Requests - Modernclap';

  const requests = [
    {
      id: 'MD12345',
      date: '12/12/2020',
      customer: 'Rupali Sharma',
      avatar: null,
      services: ['Haircut', 'Spa'],
      amount: 250,
      paymentStatus: 'pending',
      paymentType: 'cash',
      bookingStatus: 'pending'
    },
    {
      id: 'MD12345',
      date: '12/12/2020',
      customer: 'Sarika Kadam',
      avatar: null,
      services: ['Haircut', 'Spa'],
      amount: 120,
      paymentStatus: 'cancelled',
      paymentType: 'cash',
      bookingStatus: 'cancelled'
    },
    {
      id: 'MD12345',
      date: '12/12/2020',
      customer: 'Rupali Sharma',
      avatar: null,
      services: ['Haircut', 'Spa'],
      amount: 250,
      paymentStatus: 'successful',
      paymentType: 'cash',
      bookingStatus: 'completed'
    },
    {
      id: 'MD12345',
      date: '12/12/2020',
      customer: 'Rupali Sharma',
      avatar: null,
      services: ['Haircut', 'Spa'],
      amount: 250,
      paymentStatus: 'pending',
      paymentType: 'cash',
      bookingStatus: 'rescheduled'
    }
  ];

  return (
    <Container fluid>
      <h1 className="mt-4 dv_page_heading">Accepted Requests</h1>

      <div className="show-mobile-767">
        {requests.map((request, index) => (
          <RequestCard
            key={index}
            orderId={request.id}
            name={request.customer}
            img={request.avatar}
            services={request.services}
            amount={request.amount}
            status={request.bookingStatus}
          />
        ))}
      </div>

      <Card className="mb-4 hide-mobile-767">
        <Card.Header>Accepted all Bookings</Card.Header>
        <Card.Body className="p-0">
          <AcceptedRequestsTable requests={requests} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AcceptedRequests;
