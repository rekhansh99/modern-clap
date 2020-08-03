import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Container } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import RequestCard from '../components/Requests/RequestCard';
import Loading from '../components/common/Loading';

const GET_REQUESTS = gql`
  query Requests($business: ID!) {
    requests(business: $business) {
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
          total
        }
        status
        time
      }
    }
  }
`;

const Requests = () => {
  document.title = 'Booking List - Modernclap';

  const currBusiness = '5f26a44bd129a3a8d95e109e';
  const { loading, error, data } = useQuery(GET_REQUESTS, {
    errorPolicy: 'all',
    variables: { business: currBusiness }
  });

  if (loading) return <Loading />;
  if (error) return 'Something went wrong!';

  const requests = data.requests.requests;

  return (
    <Container fluid>
      <SwitchBusiness />
      <h1 className="mt-4 dv_page_heading">Request List</h1>
      <span className="subtitle">pending request</span>
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
      <span className="subtitle" style={{ textTransform: 'inherit' }}>
        Total we have sent you <strong>120 request </strong>
      </span>
    </Container>
  );
};

export default Requests;
