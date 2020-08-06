import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';
import SectionHeading from '../common/SectionHeading';

const Address = ({
  active,
  setActive,
  onSubmit,
  settings,
  setSettings,
  changed,
  setChanged
}) => {
  const [errors, setErrors] = useState({});
  const onInputChange = e => {
    setSettings({ [e.target.name]: e.target.value });
  };

  const validateSettings = async () => {
    const errors = {};
 
    if (settings.address === '')
      errors.address = 'This is required';
 
      if (settings.city === '')
      errors.city = 'This is required';
      
      if (settings.state === '')
        errors.state = 'This is required';
   
    if (settings.pincode === '')
      errors.pincode = 'This is required';
    setErrors(errors);

    if(Object.keys(errors).length === 0) {
      await onSubmit({
        address: settings.address,
        state: settings.state,
        city: settings.city,
        pincode: settings.pincode
      });
      setChanged(false);
    }
  };

  return (
    <div className="dv_per_service_wrapper">
      <SectionHeading
        title="Address"
        active={active}
        setActive={setActive}
        changed={changed}
        onSubmit={validateSettings}
      />
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
                isInvalid={!!errors.address}
              />
              <FormControl.Feedback type="invalid">{errors.address}</FormControl.Feedback>
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
                isInvalid={!!errors.city}
              />
              <FormControl.Feedback type="invalid">{errors.city}</FormControl.Feedback>
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>State</label>
              <FormControl
                name="state"
                type="text"
                className="dv_all_inputs"
                placeholder="State"
                value={settings.state || ''}
                onChange={onInputChange}
                isInvalid={!!errors.state}
              />
              <FormControl.Feedback type="invalid">{errors.state}</FormControl.Feedback>
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
                isInvalid={!!errors.pincode}
              />
              <FormControl.Feedback type="invalid">{errors.pincode}</FormControl.Feedback>
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
  changed: PropTypes.bool.isRequired,
  setChanged: PropTypes.func.isRequired
};

export default Address;
