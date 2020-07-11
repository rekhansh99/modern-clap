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

class BookingDetails extends React.Component {
  render = () => {
    const modal = this.props.location.hash;

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
              Your order request no is <strong>MD124587</strong>
            </Link>
          </Container>
        </div>
        {/* <div className="dv_select_service_heading" style="text-align: center; background-color: #ff4a4a;">
        <Container>
          <a href="javascript:void(0);">
            Your cancelled order request no is <strong>MD124587</strong>
          </a>
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
            heading="cleaners"
            desc="professional staff"
            items={[
              {
                link: '#',
                src: 'images/slider/1.jpg',
                title: 'deep cleaning'
              },
              {
                link: '#',
                src: 'images/slider/2.jpg',
                title: 'soft cleaning'
              },
              {
                link: '#',
                src: 'images/slider/3.jpg',
                title: 'kitchen cleaning'
              },
              {
                link: '#',
                src: 'images/slider/4.jpg',
                title: 'bathroom cleaning'
              }
            ]}
          />
          <RepeatSlider
            heading="outfeet fitness"
            desc="safety first"
            items={[
              {
                link: '#',
                src: 'images/slider/1.jpg',
                title: 'service title'
              },
              {
                link: '#',
                src: 'images/slider/2.jpg',
                title: 'service title'
              },
              {
                link: '#',
                src: 'images/slider/3.jpg',
                title: 'service title'
              },
              {
                link: '#',
                src: 'images/slider/4.jpg',
                title: 'service title'
              }
            ]}
          />
          <RepeatSlider
            heading="bathroom cleaning"
            desc="used hand gloves"
            items={[
              {
                link: '#',
                src: 'images/slider/1.jpg',
                title: 'service title'
              },
              {
                link: '#',
                src: 'images/slider/2.jpg',
                title: 'service title'
              },
              {
                link: '#',
                src: 'images/slider/3.jpg',
                title: 'service title'
              },
              {
                link: '#',
                src: 'images/slider/4.jpg',
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
                src: 'images/slider/1.jpg',
                title: 'service title'
              },
              {
                link: '#',
                src: 'images/slider/2.jpg',
                title: 'service title'
              },
              {
                link: '#',
                src: 'images/slider/3.jpg',
                title: 'service title'
              },
              {
                link: '#',
                src: 'images/slider/4.jpg',
                title: 'service title'
              }
            ]}
          />
        </div>

        <ServicesModal
          isOpen={modal === '#servicesModal'}
          close={() => this.props.history.replace('/booking')}
        />
        <TimingModal
          isOpen={modal === '#timingModal'}
          close={() => this.props.history.replace('/booking')}
        />
        <LocationModal
          isOpen={modal === '#locationModal'}
          close={() => this.props.history.replace('/booking')}
        />
        <PaymentModal
          isOpen={modal === '#paymentModal'}
          close={() => this.props.history.replace('/booking')}
        />
        <ReviewModal
          isOpen={modal === '#reviewModal'}
          close={() => this.props.history.replace('/booking')}
        />
        <FAQsModal
          isOpen={modal === '#faqsModal'}
          close={() => this.props.history.replace('/booking')}
        />
        <ProviderModal
          isOpen={modal === '#providerModal'}
          close={() => this.props.history.replace('/booking')}
        />
        <AreYouSureModal
          isOpen={modal === '#areYouSureModal'}
          close={() => this.props.history.replace('/booking')}
        />
        <DoneSuccessfullyModal
          isOpen={modal === '#doneSuccessfullyModal'}
          close={() => this.props.history.replace('/booking')}
        />

        <div className="dv_continue_next">
          <Container>
            <ul>
              <li>
                <a
                  href="#areYouSureModal"
                  data-toggle="modal"
                  data-target="#areyousure"
                >
                  Cancel
                </a>
              </li>
              <li>
                <a href="#timingModal">Reshedule</a>
              </li>
            </ul>
          </Container>
        </div>
      </div>
    );
  };
}

BookingDetails.propTypes = {
  location: PropTypes.any,
  history: PropTypes.any
};

export default withRouter(BookingDetails);
