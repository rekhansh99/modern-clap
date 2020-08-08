import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';

import { ReactComponent as BlueTickSVG} from '../../svgs/tick.svg';
import { ReactComponent as GreenTickSVG} from '../../svgs/tick-green.svg';

const Help = () => {
  document.title = 'Help | Modern clap';

  return (
    <div className="dv_wrapper">
      <Header
        title="Help"
        desc="These question & answer will help you to clear your query."
        headerClassName="dv_terms_conditions_header"
      />
      <div className="dv_content">
        <div className="dv_terms_conditions">
          <Container>
            <Row>
              <Col md={12}>
                <div className="dv_terms_head"> What is modernclap </div>
                <p className="dv_terms_p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
              <div className="dv_divider" />
              <Col md={12}>
                <div className="dv_terms_head">
                  Where i can see my all booking
                </div>
                <p className="dv_terms_p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
              <div className="dv_divider" />
              <Col md={12}>
                <div className="dv_terms_head"> How to book service </div>
                <p className="dv_terms_p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
              <div className="dv_divider" />
              <Col md={12}>
                <div className="dv_terms_head"> how to reshedule booking </div>
                <p className="dv_terms_p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
              <div className="dv_divider" />
              <Col md={12}>
                <div className="dv_terms_head"> How to cancel booking </div>
                <p className="dv_terms_p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
              <div className="dv_divider" />
              <Col md={12}>
                <div className="dv_seller_container">
                  <span
                    className="dv_section_heading"
                    style={{
                      margin: '0 0 15px 0',
                      background: 'rgb(63, 199, 63, 0.3)',
                      color: '#1b901b'
                    }}
                  >
                    <GreenTickSVG />
                    Query sent succesfully
                    <p
                      style={{
                        fontSize: '12px',
                        textTransform: 'initial',
                        fontWeight: 400,
                        padding: '0 0 0 32px',
                        margin: 0
                      }}
                    >
                      Thank you for submitting your query with us. your query
                      will boost us to give Best &amp; Professional Service to
                      customers.
                    </p>
                  </span>
                  <span
                    className="dv_section_heading"
                    style={{ margin: '0 0 15px 0' }}
                  >
                    <BlueTickSVG />
                    Feel free to send your query
                  </span>
                  <input
                    type="Name"
                    className="form-control dv_careers_form_input"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="form-control dv_careers_form_input"
                    placeholder="Email ID"
                  />
                  <input
                    type="tel"
                    className="form-control dv_careers_form_input"
                    placeholder="Phone No"
                  />
                  {/* <input type="text" class="form-control dv_careers_form_input" placeholder="Query" style="height: 100px;"> */}
                  <textarea
                    className="form-control dv_textarea_input"
                    rows={5}
                    placeholder="Add Query"
                    defaultValue={''}
                  />
                  <button
                    type="button"
                    className="btn btn-block btn-primary"
                    style={{ padding: '10px 0' }}
                  >
                    Submit
                  </button>
                </div>
              </Col>
              <div className="dv_divider" />
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Help;
