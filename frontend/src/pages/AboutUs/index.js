import React from 'react';

import {
  Container,
  Row,
  Col,
  InputGroup,
  Button,
  FormControl
} from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div>
      <div className="dv_wrapper">
        <div className="dv_content">
          <div className="dv_about_us_wrapper">
            <Container>
              <Row>
                <Col lg={4} md={12}>
                  <div className="dv_about_us_cards">
                    <img
                      src="images/svgs/who-we-are.svg"
                      height="24"
                      width="24"
                    />
                    <span className="dv_heading_about">who we are ? </span>
                    <p>
                      Urban Company (formerly UrbanClap) is India’s and the
                      UAE’s largest at-home services provider. We are an
                      all-in-one platform that helps users hire premium service
                      professionals, from beauticians and masseurs to sofa
                      cleaners, carpenters and technicians.
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="dv_about_us_cards">
                    <img
                      src="images/svgs/what-we-do.svg"
                      height="24"
                      width="24"
                    />
                    <span className="dv_heading_about">what we do ? </span>
                    <p>
                      Urban Company provides a platform that allows skilled and
                      experienced professionals to connect with users looking
                      for specific services. All the professionals, though
                      experienced and skilled, undergo intensive training
                      modules before being allowed to list their services.
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="dv_about_us_cards">
                    <img
                      src="images/svgs/why-choose-us.svg"
                      height="24"
                      width="24"
                    />
                    <span className="dv_heading_about">why choose us ? </span>
                    <p>
                      We having having vast local experience UAE. Our know-how
                      will help steer the patron’s way through the thick and
                      thin of bureaucracy and official procedure to choose the
                      most suitable solution to your requirement Our aim is to
                      make your life easy and allow you to focus on your
                      experience{' '}
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="dv_four_points_wrapper">
            <Container className="text-center">
              <Row>
                <Col md={3}>
                  <div className="dv_four_cards">
                    <img
                      src="images/svgs/professional-providers.svg"
                      height="50"
                      width="50"
                    />
                    <span>professional providers </span>
                    <p>1000 +</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="dv_four_cards">
                    <img
                      src="images/svgs/happy-customers.svg"
                      height="50"
                      width="50"
                    />
                    <span>Happy Customers </span>
                    <p>5000 +</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="dv_four_cards">
                    <img
                      src="images/svgs/location.svg"
                      height="50"
                      width="50"
                    />
                    <span>Location </span>
                    <p>1 </p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="dv_four_cards">
                    <img
                      src="images/svgs/countries.svg"
                      height="50"
                      width="50"
                    />
                    <span>Countries </span>
                    <p>1 </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <footer>
          <Container>
            <div className="dv_usefull_links">signup to our newsletter</div>
            <p>
              Become part of our global community with exclusive access to
              special offers, latest news and events.{' '}
            </p>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Enter Email ID"
                className="dv_subscribe_us_input"
              />
              <InputGroup.Append>
                <Button
                  variant="default"
                  className="dv_subscribe_us_btn"
                  type="submit"
                >
                  Subscribe
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <div className="dv_divider" />
            <Row>
              <Col md={12}>
                <div className="dv_usefull_links">useful links</div>
                <ul className="dv_footer_menu_links">
                  <li>
                    <a href="#!">about us </a>
                  </li>
                  <li>
                    <a href="#!">terms &amp; conditions </a>
                  </li>
                  <li>
                    <a href="#!">privacy policy </a>
                  </li>
                  <li>
                    <a href="#!">blog </a>
                  </li>
                  <li>
                    <a href="#!">reviews </a>
                  </li>
                  <li>
                    <a href="#!">near me </a>
                  </li>
                  <li>
                    <a href="#!">careers </a>
                  </li>
                  <li>
                    <a href="#!">contact us </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="dv_divider" />
            <Row>
              <Col md={12}>
                <div className="dv_usefull_links">Service in</div>
              </Col>
              <Col md={4}>
                <div className="dv_usefull_links_inner">UAE</div>
                <ul className="dv_footer_menu_links_second">
                  <li>
                    <a href="#!">Dubai </a>
                  </li>
                  <li>
                    <a href="#!">Abu Dhabi </a>
                  </li>
                  <li>
                    <a href="#!">Sharjha </a>
                  </li>
                  <li>
                    <a href="#!">Ras al khaim </a>
                  </li>
                </ul>
              </Col>
              <Col md={4}>
                <div className="dv_usefull_links_inner">INDIA</div>
                <ul className="dv_footer_menu_links_second">
                  <li>
                    <a href="#!">mumbai </a>
                  </li>
                  <li>
                    <a href="#!">pune </a>
                  </li>
                  <li>
                    <a href="#!">banglore </a>
                  </li>
                  <li>
                    <a href="#!">delhi</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
