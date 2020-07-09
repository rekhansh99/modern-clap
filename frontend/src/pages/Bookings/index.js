import React from 'react';

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
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12">
                <BookingCard
                  serviceName="men's hair cut"
                  bookingDate="12/12/2020, 04:00 PM"
                  status="upcoming"
                  cardDetails="your request no is MD54251"
                />
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12">
                <BookingCard
                  serviceName="hair rebonding"
                  bookingDate="12/12/2020, 04:00 PM"
                  status="completed"
                  detailsColor="red"
                  cardDetails="Review Pending"
                />
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12">
                <BookingCard
                  serviceName="manicure"
                  bookingDate="12/12/2020, 04:00 PM"
                  status="cancelled"
                  cardDetails="cancelled by customer"
                />
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12">
                <BookingCard
                  serviceName="pedicure"
                  bookingDate="12/12/2020, 04:00 PM"
                  status="cancelled"
                  cardDetails="cancelled by customer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bookings;
