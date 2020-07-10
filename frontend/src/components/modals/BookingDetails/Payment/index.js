import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Payment = ({ isOpen, setOpen }) => {
  return (
    <Modal
      id="viewpayment"
      dialogClassName="dv_choose_location_md_dialog"
      show={isOpen}
      onHide={() => setOpen(false)}
      style={{ margin: '12% auto 0 auto' }}
    >
      <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          Payment Summery
        </ModalTitle>
        <img
          src="/images/svgs/close.svg"
          width={24}
          height={24}
          alt=""
          onClick={() => setOpen(false)}
        />
      </ModalHeader>
      <ModalBody
        style={{ border: 'none', padding: '15px', borderRadius: '0 0 5px 5px' }}
      >
        <div className="dv_ciuntry_based_filter">
          <div className="dv_view_cart_visible">
            <ul>
              <li>
                Total : 5 services <span>AED 120</span>
              </li>
              <li>
                VAT 5% : <span>AED 6</span>
              </li>
              <li>
                Discount : <span>AED 12</span>
              </li>
              <li>
                Grand Total : <span>AED 114</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="dv_payment_selection">
          <Row>
            <Col xs={12} className="p-0">
              <img
                style={{
                  width: '20px',
                  float: 'left',
                  height: '20px',
                  margin: '5px 15px 0 20px'
                }}
                src="/images/svgs/tick.svg"
              />
              Paying through cash after service
            </Col>
          </Row>
        </div>
      </ModalBody>
    </Modal>
  );
};

Payment.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default Payment;
