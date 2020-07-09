import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BookingCard from '../../components/Bookings/BookingCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Bookings = () => {
  return (
    <div className="dv_wrapper">
      <Header
        title="My Bookings"
        desc="Check your all booking here to get invoice, etc"
      />
      <div className="dv_content">
        <div className="dv_my_booking_wrapper">
          <Container>
            <Row>
              <Col lg={4} md={12} sm={12} xs={12}>
                <BookingCard
                  serviceName="men's hair cut"
                  bookingDate="12/12/2020, 04:00 PM"
                  status="upcoming"
                  cardDetails="your request no is MD54251"
                />
              </Col>
              <Col lg={4} md={12} sm={12} xs={12}>
                <BookingCard
                  serviceName="hair rebonding"
                  bookingDate="12/12/2020, 04:00 PM"
                  status="completed"
                  detailsColor="red"
                  cardDetails="Review Pending"
                />
              </Col>
              <Col lg={4} md={12} sm={12} xs={12}>
                <BookingCard
                  serviceName="manicure"
                  bookingDate="12/12/2020, 04:00 PM"
                  status="cancelled"
                  cardDetails="cancelled by customer"
                />
              </Col>
              <Col lg={4} md={12} sm={12} xs={12}>
                <BookingCard
                  serviceName="pedicure"
                  bookingDate="12/12/2020, 04:00 PM"
                  status="cancelled"
                  cardDetails="cancelled by customer"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bookings;
