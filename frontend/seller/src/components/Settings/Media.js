import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';
import SectionHeading from '../common/SectionHeading';

const Media = ({
  active,
  setActive,
  settings
}) => {
  return (
    <div className="dv_per_service_wrapper">
      <SectionHeading
        title="Media"
        active={active}
        setActive={setActive}
        changed={false}
      />
      {active && (
        <Row className="p-3">
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Trade License </label>
              <FormControl
                name="tradeLicenseNo"
                type="text"
                className="dv_all_inputs"
                placeholder="Trade License"
                value={settings.tradeLicenseNo}
                disabled
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Expiry Date </label>
              <FormControl
                type="text"
                className="dv_all_inputs"
                placeholder="Expiry Date"
                defaultValue="12/12/2020"
                disabled
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <Link to="#!" className="float-right">
                Download
              </Link>
              <label>Trade License Copy </label>
              <FormControl
                disabled
                type="text"
                className="dv_all_inputs"
                placeholder="Trade License Copy"
                value={settings.tradeLicenseDoc}
              />
            </FormGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

Media.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  settings:  PropTypes.object.isRequired
};

export default Media;
