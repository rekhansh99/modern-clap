import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
// import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import {
  X,
  //   // Star,
  //   // AlertCircle,
  //   ChevronDown,
  //   Smartphone,
  //   PhoneCall,
  Info,
  Paperclip
} from 'react-feather';

const Provider = ({ isOpen, close }) => {
  return (
    <Modal
      id="providers"
      dialogClassName="dv_faqs_md_dialog"
      show={isOpen}
      onHide={close}
    >
      {/* <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          Providers Details
        </ModalTitle>
        <X size={24} onClick={close} />
      </ModalHeader> */}
      <ModalBody
        style={{
          border: 'none',
          maxHeight: '90%',
          padding: '0',
          borderRadius: '0 0 5px 5px',
          overflow: 'inherit'
        }}
      >
        <Card className="mb-4">
          <Row className="no-gutters">
            <Col md={4} className="border-right">
              <div className="dv_left_customer_height">
                {/* <div className="customer-drawer customer-drawer--onhover">
                    <img className="profile-image" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg" alt="" />
                    <div className="text">
                      <h6>ModernClap Support</h6>
                      <p className="text-muted">Wa are online to support you. </p>
                    </div>
                    <span className="time text-muted small">13:21</span>
                  </div> */}
                <div className="customer-drawer customer-drawer--onhover active">
                  <img
                    className="profile-image"
                    src="./images/chat-default.png"
                    style={{ opacity: '0.5' }}
                    alt=""
                  />
                  <div className="text">
                    <h6>Goodhand Technical LLC </h6>
                    <ul>
                      <li>
                        Working Hours : <span>8 to 9 </span>{' '}
                      </li>
                      <li>
                        Overall Rating - <span>4.3 </span>
                      </li>
                      <li>
                        Tool Rating - <span>4.3 </span>
                      </li>
                      <li>
                        Work Rating - <span>4.3 </span>
                      </li>
                      <li>
                        Behaviour Rating - <span>4.3 </span>
                      </li>
                    </ul>
                  </div>
                  <Dropdown
                    className="dv_more_seller_information"
                    style={{ display: 'none' }}
                  >
                    <Info size={24} />
                    <Dropdown.Menu className="dv_more_seller_information_drp">
                      <ul>
                        <li>
                          Working Hours : <span>8 to 9 </span>{' '}
                        </li>
                        <li>
                          Overall Rating - <span>4.3 </span>
                        </li>
                        <li>
                          Tool Rating - <span>4.3 </span>
                        </li>
                        <li>
                          Work Rating - <span>4.3 </span>
                        </li>
                        <li>
                          Behaviour Rating - <span>4.3 </span>
                        </li>
                      </ul>
                    </Dropdown.Menu>
                  </Dropdown>
                  <X
                    style={{
                      display: 'none',
                      float: 'right',
                      position: 'absolute',
                      right: '10px',
                      top: '15px',
                      color: '#999'
                    }}
                    size={24}
                    onClick={close}
                  />
                </div>
              </div>
            </Col>
            <Col md={8}>
              <div className="settings-tray">
                <div
                  className="customer-drawer no-gutters"
                  style={{ background: '#ebebeb' }}
                >
                  <img
                    className="profile-image"
                    src="./images/chat-default.png"
                    alt=""
                  />
                  <div className="text">
                    <h6>Goodhand Technical LLC 2</h6>
                    <p className="text-muted">Typing...</p>
                  </div>
                  <X
                    style={{
                      float: 'right',
                      position: 'absolute',
                      right: '15px',
                      top: '22px',
                      color: '#999'
                    }}
                    size={24}
                    onClick={close}
                  />
                  {/* <ul className="dv_chat_features">
                    <li>
                      <Paperclip size={24} />
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="chat-panel">
                <div className="dv_right_customer_chat">
                  <Row className="no-gutters">
                    <Col md={9}>
                      <div className="chat-bubble chat-bubble--left">
                        Hello, seller I have one question..! can you please
                        answer me ASAP..! how can i reshedule the appointment
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
                          src="./images/whatapp-media.jpg"
                          style={{ width: '100%' }}
                          alt=""
                        />
                        <ul className="dv_chat_media_option">
                          <li>
                            <a href="#!">Download</a>
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
                      {/* <svg data-toggle="modal" data-target="#resheduletime" style="margin: 0 10px 0 0; color: #999;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg> */}
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
                        Send{' '}
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Card>
      </ModalBody>
    </Modal>
  );
};

Provider.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default Provider;
