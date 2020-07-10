import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from '../../components/Header';
import RepeatSlider from '../../components/RepeatSlider';
import ServicesModal from '../../components/modals/BookingDetails/Services';
import TimingModal from '../../components/modals/BookingDetails/Timing';
import LocationModal from '../../components/modals/BookingDetails/Location';
import ReviewModal from '../../components/modals/BookingDetails/Review';

class BookingDetails extends React.Component {
  state = {
    servicesModalOpen: false,
    timingModalOpen: false,
    locationModalOpen: false,
    paymentModalOpen: false,
    reviewModalOpen: false,
    faqsModalOpen: false,
    providerModalOpen: false
  };

  render = () => {
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
            <a href="#!" data-toggle="modal" data-target="#donesuccesfully">
              Your order request no is <strong>MD124587</strong>
            </a>
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
              <span className="dv_section_heading">
                <img src="/images/svgs/tick.svg" alt="" />
                services <span className="dv_sm_overview">2 services </span>
                <a
                  href="#!"
                  onClick={() => this.setState({ servicesModalOpen: true })}
                  className="dv_edit_for_all"
                >
                  View
                </a>
              </span>
              <div className="dv_divider_in_booking_request" />
            </Row>
            <Row>
              <span className="dv_section_heading">
                <img src="/images/svgs/tick.svg" alt="" />
                Timing <span className="dv_sm_overview">12 Mar, 04 pm </span>
                <a
                  href="#!"
                  onClick={() => this.setState({ timingModalOpen: true })}
                  className="dv_edit_for_all"
                >
                  Reschedule
                </a>
              </span>
              <div className="dv_divider_in_booking_request" />
            </Row>
            <Row>
              <span className="dv_section_heading">
                <img src="/images/svgs/tick.svg" alt="" />
                location <span className="dv_sm_overview">Home </span>
                <a
                  href="#!"
                  onClick={() => this.setState({ locationModalOpen: true })}
                  className="dv_edit_for_all"
                >
                  View
                </a>
              </span>
              <div className="dv_divider_in_booking_request" />
            </Row>
            <Row>
              <span className="dv_section_heading">
                <img src="/images/svgs/tick.svg" alt="" />
                Payment <span className="dv_sm_overview">AED 114 </span>
                <a
                  href="#!"
                  onClick={() => this.setState({ paymentModalOpen: true })}
                  className="dv_edit_for_all"
                >
                  View
                </a>
              </span>
              <div className="dv_divider_in_booking_request" />
            </Row>
            <Row>
              <span className="dv_section_heading">
                <img src="/images/svgs/tick.svg" alt="" />
                Review
                <span className="dv_sm_overview">
                  Write review after payment completed
                </span>
                <a
                  href="#!"
                  onClick={() => this.setState({ reviewModalOpen: true })}
                  className="dv_edit_for_all"
                >
                  Write
                </a>
              </span>
              <div className="dv_divider_in_booking_request" />
            </Row>
            <Row>
              <span className="dv_section_heading">
                <img src="/images/svgs/tick.svg" alt="" />
                FAQ&apos;s <span className="dv_sm_overview">14 Questions </span>
                <a
                  href="#!"
                  onClick={() => this.setState({ faqsModalOpen: true })}
                  className="dv_edit_for_all"
                >
                  View
                </a>
              </span>
              <div className="dv_divider_in_booking_request" />
            </Row>
            <Row>
              <span className="dv_section_heading">
                <img src="/images/svgs/tick.svg" alt="" />
                Provider
                {/* <span className="dv_sm_overview">Goodhand Technical LLC </span> */}
                <a
                  href="#!"
                  onClick={() => this.setState({ providerModalOpen: true })}
                  className="dv_edit_for_all"
                >
                  View
                </a>
              </span>
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

        <ReviewModal
          isOpen={this.state.reviewModalOpen}
          setOpen={open => this.setState({ reviewModalOpen: open })}
        />
        <TimingModal
          isOpen={this.state.timingModalOpen}
          setOpen={open => this.setState({ timingModalOpen: open })}
        />
        <LocationModal
          isOpen={this.state.locationModalOpen}
          setOpen={open => this.setState({ locationModalOpen: open })}
        />
        <ServicesModal
          isOpen={this.state.servicesModalOpen}
          setOpen={open => this.setState({ servicesModalOpen: open })}
        />

        <div className="dv_continue_next">
          <Container>
            <ul>
              <li>
                <a href="#!" data-toggle="modal" data-target="#areyousure">
                  Cancel
                </a>
              </li>
              <li>
                <a href="#!" data-toggle="modal" data-target="#resheduletime">
                  Reshedule
                </a>
              </li>
            </ul>
          </Container>
        </div>
      </div>
    );
  };
}

export default BookingDetails;
