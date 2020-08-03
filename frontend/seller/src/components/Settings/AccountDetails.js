import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';
import { ReactComponent as TickSVG } from '../../svgs/tick.svg';

const AccountDetails = ({
  active,
  setActive,
  onSubmit,
  settings,
  setSettings
}) => {
  const onInputChange = e => {
    setSettings({ [e.target.name]: e.target.value });
  };

  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">
        Account Details
        {active ? (
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
              onClick={() => onSubmit(['ownerName', 'ownerEmail', 'ownerMobile', 'ownerPhone', 'country'])}
            >
              Save
            </button>
          </div>
        ) : (
          <Link
            to="#!"
            className="float-right"
            onClick={() => setActive('accountDetails')}
          >
            edit
          </Link>
        )}
      </h4>
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
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>
                Email Address
                <TickSVG
                  style={{
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
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>
                Mobile No
                <TickSVG
                  style={{
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
              />
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
              />
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
                onChange={onInputChange}
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
  onSubmit: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  setSettings: PropTypes.func.isRequired
};

export default AccountDetails;
