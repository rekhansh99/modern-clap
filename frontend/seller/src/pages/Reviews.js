import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import { Container, Card } from 'react-bootstrap';
import moment from 'moment';

import SwitchBusiness from '../components/common/SwitchBusiness';
import ReviewModal from '../components/Reviews/ReviewModal';
import Filters from '../components/Reviews/Filters';
import ReviewsTable from '../components/Reviews/ReviewsTable';
import Loading from '../components/common/Loading';

const GET_REVIEWS = gql`
  query GetReviews(
    $business: ID
    $startDate: String
    $endDate: String
    $rating: Int
    $payment: String
  ) {
    reviews(
      business: $business
      startDate: $startDate
      endDate: $endDate
      rating: $rating
      payment: $payment
    ) {
      reviews {
        _id
        toolsRating
        workRating
        behaviourRating
        overallRating
        message
        requestId
        createdAt
      }
      pagination {
        total
      }
    }
  }
`;

const GET_BUSINESS = gql`
  query {
    activeBusiness @client
  }
`;

const Reviews = () => {
  document.title = 'Our Reviews - Modernclap';

  const [modal, setModal] = useState({ index: 0, isOpen: false });
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    dateRange: {
      start: moment().startOf('hour'),
      end: moment().startOf('hour').add(32, 'hour')
    },
    rating: 'select',
    payment: 'select'
  });

  const getBusinessQuery = useQuery(GET_BUSINESS);

  const variables = {
    limit: limit,
    page: page,
    business: getBusinessQuery.data.activeBusiness,
    startDate: filters.dateRange.start.toISOString(),
    endDate: filters.dateRange.end.toISOString()
  };
  if (filters.rating !== 'select') variables['rating'] = +filters.rating;
  if (filters.payment !== 'select') variables['payment'] = filters.payment;

  const { data, loading, error } = useQuery(GET_REVIEWS, { variables });

  if (loading) return <Loading />;
  if (error) return 'Something went wrong!';

  return (
    <Container fluid>
      <SwitchBusiness />

      <h1 className="mt-4 dv_page_heading">Reviews</h1>

      <Filters
        {...filters}
        onChange={newFilters => setFilters({ ...filters, ...newFilters })}
      />

      <Card className="mb-4">
        <Card.Header>Ratings and Reviews</Card.Header>
        <Card.Body className="p-0">
          <ReviewsTable
            reviews={data.reviews.reviews}
            viewReview={index => setModal({ index: index, isOpen: true })}
            total={data.reviews.pagination.total}
            limit={limit}
            setLimit={setLimit}
            page={page}
            setPage={setPage}
          />
        </Card.Body>
      </Card>
      <ReviewModal
        isOpen={modal.isOpen}
        orderId={
          data.reviews.reviews[modal.index]
            ? data.reviews.reviews[modal.index]._id
            : ''
        }
        body={
          data.reviews.reviews[modal.index]
            ? data.reviews.reviews[modal.index].message
            : ''
        }
        close={() => setModal({ index: 0, isOpen: false })}
      />
    </Container>
  );
};

export default Reviews;
