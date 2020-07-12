import React from 'react';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { ChevronRight, ChevronLeft } from 'react-feather';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ReviewCard from '../../components/ReviewCard';

const Reviews = () => {
  const reviews = [
    {
      name: 'Monika Jadhav',
      serviceName: 'Cleaners',
      reviewerName: 'Rahul Gandhi',
      imgSrc: '/images/review-holder.webp',
      reviewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo',
      date: '20/20/2020',
      time: '05:15 PM'
    },
    {
      name: 'Monika Jadhav',
      serviceName: 'Cleaners',
      reviewerName: 'Rahul Gandhi',
      imgSrc: '/images/review-holder.webp',
      reviewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo',
      date: '20/20/2020',
      time: '05:15 PM'
    },
    {
      name: 'Monika Jadhav',
      serviceName: 'Cleaners',
      reviewerName: 'Rahul Gandhi',
      imgSrc: '/images/review-holder.webp',
      reviewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo',
      date: '20/20/2020',
      time: '05:15 PM'
    }
  ];

  const reviewsJSX = reviews.map(review => (
    <Col className="p-0" key={review.name} xs={12}>
      <ReviewCard
        name={review.name}
        serviceName={review.serviceName}
        reviewerName={review.reviewerName}
        imgSrc={review.imgSrc}
        reviewText={review.reviewText}
        date={review.date}
        time={review.time}
      />
    </Col>
  ));

  return (
    <div className="dv_wrapper">
      <Header
        title="Reviews"
        desc="Total 1,241review by 245 customers with average rating is 4.5"
      />
      <div className="dv_content">
        <div className="dv_review_counting_wrapper">
          <Container>
            {reviewsJSX}
            <div className="dv_pagination">
              <ul>
                <li>
                  <Link to="#!">
                    <ChevronLeft size={24} />
                  </Link>
                </li>
                <li>
                  <Link to="#!">1</Link>
                </li>
                <li>
                  <Link to="#!" className="dv_active_page">
                    2
                  </Link>
                </li>
                <li>...</li>
                <li>
                  <Link to="#!">3</Link>
                </li>
                <li>
                  <Link to="#!">
                    <ChevronRight size={24} />
                  </Link>
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
