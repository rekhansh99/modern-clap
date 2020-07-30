import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Container, Card } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import RequestCard from '../components/Requests/RequestCard';
import AcceptedRequestsTable from '../components/Requests/AcceptedRequestsTable';
import Loading from '../components/common/Loading';

const GET_REQUESTS = gql`
  query AcceptedRequests($page: Int = 1, $limit: Int = 10) {
    requests(page: $page, limit: $limit) {
      requests {
        _id
        services {
          service {
            name
          }
        }
        customer {
          name
        }
        payment {
          mode
          status
          total
        }
        status
        time
      }
      pagination {
        totalPages
      }
    }
  }
`;

const AcceptedRequests = () => {
  document.title = 'Accepted Requests - Modernclap';

  const {loading, data, fetchMore} = useQuery(GET_REQUESTS, {errorPolicy: 'all'});
  
  if (loading) return <Loading />;

  const requests = data.requests.requests;

  // const requests = [
  //   {
  //     id: 'MD12345',
  //     date: '12/12/2020',
  //     customer: 'Rupali Sharma',
  //     avatar: null,
  //     services: ['Haircut', 'Spa'],
  //     amount: 250,
  //     paymentStatus: 'pending',
  //     paymentType: 'cash',
  //     bookingStatus: 'pending'
  //   },
  //   {
  //     id: 'MD12345',
  //     date: '12/12/2020',
  //     customer: 'Sarika Kadam',
  //     avatar: null,
  //     services: ['Haircut', 'Spa'],
  //     amount: 120,
  //     paymentStatus: 'cancelled',
  //     paymentType: 'cash',
  //     bookingStatus: 'cancelled'
  //   },
  //   {
  //     id: 'MD12345',
  //     date: '12/12/2020',
  //     customer: 'Rupali Sharma',
  //     avatar: null,
  //     services: ['Haircut', 'Spa'],
  //     amount: 250,
  //     paymentStatus: 'successful',
  //     paymentType: 'cash',
  //     bookingStatus: 'completed'
  //   },
  //   {
  //     id: 'MD12345',
  //     date: '12/12/2020',
  //     customer: 'Rupali Sharma',
  //     avatar: null,
  //     services: ['Haircut', 'Spa'],
  //     amount: 250,
  //     paymentStatus: 'pending',
  //     paymentType: 'cash',
  //     bookingStatus: 'rescheduled'
  //   }
  // ];
  const loadMore = (page, limit) => {
    fetchMore({
      variables: {
        page: page,
        limit: limit
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          requests: {
            requests: [...prev.requests.requests, ...fetchMoreResult.requests.requests],
            pagination: fetchMoreResult.requests.pagination
          }
        };
      }
    });
  };

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
      <h1 className="mt-4 dv_page_heading">Accepted Requests</h1>

      <div className="show-mobile-767">
        {requests.map((request, index) => (
          <RequestCard
            key={index}
            orderId={request._id}
            name={request.customer.name}
            img={request.avatar}
            services={request.services}
            amount={request.payment.total}
            status={request.status}
          />
        ))}
      </div>

      <Card className="mb-4 hide-mobile-767">
        <Card.Header>Accepted all Bookings</Card.Header>
        <Card.Body className="p-0">
          <AcceptedRequestsTable requests={requests} totalPages={data.requests.pagination.totalPages} loadMore={loadMore} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AcceptedRequests;
