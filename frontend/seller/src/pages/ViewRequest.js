import React from 'react';

import { Container, Card, Row, Col } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';

const ViewRequest = () => {
  return (
    <Container fluid>
      <SwitchBusiness
        title="Goodhand Transaction LLC"
        options={[
          'Change',
          'Orville Real Estate',
          'Lightspeed General Trading',
          'Alahsa Stone',
          'TOG'
        ]}
      />
      <h1 className="mt-4 dv_page_heading">View Request</h1>
      <Card className="mb-4">
        <Card.Header className="text-center">
          <button type="button" className="btn btn-danger dv_accep_reject_btn">
            Reject
          </button>
          <button type="button" className="btn btn-primary dv_accep_reject_btn">
            Accept
          </button>
        </Card.Header>
        <Card.Body className="p-0">
          <div className="dv_customer_details">
            <Row>
              <Col className="p-0 dv_mobile_left_12" md={3}>
                <h4
                  style={{
                    margin: '0px',
                    fontSize: '14px',
                    textAlign: 'left',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid #d7d7d7',
                    display: 'block',
                    padding: '15px 15px 15px 25px',
                    width: '100%',
                    fontFamily: 'Segoe ui bold',
                    borderTop: '1px solid #d7d7d7',
                    background: '#ececec'
                  }}
                >
                  Customer
                </h4>
                <div className="col-md-12 pr-0">
                  <div className="dv_provider_customer_details p-0">
                    <ul
                      className="dv_booking_details"
                      style={{
                        borderBottom: 'none',
                        borderTop: 'none',
                        borderLeft: 'none'
                      }}
                    >
                      <li>
                        <img
                          src="../images/avatar.png"
                          style={{
                            opacity: '0.4',
                            float: 'left',
                            width: '23px',
                            margin: '0 10px 0 0',
                            borderRadius: '50%'
                          }}
                          alt=""
                        />
                        <strong>Sanjay sakpal </strong>
                      </li>
                      <li>
                        Phone no <strong>971 56 876 8765</strong>{' '}
                      </li>
                      <li>
                        email ID <strong>demo@gmail.com</strong>{' '}
                      </li>
                      <li>
                        PO Box <strong>81748</strong>{' '}
                      </li>
                      <li>
                        city <strong>dubai</strong>{' '}
                      </li>
                      <li>
                        state <strong>dubai</strong>{' '}
                      </li>
                      <li>
                        country <strong>United Arab Emirates </strong>{' '}
                      </li>
                      <li>
                        address{' '}
                        <strong>
                          <span>Home </span>... M-3, Buhaleeba plaza, al
                          muraqabat road, Al rigga DUbai UAE PO Box 81748{' '}
                        </strong>{' '}
                        <a style={{ display: 'block' }} href="#!">
                          View in Map{' '}
                        </a>{' '}
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col className="p-0 dv_mobile_left_12" md={3}>
                <h4
                  style={{
                    margin: '0px',
                    fontSize: '14px',
                    textAlign: 'left',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid #d7d7d7',
                    display: 'block',
                    padding: '15px',
                    width: '100%',
                    fontFamily: 'Segoe ui bold',
                    borderTop: '1px solid #d7d7d7',
                    background: '#ececec'
                  }}
                >
                  Provider{' '}
                </h4>
                <div className="col-md-12 p-0">
                  <div className="dv_provider_customer_details p-0">
                    <ul
                      className="dv_booking_details"
                      style={{
                        borderBottom: 'none',
                        borderTop: 'none',
                        borderLeft: 'none'
                      }}
                    >
                      <li>
                        <img
                          src="images/user-default.png"
                          style={{
                            opacity: '0.4',
                            float: 'left',
                            width: '23px',
                            margin: '0 10px 0 0',
                            borderRadius: '50%'
                          }}
                          alt=""
                        />
                        <strong>Goodhand Technical Services </strong>
                      </li>
                      <li>
                        Phone no <strong>971 56 876 1235</strong>{' '}
                      </li>
                      <li>
                        email ID <strong>Goodhand@gmail.com</strong>{' '}
                      </li>
                      <li>
                        PO Box <strong>81748</strong>{' '}
                      </li>
                      <li>
                        city <strong>dubai</strong>{' '}
                      </li>
                      <li>
                        state <strong>dubai</strong>{' '}
                      </li>
                      <li>
                        country <strong>United Arab Emirates </strong>{' '}
                      </li>
                      <li>
                        address{' '}
                        <strong>
                          12 Millennium Dr, Isle of Dogs, London E14 3GJ, UAE
                        </strong>{' '}
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col className="p-0 dv_mobile_left_12" md={3}>
                <h4
                  style={{
                    margin: '0px',
                    fontSize: '14px',
                    textAlign: 'left',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid #d7d7d7',
                    display: 'block',
                    padding: '15px',
                    width: '100%',
                    fontFamily: 'Segoe ui bold',
                    borderTop: '1px solid #d7d7d7',
                    background: '#ececec'
                  }}
                >
                  booking details{' '}
                </h4>
                <div className="col-md-12 p-0">
                  <div className="dv_provider_customer_details p-0">
                    <ul
                      className="dv_booking_details"
                      style={{
                        borderBottom: 'none',
                        borderTop: 'none',
                        borderLeft: 'none'
                      }}
                    >
                      <li>
                        Ref ID: <strong>MD 12345</strong>
                      </li>
                      {/* if they will select time based type */}
                      {/* <li>Total Time : <strong>01:10 Min </strong></li> */}
                      <li>
                        Promo code : <strong>-</strong>
                      </li>
                      <li>
                        Booking Status :{' '}
                        <strong style={{ color: 'green' }}>Completed</strong>
                      </li>
                      <li>
                        Payment Status :{' '}
                        <strong style={{ color: '#ff9800' }}>Pending</strong>
                      </li>
                      <li>
                        Payment Mode : <strong>Cash </strong>
                      </li>
                      <li>
                        Total Amount : <strong>AED 50 </strong>
                      </li>
                      <li>
                        Distance : <strong>3.2 KM </strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col className="p-0 dv_mobile_left_12" md={3}>
                <h4
                  style={{
                    margin: '0px',
                    fontSize: '14px',
                    textAlign: 'left',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid #d7d7d7',
                    display: 'block',
                    padding: '15px',
                    width: '100%',
                    fontFamily: 'Segoe ui bold',
                    borderTop: '1px solid #d7d7d7',
                    background: '#ececec'
                  }}
                >
                  Services
                </h4>
                <div className="col-md-12 p-0">
                  <div className="dv_provider_customer_details p-0">
                    <ul
                      className="dv_booking_details"
                      style={{
                        borderBottom: 'none',
                        borderTop: 'none',
                        borderLeft: 'none'
                      }}
                    >
                      <li>
                        Total <strong>4 </strong>
                      </li>
                      <li>
                        1) <strong>Manicure Pedicure </strong>
                      </li>
                      <li>
                        2) <strong>Hair Keratin </strong>
                      </li>
                      <li>
                        3) <strong>Waxing </strong>
                      </li>
                      <li>
                        4) <strong>Spa </strong>
                      </li>
                      <li>
                        TIming : <strong>12/12/2020 , 1 PM</strong>
                      </li>
                      <li>
                        Total Amount : <strong>AED 50 </strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ViewRequest;
