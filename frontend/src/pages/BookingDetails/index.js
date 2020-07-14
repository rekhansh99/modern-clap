import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from '../../components/Header';
import RepeatSlider from '../../components/RepeatSlider';
import SectionHeading from '../../components/SectionHeading';
import ServicesModal from '../../components/modals/BookingDetails/Services';
import TimingModal from '../../components/modals/BookingDetails/Timing';
import LocationModal from '../../components/modals/BookingDetails/Location';
import PaymentModal from '../../components/modals/BookingDetails/Payment';
import ReviewModal from '../../components/modals/BookingDetails/Review';
import FAQsModal from '../../components/modals/BookingDetails/FAQs';
import ProviderModal from '../../components/modals/BookingDetails/Provider';
import AreYouSureModal from '../../components/modals/BookingDetails/AreYouSure';
import DoneSuccessfullyModal from '../../components/modals/BookingDetails/DoneSuccessfully';

const BookingDetails = props => {
  const modal = props.location.hash;
  const booking = {
    id: 'MD124587',
    services: ['manicure pedicure', 'GK keratin treatment'],
    payment: {
      currency: 'AED',
      subTotal: 120,
      vat: 5,
      discount: 12,
      status: 'Paying through cash after service'
    },
    location:
      '301, Buhaleeba Plaza, al muaraqabat road, Dubai, United Arab Emirates. P:O Box : 81748'
  };

  return (
    <div className="dv_wrapper">
      <Header
        headerClassName="dv_booking_request_details"
        title="Request Booked"
        desc="Thank you for booking request with us. we will give our best professional service to you..!"
      />

      <div
        className="dv_select_service_heading"
        style={{ textAlign: 'center' }}
      >
        <Container>
          <Link to="#doneSuccessfullyModal">
            Your order request no is <strong>{booking.id}</strong>
          </Link>
        </Container>
      </div>
      {/* <div className="dv_select_service_heading" style={{textAlign: "center", backgroundColor: "#ff4a4a"}}>
        <Container>
          <Link to="#">
            Your cancelled order request no is <strong>MD124587</strong>
          </Link>
        </Container>
      </div> */}

      <div className="dv_booking_details_page">
        <Container>
          {/* This review system will enable after completing of payment */}
          <Row>
            <SectionHeading
              title="services"
              subtitle="2 services"
              modal="servicesModal"
              linkText="View"
            />
            <div className="dv_divider_in_booking_request" />
          </Row>
          <Row>
            <SectionHeading
              title="timing"
              subtitle="12 Mar, 04 pm"
              modal="timingModal"
              linkText="Reschedule"
            />
            <div className="dv_divider_in_booking_request" />
          </Row>
          <Row>
            <SectionHeading
              title="location"
              subtitle="Home"
              modal="locationModal"
              linkText="View"
            />
            <div className="dv_divider_in_booking_request" />
          </Row>
          <Row>
            <SectionHeading
              title="payment"
              subtitle="AED 114"
              modal="paymentModal"
              linkText="View"
            />
            <div className="dv_divider_in_booking_request" />
          </Row>
          <Row>
            <SectionHeading
              title="Review"
              subtitle="Write review after payment complete"
              modal="reviewModal"
              linkText="Write"
            />
            <div className="dv_divider_in_booking_request" />
          </Row>
          <Row>
            <SectionHeading
              title="FAQ's"
              subtitle="14 Questions"
              modal="faqsModal"
              linkText="View"
            />
            <div className="dv_divider_in_booking_request" />
          </Row>
          <Row>
            <SectionHeading
              title="provider"
              modal="providerModal"
              linkText="View"
            />
            <div className="dv_divider_in_booking_request" />
          </Row>
        </Container>
      </div>

      <div className="dv_all_sliders">
        <Container>
          <div className="dv_get_more_services">explore more services</div>
        </Container>
        <RepeatSlider
          heading="bathroom cleaning"
          desc="used hand gloves"
          items={[
            {
              link: '#',
              src: './images/slider/1.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: './images/slider/2.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: './images/slider/3.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: './images/slider/4.jpg',
              title: 'service title'
            }
          ]}
        />
        <RepeatSlider
          heading="repairs"
          desc="30 days service guarantee"
          items={[
            {
              link: '#',
              src: './images/slider/1.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: './images/slider/2.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: './images/slider/3.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: './images/slider/4.jpg',
              title: 'service title'
            }
          ]}
        />
      </div>

      <ServicesModal
        isOpen={modal === '#servicesModal'}
        close={() => props.history.replace('/booking-details')}
        services={booking.services}
        payment={booking.payment}
      />
      <TimingModal
        isOpen={modal === '#timingModal'}
        close={() => props.history.replace('/booking-details')}
      />
      <LocationModal
        isOpen={modal === '#locationModal'}
        close={() => props.history.replace('/booking-details')}
        location={booking.location}
      />
      <PaymentModal
        isOpen={modal === '#paymentModal'}
        close={() => props.history.replace('/booking-details')}
        payment={booking.payment}
        numberOfServices={booking.services.length}
      />
      <ReviewModal
        isOpen={modal === '#reviewModal'}
        close={() => props.history.replace('/booking-details')}
      />
      <FAQsModal
        isOpen={modal === '#faqsModal'}
        close={() => props.history.replace('/booking-details')}
      />
      <ProviderModal
        isOpen={modal === '#providerModal'}
        close={() => props.history.replace('/booking-details')}
      />
      <AreYouSureModal
        isOpen={modal === '#areYouSureModal'}
        close={() => props.history.replace('/booking-details')}
      />
      <DoneSuccessfullyModal
        isOpen={modal === '#doneSuccessfullyModal'}
        close={() => props.history.replace('/booking-details')}
      />

      <div className="dv_continue_next">
        <Container>
          <ul>
            <li>
              <Link to="#areYouSureModal">Cancel</Link>
            </li>
            <li>
              <Link to="#timingModal">Reshedule</Link>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
};

BookingDetails.propTypes = {
  location: PropTypes.any,
  history: PropTypes.any
};

export default withRouter(BookingDetails);
