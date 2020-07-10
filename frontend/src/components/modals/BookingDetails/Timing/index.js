import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import Button from 'react-bootstrap/Button';

const Timing = ({ isOpen, setOpen }) => {
  return (
    <Modal
      id="resheduletime"
      dialogClassName="dv_choose_location_md_dialog"
      show={isOpen}
      onHide={() => setOpen(false)}
      style={{ margin: '4% auto 0 auto' }}
    >
      <ModalHeader>
        <ModalTitle
          style={{
            color: '#282828',
            fontSize: '18px',
            textAlign: 'left',
            display: 'block',
            width: '100%'
          }}
        >
          <img
            style={{
              width: '30px',
              height: '30px',
              fontSize: '18px',
              float: 'left',
              margin: '0 15px 0 0'
            }}
            src="/images/svgs/clock.svg"
          />
          Reshdule the time
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
        style={{
          border: 'none',
          padding: '15px',
          borderRadius: '0 0 5px 5px'
        }}
      >
        <ul className="dv_timing_selection">
          <li>
            <a href="javascript:void(0)">
              <span className="dv_day_txt">today </span> 24
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" className="active">
              <span className="dv_day_txt">tom </span> 25
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span className="dv_day_txt">Wed </span> 26
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span className="dv_day_txt">Thus </span> 27
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span className="dv_day_txt">Fri </span> 28
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span className="dv_day_txt">sat </span> 29
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span className="dv_day_txt">sun </span> 30
            </a>
          </li>
        </ul>
        <ul className="dv_timing_selection">
          <li>
            <a href="javascript:void(0);" className="active">
              10 AM
            </a>
          </li>
          <li>
            <a href="javascript:void(0);"> 11 AM </a>
          </li>
          <li>
            <a href="javascript:void(0);"> 12 AM </a>
          </li>
          <li>
            <a href="javascript:void(0);"> 01 PM </a>
          </li>
          <li>
            <a href="javascript:void(0);"> 02 PM </a>
          </li>
          <li>
            <a href="javascript:void(0);"> 03 PM </a>
          </li>
          <li>
            <a href="javascript:void(0);"> 04 PM </a>
          </li>
          <li>
            <a href="javascript:void(0);"> 05 PM </a>
          </li>
          <li>
            <a href="javascript:void(0);"> 06 PM </a>
          </li>
          <li>
            <a href="javascript:void(0);"> 07 PM </a>
          </li>
          <li>
            <a href="javascript:void(0);"> 08 PM </a>
          </li>
          <li>
            <a href="javascript:void(0);"> 09 PM </a>
          </li>
          <li>
            <a href="javascript:void(0);"> 10 PM </a>
          </li>
        </ul>
        <Button
          style={{
            backgroundColor: '#2874f0',
            margin: '15px 0 0 0',
            padding: '15px 0',
            textTransform: 'uppercase',
            fontWeight: 600,
            borderColor: '#2874f0'
          }}
          variant="success"
          block
        >
          Reshedule
        </Button>
      </ModalBody>
    </Modal>
  );
};

Timing.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default Timing;
