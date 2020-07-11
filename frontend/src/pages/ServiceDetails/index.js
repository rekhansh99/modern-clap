import React from 'react';

import Header from '../../components/Header';
import RepeatSlider from '../../components/RepeatSlider';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import { ReactComponent as AboutUsSVG } from '../../svgs/about-us.svg';
import { ReactComponent as QuestionMarkSVG } from '../../svgs/question-mark.svg';
import { ReactComponent as HandShakeSVG } from '../../svgs/hand-shake.svg';
import { ReactComponent as ReviewsSVG } from '../../svgs/reviews.svg';
import { Star, ChevronDown } from 'react-feather';

const ServiceDetails = () => {
  return (
    <div className="dv_wrapper">
      <Header
        title="Manicure Pedicure"
        desc="Hire #1 Staff For Home Services"
        headerClassName="dv_service_details_header"
        bookNow
      />
      <div className="dv_content">
        <div className="dv_service_details_information">
          <div className="container">
            <div className="row flex-xl-nowrap">
              <div className="col-md-12 col-lg-12 col-xl-12">
                <ul className="nav nav-tabs dv_service_details_pages">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#about"
                    >
                      <AboutUsSVG width="20" height="20" />
                      <strong className="dv_tabs_value">- </strong> About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#faqs">
                      <QuestionMarkSVG width="20" height="20" />
                      <strong className="dv_tabs_value">15 </strong> FAQ&apos;s
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#provider">
                      <HandShakeSVG width="20" height="20" />
                      <strong className="dv_tabs_value">21 </strong> provider
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#review">
                      <ReviewsSVG width="20" height="20" />
                      <strong className="dv_tabs_value">07 </strong> Reviews
                    </a>
                  </li>
                </ul>
                <div className="tab-content dv_tab_content_wrapper">
                  <div id="about" className="tab-pane active">
                    <div className="dv_service_details_about_wrapper">
                      <div className="dv_all_providers_counting">
                        manicure pedicure
                        <span>
                          A great pedicure can be as soothingto the soul as..
                          well, to the sole..!{' '}
                        </span>
                      </div>
                      <div className="dv_sub_headings">heading of services</div>
                      <p className="dv_sub_headings_para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam.
                      </p>
                      <div className="dv_divider_in_booking_request" />
                      <div className="dv_sub_headings">heading of services</div>
                      <p className="dv_sub_headings_para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam.
                      </p>
                      <div className="dv_divider_in_booking_request" />
                      <div className="dv_sub_headings">heading of services</div>
                      <ul className="dv_service_details_points">
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, Lorem
                          ipsum dolor sit amet,
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt..!
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipina
                          aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit
                          amet,
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="faqs" className="tab-pane fade">
                    <div className="dv_service_details_faqs">
                      <div className="dv_all_providers_counting">
                        get help
                        <span>get helpfull support regarding service </span>
                      </div>
                      <Accordion>
                        <Card>
                          <Card.Header className="dv_faq_card_header">
                            <Accordion.Toggle
                              as={Card.Link}
                              variant="link"
                              eventKey="0"
                            >
                              Question will come here
                              <ChevronDown
                                style={{
                                  float: 'right',
                                  position: 'absolute',
                                  right: '15px',
                                  top: '15px'
                                }}
                              />
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <p className="dv_sub_headings_para">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <div className="dv_divider_in_booking_request" />
                        <div className="dv_divider_in_booking_request" />
                        <Card>
                          <Card.Header className="dv_faq_card_header">
                            <Accordion.Toggle
                              as={Card.Link}
                              variant="link"
                              eventKey="1"
                            >
                              Question will come here
                              <ChevronDown
                                style={{
                                  float: 'right',
                                  position: 'absolute',
                                  right: '15px',
                                  top: '15px'
                                }}
                              />
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <p className="dv_sub_headings_para">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </div>
                  </div>
                  <div id="provider" className="tab-pane fade">
                    <div className="dv_per_provider_wrapper">
                      <div className="dv_all_providers_counting">
                        professional providers
                        <span>
                          18 Carpet Manicure Pedicure services in Dubai{' '}
                        </span>
                      </div>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12 dv_provider_details_12">
                          <div className="dv_provider_card">
                            <div className="dv_provider_logo">
                              <img src="images/facebook.png" alt="" />
                            </div>
                            <span
                              style={{
                                float: 'left',
                                position: 'absolute',
                                left: '40px',
                                bottom: '30px',
                                fontWeight: 900,
                                color: '#0eca0e'
                              }}
                            >
                              <Star />
                              4.5
                            </span>
                            <div className="dv_provider_name">
                              lightspeed general trading llc
                            </div>
                            <div className="dv_provider_location">
                              al rigga, dubai, uae
                            </div>
                            <div className="dv_rating_from_customer">
                              &quot;professional service&quot;
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12 dv_provider_details_12">
                          <div className="dv_provider_card">
                            <div className="dv_provider_logo">
                              <img src="images/facebook.png" alt="" />
                            </div>
                            <span
                              style={{
                                float: 'left',
                                position: 'absolute',
                                left: '40px',
                                bottom: '30px',
                                fontWeight: 900,
                                color: '#0eca0e'
                              }}
                            >
                              <Star />
                              4.5
                            </span>
                            <div className="dv_provider_name">
                              lightspeed general trading llc
                            </div>
                            <div className="dv_provider_location">
                              al rigga, dubai, uae
                            </div>
                            <div className="dv_rating_from_customer">
                              &quot;professional service&quot;
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="review" className="tab-pane fade">
                    <div className="dv_service_details_review_wrapper">
                      <div className="dv_all_providers_counting">
                        Reviews
                        <span>see our customer review and rating </span>
                      </div>
                      <div className="dv_total_review_section_brief">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>{' '}
                        4.5 <span className="dv_out_of_star"> / 5 </span>
                        <div className="dv_based_on_total_ratings">
                          based on <strong>15</strong> ratings
                        </div>
                      </div>
                      <div className="dv_customer_review_in_service_details">
                        <div className="dv_customer_name_letter">s</div>
                        <div className="dv_customer_name">sanjay sakpal</div>
                        <div className="dv_customer_review_txt">
                          &quot;
                          <span>
                            its very professionally work. and i am very
                            satisfied with this service
                          </span>
                          &quot;
                        </div>
                        <div className="dv_clearfix" />
                      </div>
                      <div className="dv_customer_review_in_service_details">
                        <div className="dv_customer_name_letter">p</div>
                        <div className="dv_customer_name">poonam</div>
                        <div className="dv_customer_review_txt">
                          &quot;
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do{' '}
                          </span>
                          &quot;
                        </div>
                        <div className="dv_clearfix" />
                      </div>
                      <div className="dv_customer_review_in_service_details">
                        <div className="dv_customer_name_letter">p</div>
                        <div className="dv_customer_name">poonam</div>
                        <div className="dv_customer_review_txt">
                          &quot;
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do{' '}
                          </span>
                          &quot;
                        </div>
                        <div className="dv_clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dv_all_sliders">
          <div className="container">
            <div className="dv_get_more_services">explore more services</div>
          </div>
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
      </div>
    </div>
  );
};

export default ServiceDetails;
