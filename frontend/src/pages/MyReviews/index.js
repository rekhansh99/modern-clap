import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Check, Edit2 } from 'react-feather';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ReviewCard from '../../components/ReviewCard';
import AddReviewCard from '../../components/AddReviewCard';

const MyReviews = () => {
  const [tab, setTab] = useState('completed-reviews');

  const completedReviews = [
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
  const pendingReviews = [
    {
      name: 'Monika Jadhav',
      serviceName: 'Cleaners',
      imgSrc: '/images/review-holder.webp'
    }
  ];
  const completedReviewsJSX = completedReviews.map(review => (
    <ReviewCard
      key={review.name}
      name={review.name}
      serviceName={review.serviceName}
      reviewerName={review.reviewerName}
      imgSrc={review.imgSrc}
      reviewText={review.reviewText}
      date={review.date}
      time={review.time}
    />
  ));
  const pendingReviewsJSX = pendingReviews.map(review => (
    <AddReviewCard
      key={review.name}
      name={review.name}
      serviceName={review.serviceName}
      imgSrc={review.imgSrc}
    />
  ));

  return (
    <div className="dv_wrapper">
      <Header
        title="My Reviews"
        desc="Total 12 review by me for 120 customers with average rating is 4"
      />
      <div className="dv_content">
        <div className="dv_review_counting_wrapper">
          <Container>
            <ul
              className="nav nav-tabs dv_nav_tabs"
              style={{ margin: '0 0 30px 0' }}
            >
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    tab === 'completed-reviews' ? 'active' : ''
                  }`}
                  href="#!"
                  onClick={() => setTab('completed-reviews')}
                >
                  <Check width={24} height={24} /> Completed - 6
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    tab === 'pending-reviews' ? 'active' : ''
                  }`}
                  href="#!"
                  onClick={() => setTab('pending-reviews')}
                >
                  <Edit2 width={24} height={24} /> Pending - 2
                </a>
              </li>
            </ul>
            <Tabs activeKey={tab}>
              <Tab eventKey="completed-reviews">{completedReviewsJSX}</Tab>
              <Tab eventKey="pending-reviews">{pendingReviewsJSX}</Tab>
            </Tabs>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyReviews;
