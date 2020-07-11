import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';

import { ReactComponent as BellSVG } from '../../../../svgs/bell.svg';

const Location = ({ isOpen, close }) => {
  return (
    <Modal
      id="areyousure"
      dialogClassName="dv_choose_location_md_dialog"
      show={isOpen}
      onHide={close}
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
          <BellSVG />
          Please select reason
        </ModalTitle>
      </ModalHeader>
      <ModalBody
        style={{ border: 'none', padding: '15px', borderRadius: '0 0 5px 5px' }}
      >
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 custom-control custom-checkbox dv_take_reason_list_12">
          <input
            type="checkbox"
            className="custom-control-input"
            id="reason1"
            name="cash"
          />
          <label className="custom-control-label" htmlFor="reason1">
            Hired someone else
          </label>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 custom-control custom-checkbox dv_take_reason_list_12">
          <input
            type="checkbox"
            className="custom-control-input"
            id="reason2"
            name="cash"
          />
          <label className="custom-control-label" htmlFor="reason2">
            Placed the request by mistake
          </label>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 custom-control custom-checkbox dv_take_reason_list_12">
          <input
            type="checkbox"
            className="custom-control-input"
            id="reason3"
            name="cash"
          />
          <label className="custom-control-label" htmlFor="reason3">
            Want the service at some other time
          </label>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 custom-control custom-checkbox dv_take_reason_list_12">
          <input
            type="checkbox"
            className="custom-control-input"
            id="reason4"
            name="cash"
          />
          <label className="custom-control-label" htmlFor="reason4">
            Beautician asked to cancel
          </label>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 custom-control custom-checkbox dv_take_reason_list_12">
          <input
            type="checkbox"
            className="custom-control-input"
            id="reason5"
            name="cash"
          />
          <label className="custom-control-label" htmlFor="reason5">
            Did not like the beautician
          </label>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 custom-control custom-checkbox dv_take_reason_list_12">
          <input
            type="checkbox"
            className="custom-control-input"
            id="reason6"
            name="cash"
          />
          <label className="custom-control-label" htmlFor="reason6">
            Beautician refused to serve
          </label>
        </div>
        <div className="dv_ciuntry_based_filter">
          <div className="dv_view_cart_visible">
            <div className="dv_areyousure_footer">
              <button
                type="button"
                onClick={close}
                className="btn btn-default dv_no_dontproceed_btn"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-default dv_yes_proceed_btn"
              >
                Yes Cancel
              </button>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

Location.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default Location;
