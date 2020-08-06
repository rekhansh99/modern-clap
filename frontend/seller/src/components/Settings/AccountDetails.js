import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';
import { ReactComponent as TickSVG } from '../../svgs/tick.svg';
import SectionHeading from '../common/SectionHeading';

const AccountDetails = ({
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
    if (!validator.isLength(settings.ownerName, { min: 3 }))
      errors.ownerName = "Owner's name should contain atleast 3 letters";
    if (!validator.isEmail(settings.ownerEmail))
      errors.ownerEmail = 'Email is not valid';
    if (!validator.isMobilePhone(settings.ownerMobile))
      errors.ownerMobile = 'Mobile number is not valid';
    if (
      settings.ownerPhone !== '' &&
      settings.ownerPhone !== null &&
      !validator.isMobilePhone(settings.ownerPhone)
    )
      errors.ownerPhone = 'Phone number is not valid';
    if (settings.country === 'Select Country')
      errors.country = 'Select a country';
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      await onSubmit({
        ownerName: settings.ownerName,
        ownerEmail: settings.ownerEmail,
        ownerMobile: settings.ownerMobile,
        ownerPhone: settings.ownerPhone,
        country: settings.country
      });
      setChanged(false);
    }
  };

  return (
    <div className="dv_per_service_wrapper">
      <SectionHeading
        title="Account Details"
        active={active}
        setActive={setActive}
        changed={changed}
        onSubmit={validateSettings}
      />
      {active && (
        <Row className="p-3">
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Owner Full Name</label>
              <FormControl
                name="ownerName"
                type="text"
                className="dv_all_inputs"
                placeholder="Owner Name"
                value={settings.ownerName || ''}
                onChange={onInputChange}
                isInvalid={!!errors.ownerName}
              />
              <FormControl.Feedback type="invalid">{errors.ownerName}</FormControl.Feedback>
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>
                Email Address
                <TickSVG
                  style={{
                    display: settings.ownerEmailVerified ? 'block' : 'none',
                    width: '15px',
                    float: 'left',
                    margin: '3px 10px 0 0'
                  }}
                />
              </label>
              <FormControl
                name="ownerEmail"
                type="email"
                className="dv_all_inputs"
                placeholder="Owner Email"
                value={settings.ownerEmail || ''}
                onChange={onInputChange}
                isInvalid={!!errors.ownerEmail}
              />
              <FormControl.Feedback type="invalid">{errors.ownerEmail}</FormControl.Feedback>
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>
                Mobile No
                <TickSVG
                  style={{
                    display: settings.ownerMobileVerified ? 'block' : 'none',
                    width: '15px',
                    float: 'left',
                    margin: '3px 10px 0 0'
                  }}
                />
              </label>
              <FormControl
                name="ownerMobile"
                type="text"
                className="dv_all_inputs"
                placeholder="Owner Mobile Number"
                value={settings.ownerMobile || ''}
                onChange={onInputChange}
                isInvalid={!!errors.ownerMobile}
              />
              <FormControl.Feedback type="invalid">{errors.ownerMobile}</FormControl.Feedback>
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Phone No</label>
              <FormControl
                name="ownerPhone"
                type="text"
                className="dv_all_inputs"
                placeholder="Owner Phone Number"
                value={settings.ownerPhone || ''}
                onChange={onInputChange}
                isInvalid={!!errors.ownerPhone}
              />
              <FormControl.Feedback type="invalid">{errors.ownerPhone}</FormControl.Feedback>
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Select Country</label>
              <FormControl
                name="country"
                type="text"
                className="dv_all_inputs"
                placeholder="Country"
                value={settings.country || ''}
                disabled
              />
            </FormGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

AccountDetails.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  changed: PropTypes.bool.isRequired,
  setChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  setSettings: PropTypes.func.isRequired
};

export default AccountDetails;
