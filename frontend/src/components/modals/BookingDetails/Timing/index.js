import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
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
            <Link to="#!">
              <span className="dv_day_txt">today </span> 24
            </Link>
          </li>
          <li>
            <Link to="#!" className="active">
              <span className="dv_day_txt">tom </span> 25
            </Link>
          </li>
          <li>
            <Link to="#!">
              <span className="dv_day_txt">Wed </span> 26
            </Link>
          </li>
          <li>
            <Link to="#!">
              <span className="dv_day_txt">Thus </span> 27
            </Link>
          </li>
          <li>
            <Link to="#!">
              <span className="dv_day_txt">Fri </span> 28
            </Link>
          </li>
          <li>
            <Link to="#!">
              <span className="dv_day_txt">sat </span> 29
            </Link>
          </li>
          <li>
            <Link to="#!">
              <span className="dv_day_txt">sun </span> 30
            </Link>
          </li>
        </ul>
        <ul className="dv_timing_selection">
          <li>
            <Link to="#!" className="active">
              10 AM
            </Link>
          </li>
          <li>
            <Link to="#!"> 11 AM </Link>
          </li>
          <li>
            <Link to="#!"> 12 AM </Link>
          </li>
          <li>
            <Link to="#!"> 01 PM </Link>
          </li>
          <li>
            <Link to="#!"> 02 PM </Link>
          </li>
          <li>
            <Link to="#!"> 03 PM </Link>
          </li>
          <li>
            <Link to="#!"> 04 PM </Link>
          </li>
          <li>
            <Link to="#!"> 05 PM </Link>
          </li>
          <li>
            <Link to="#!"> 06 PM </Link>
          </li>
          <li>
            <Link to="#!"> 07 PM </Link>
          </li>
          <li>
            <Link to="#!"> 08 PM </Link>
          </li>
          <li>
            <Link to="#!"> 09 PM </Link>
          </li>
          <li>
            <Link to="#!"> 10 PM </Link>
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
