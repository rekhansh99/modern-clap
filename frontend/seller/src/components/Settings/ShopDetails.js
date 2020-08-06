import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

import { Row, Col, FormControl, FormGroup } from 'react-bootstrap';
import SectionHeading from '../common/SectionHeading';
import { ReactComponent as TickSVG } from '../../svgs/tick.svg';

const ShopDetails = ({
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

    if (
      settings.contactPersonMobile &&
      settings.contactPersonMobile !== '' &&
      !validator.isMobilePhone(settings.contactPersonMobile)
    )
      errors.contactPersonMobile = 'Enter a valid mobile number';

    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      await onSubmit({
        shopName: settings.shopName,
        contactPersonName: settings.contactPersonName,
        contactPersonMobile: settings.contactPersonMobile
      });
      setChanged(false);
    }
  };

  return (
    <div className="dv_per_service_wrapper">
      <SectionHeading
        title="Shop Details"
        active={active}
        setActive={setActive}
        changed={changed}
        onSubmit={validateSettings}
      />
      {active && (
        <Row className="p-3">
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Business Type </label>
              <FormControl
                name="type"
                type="text"
                className="dv_all_inputs"
                placeholder="Business Type"
                defaultValue={settings.type.name || ''}
                disabled
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Shop Name </label>
              <FormControl
                name="shopName"
                type="text"
                className="dv_all_inputs"
                placeholder="Shop Name"
                value={settings.shopName || ''}
                onChange={onInputChange}
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Contact Person </label>
              <FormControl
                name="contactPersonName"
                type="text"
                className="dv_all_inputs"
                placeholder="Contact Person Name"
                value={settings.contactPersonName || ''}
                onChange={onInputChange}
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <TickSVG
                style={{
                  display: settings.contactPersonMobileVerified
                    ? 'block'
                    : 'none',
                  width: '15px',
                  float: 'left',
                  margin: '3px 10px 0 0'
                }}
              />
              <label>Contact Number </label>
              <FormControl
                name="contactPersonMobile"
                type="text"
                className="dv_all_inputs"
                placeholder="Contact Person Mobile Number"
                value={settings.contactPersonMobile || ''}
                onChange={onInputChange}
                isInvalid={!!errors.contactPersonMobile}
              />
              <FormControl.Feedback type="invalid">
                {errors.contactPersonMobile}
              </FormControl.Feedback>
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Location </label>
              <FormControl
                name="city"
                type="text"
                className="dv_all_inputs"
                placeholder="Location"
                value={settings.city || ''}
                disabled
              />
            </FormGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

ShopDetails.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  changed: PropTypes.bool.isRequired,
  setChanged: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  setSettings: PropTypes.func.isRequired
};

export default ShopDetails;
