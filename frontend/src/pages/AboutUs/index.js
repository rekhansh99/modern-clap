import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Footer from '../../app/components/Footer';
import Header from '../../app/components/Header';

const AboutUs = () => {
  return (
    <div className="dv_wrapper">
      <Header />

      <div className="dv_content">
        <div className="dv_about_us_wrapper">
          <Container>
            <Row>
              <Col lg={4} md={12}>
                <div className="dv_about_us_cards">
                  <Image
                    src="images/svgs/who-we-are.svg"
                    height="24"
                    width="24"
                  />
                  <span className="dv_heading_about">who we are ? </span>
                  <p>
                    Urban Company (formerly UrbanClap) is India’s and the UAE’s
                    largest at-home services provider. We are an all-in-one
                    platform that helps users hire premium service
                    professionals, from beauticians and masseurs to sofa
                    cleaners, carpenters and technicians.
                  </p>
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div className="dv_about_us_cards">
                  <Image
                    src="images/svgs/what-we-do.svg"
                    height="24"
                    width="24"
                  />
                  <span className="dv_heading_about">what we do ? </span>
                  <p>
                    Urban Company provides a platform that allows skilled and
                    experienced professionals to connect with users looking for
                    specific services. All the professionals, though experienced
                    and skilled, undergo intensive training modules before being
                    allowed to list their services.
                  </p>
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div className="dv_about_us_cards">
                  <Image
                    src="images/svgs/why-choose-us.svg"
                    height="24"
                    width="24"
                  />
                  <span className="dv_heading_about">why choose us ? </span>
                  <p>
                    We having having vast local experience UAE. Our know-how
                    will help steer the patron’s way through the thick and thin
                    of bureaucracy and official procedure to choose the most
                    suitable solution to your requirement Our aim is to make
                    your life easy and allow you to focus on your experience{' '}
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
                  <Image
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
                  <Image
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
                  <Image
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
                  <Image
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

      <Footer />
    </div>
  );
};

export default AboutUs;
