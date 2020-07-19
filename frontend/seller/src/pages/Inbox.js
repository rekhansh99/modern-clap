import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, FormControl } from 'react-bootstrap';
import { Smile, Paperclip } from 'react-feather';

import SwitchBusiness from '../components/common/SwitchBusiness';
import ChatDefaultImg from '../images/chat-default.png';
import WhatsappMediaImg from '../images/whatapp-media.jpg';

const Inbox = () => {
  document.title = 'Inbox - Modernclap';

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

      <h1 className="mt-4 dv_page_heading">Inbox</h1>
      <Card className="mb-4">
        <Row className="no-gutters">
          <Col md={4} className="border-right">
            <div className="search-box">
              <div className="input-wrapper">
                <FormControl
                  className="dv_search_customer"
                  placeholder="Search"
                  type="text"
                />
              </div>
            </div>
            <div className="dv_left_customer_height">
              <div className="customer-drawer customer-drawer--onhover active">
                <img
                  className="profile-image"
                  src={ChatDefaultImg}
                  style={{ opacity: 0.5 }}
                  alt=""
                />
                <div className="text">
                  <h6>Modernclap</h6>
                  <p className="text-muted">How may i help you </p>
                </div>
                <span className="time text-muted small">00:32</span>
              </div>
              <div className="customer-drawer customer-drawer--onhover">
                <img
                  className="profile-image"
                  src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg"
                  alt=""
                />
                <div className="text">
                  <h6>Skynet</h6>
                  <p className="text-muted">Seen that canned piece of s?</p>
                </div>
                <span className="time text-muted small">13:21</span>
              </div>
              <div className="customer-drawer customer-drawer--onhover">
                <img
                  className="profile-image"
                  src="http://i66.tinypic.com/2qtbqxe.jpg"
                  alt=""
                />
                <div className="text">
                  <h6>Termy</h6>
                  <p className="text-muted">Im studying spanish...</p>
                </div>
                <span className="time text-muted small">13:21</span>
              </div>
              <div className="customer-drawer customer-drawer--onhover">
                <img
                  className="profile-image"
                  src="https://cdn.vox-cdn.com/thumbor/AYUayCXcqYxHDkR4a1N9azY5c_8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9375391/MV5BYjg1Yjk1MTktYzE5Mi00ODkwLWFkZTQtNTYxYTY3ZDVmMWUxXkEyXkFqcGdeQXVyNjUwNzk3NDc_._V1_.jpg"
                  alt=""
                />
                <div className="text">
                  <h6>Richard</h6>
                  <p className="text-muted">I&apos;m not sure...</p>
                </div>
                <span className="time text-muted small">13:21</span>
              </div>
              <div className="customer-drawer customer-drawer--onhover">
                <img
                  className="profile-image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzQ3HEvJBpgptB48mdCwRt_BHrmNrDwQiIlrjgJbDKihAV_NI"
                  alt=""
                />
                <div className="text">
                  <h6>XXXXX</h6>
                  <p className="text-muted">Hi, wanna see something?</p>
                </div>
                <span className="time text-muted small">13:21</span>
              </div>
              <div className="customer-drawer customer-drawer--onhover">
                <img
                  className="profile-image"
                  src={ChatDefaultImg}
                  style={{ opacity: '0.5' }}
                  alt=""
                />
                <div className="text">
                  <h6>Optimus</h6>
                  <p className="text-muted">Wanna grab a beer?</p>
                </div>
                <span className="time text-muted small">00:32</span>
              </div>
              <div className="customer-drawer customer-drawer--onhover">
                <img
                  className="profile-image"
                  src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg"
                  alt=""
                />
                <div className="text">
                  <h6>Skynet</h6>
                  <p className="text-muted">Seen that canned piece of s?</p>
                </div>
                <span className="time text-muted small">13:21</span>
              </div>
              <div className="customer-drawer customer-drawer--onhover">
                <img
                  className="profile-image"
                  src="http://i66.tinypic.com/2qtbqxe.jpg"
                  alt=""
                />
                <div className="text">
                  <h6>Termy</h6>
                  <p className="text-muted">Im studying spanish...</p>
                </div>
                <span className="time text-muted small">13:21</span>
              </div>
              <div className="customer-drawer customer-drawer--onhover">
                <img
                  className="profile-image"
                  src="https://cdn.vox-cdn.com/thumbor/AYUayCXcqYxHDkR4a1N9azY5c_8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9375391/MV5BYjg1Yjk1MTktYzE5Mi00ODkwLWFkZTQtNTYxYTY3ZDVmMWUxXkEyXkFqcGdeQXVyNjUwNzk3NDc_._V1_.jpg"
                  alt=""
                />
                <div className="text">
                  <h6>Richard</h6>
                  <p className="text-muted">I&apos;m not sure...</p>
                </div>
                <span className="time text-muted small">13:21</span>
              </div>
              <div className="customer-drawer customer-drawer--onhover">
                <img
                  className="profile-image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzQ3HEvJBpgptB48mdCwRt_BHrmNrDwQiIlrjgJbDKihAV_NI"
                  alt=""
                />
                <div className="text">
                  <h6>XXXXX</h6>
                  <p className="text-muted">Hi, wanna see something?</p>
                </div>
                <span className="time text-muted small">13:21</span>
              </div>
              <div className="customer-drawer customer-drawer--onhover">
                <img
                  className="profile-image"
                  src={ChatDefaultImg}
                  style={{ opacity: '0.5' }}
                  alt=""
                />
                <div className="text">
                  <h6>Optimus</h6>
                  <p className="text-muted">Wanna grab a beer?</p>
                </div>
                <span className="time text-muted small">00:32</span>
              </div>
              <div className="customer-drawer customer-drawer--onhover">
                <img
                  className="profile-image"
                  src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg"
                  alt=""
                />
                <div className="text">
                  <h6>Skynet</h6>
                  <p className="text-muted">Seen that canned piece of s?</p>
                </div>
                <span className="time text-muted small">13:21</span>
              </div>
              <div className="customer-drawer customer-drawer--onhover">
                <img
                  className="profile-image"
                  src="http://i66.tinypic.com/2qtbqxe.jpg"
                  alt=""
                />
                <div className="text">
                  <h6>Termy</h6>
                  <p className="text-muted">Im studying spanish...</p>
                </div>
                <span className="time text-muted small">13:21</span>
              </div>
              <div className="customer-drawer customer-drawer--onhover">
                <img
                  className="profile-image"
                  src="https://cdn.vox-cdn.com/thumbor/AYUayCXcqYxHDkR4a1N9azY5c_8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9375391/MV5BYjg1Yjk1MTktYzE5Mi00ODkwLWFkZTQtNTYxYTY3ZDVmMWUxXkEyXkFqcGdeQXVyNjUwNzk3NDc_._V1_.jpg"
                  alt=""
                />
                <div className="text">
                  <h6>Richard</h6>
                  <p className="text-muted">I&apos;m not sure...</p>
                </div>
                <span className="time text-muted small">13:21</span>
              </div>
              <div className="customer-drawer customer-drawer--onhover">
                <img
                  className="profile-image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzQ3HEvJBpgptB48mdCwRt_BHrmNrDwQiIlrjgJbDKihAV_NI"
                  alt=""
                />
                <div className="text">
                  <h6>XXXXX</h6>
                  <p className="text-muted">Hi, wanna see something?</p>
                </div>
                <span className="time text-muted small">13:21</span>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className="settings-tray">
              <div
                className="customer-drawer no-gutters"
                style={{ background: '#ebebeb' }}
              >
                <img className="profile-image" src={ChatDefaultImg} alt="" />
                <div className="text">
                  <h6>Robo Cop</h6>
                  <p className="text-muted">Typing...</p>
                </div>
              </div>
            </div>
            <div className="chat-panel">
              <div className="dv_right_customer_chat">
                <Row className="no-gutters">
                  <Col md={9}>
                    <div className="chat-bubble chat-bubble--left">
                      Hello, seller I have one question..! can you please answer
                      me ASAP..! how can i reshedule the appointment
                    </div>
                  </Col>
                </Row>
                <Row className="no-gutters">
                  <Col md={9} className="offset-md-3">
                    <div className="chat-bubble chat-bubble--right">
                      Hello sir, How may i help you..!
                    </div>
                  </Col>
                </Row>
                <Row className="no-gutters">
                  <Col md={9}>
                    <div className="chat-bubble chat-bubble--left">
                      I need to reshedule booking.
                    </div>
                  </Col>
                </Row>
                <Row className="no-gutters">
                  <Col md={9} className="offset-md-3">
                    <div className="chat-bubble chat-bubble--right">
                      May i know you Booking ID please. so after that i can
                      reshdule the Booking.
                    </div>
                  </Col>
                </Row>
                <Row className="no-gutters">
                  <Col md={9}>
                    <div className="chat-bubble chat-bubble--left">
                      Yes Booking number is MD12345 i have sent appointment
                      image also.
                    </div>
                  </Col>
                </Row>
                <Row className="no-gutters">
                  <Col md={9}>
                    <div className="chat-bubble chat-bubble--left">
                      <img
                        src={WhatsappMediaImg}
                        style={{ width: '100%' }}
                        alt=""
                      />
                      <ul className="dv_chat_media_option">
                        <li>
                          <Link to="#!">Download</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <Row className="no-gutters">
                  <Col md={9} className="offset-md-3">
                    <div className="chat-bubble chat-bubble--right">
                      Thank you ..!
                    </div>
                  </Col>
                </Row>
                <Row className="no-gutters">
                  <Col md={9} className="offset-md-3">
                    <div className="chat-bubble chat-bubble--right">
                      I am checking, give me little bit time.
                    </div>
                  </Col>
                </Row>
                <Row className="no-gutters">
                  <Col md={9}>
                    <div className="chat-bubble chat-bubble--left">
                      Yes please..!
                    </div>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col xs={12}>
                  <div className="chat-box-tray">
                    <Smile
                      size={24}
                      style={{ margin: '0 10px 0 0', color: '#999' }}
                    />
                    <FormControl
                      className="dv_type_txt_reply"
                      type="text"
                      placeholder="Type your message here..."
                    />
                    <Paperclip
                      style={{ margin: '0 10px 0 0', color: '#999' }}
                      size={24}
                    />
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ borderRadius: '25px', height: '46px' }}
                    >
                      Send
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Inbox;
