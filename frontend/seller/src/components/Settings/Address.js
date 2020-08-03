import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Address = ({
  active,
  setActive,
  onSubmit,
  settings,
  setSettings,
  changed
}) => {
  const onInputChange = e => {
    setSettings({ [e.target.name]: e.target.value });
  };

  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">
        Address
        {active ? (
          changed && (
            <div className="float-right dv_setting_save_btn_wrapper">
              <button
                type="button"
                className="btn btn-sm text-dark"
                onClick={() => setActive('')}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => onSubmit(['address', 'area', 'city', 'pincode'])}
              >
                Save
              </button>
            </div>
          )
        ) : (
          <Link
            to="#!"
            className="float-right"
            onClick={() => setActive('address')}
          >
            edit
          </Link>
        )}
      </h4>
      {active && (
        <Row className="p-3">
          <Col xs={12}>
            <FormGroup>
              <label>Address</label>
              <FormControl
                name="address"
                type="text"
                className="dv_all_inputs"
                placeholder="Address"
                value={settings.address || ''}
                onChange={onInputChange}
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Area</label>
              <FormControl
                name="area"
                type="text"
                className="dv_all_inputs"
                placeholder="Area"
                value={settings.area || ''}
                onChange={onInputChange}
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>City</label>
              <FormControl
                name="city"
                type="text"
                className="dv_all_inputs"
                placeholder="City"
                value={settings.city || ''}
                onChange={onInputChange}
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Pincode</label>
              <FormControl
                name="pincode"
                type="text"
                className="dv_all_inputs"
                placeholder="Pincode"
                value={settings.pincode || ''}
                onChange={onInputChange}
              />
            </FormGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

Address.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  setSettings: PropTypes.func.isRequired,
  changed: PropTypes.bool.isRequired
};

export default Address;
