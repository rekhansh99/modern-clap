import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { X } from 'react-feather';

import { ReactComponent as Reviews } from '../../../../svgs/reviews.svg';

const Review = ({ isOpen, close }) => {
  return (
    <Modal
      id="dv_write_reviews"
      dialogClassName="dv_write_reviews_md_dialog"
      show={isOpen}
      onHide={close}
    >
      <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          <Reviews
            width={20}
            height={20}
            style={{
              float: 'left',
              margin: '0 10px 0 0'
            }}
          />
          Add Review
        </ModalTitle>
        <X size={24} onClick={close} />
      </ModalHeader>
      <ModalBody
        style={{
          border: 'none',
          padding: '15px',
          borderRadius: '0 0 5px 5px'
        }}
      >
        <div className="dv_review_based_modal">
          <FormControl
            as="textarea"
            className="dv_careers_form_input"
            style={{ height: '100px' }}
            placeholder="Add Review"
            defaultValue={''}
          />
          <Row>
            <Col sm={6} xs={12} className="dv_raing_per_field_wrapper">
              <label>Tools </label>
              <div className="dv_give_rating" />
            </Col>
            <Col sm={6} xs={12} className="dv_raing_per_field_wrapper">
              <label>Work </label>
              <div className="dv_give_rating" />
            </Col>
            <Col sm={6} xs={12} className="dv_raing_per_field_wrapper">
              <label>Behaviour </label>
              <div className="dv_give_rating" />
            </Col>
            <Col sm={6} xs={12} className="dv_raing_per_field_wrapper">
              <label>Overall rating </label>
              <div className="dv_give_rating" />
            </Col>
          </Row>
          <Button
            style={{
              padding: '10px 0',
              textTransform: 'capitalize',
              margin: '25px 0 0 0'
            }}
            type="button"
            variant="primary"
            block
          >
            submit
          </Button>
          {/* <input type="text" readonly id="basicInput" className="form-control form-control-sm"> */}
        </div>
      </ModalBody>
    </Modal>
  );
};

Review.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default Review;
