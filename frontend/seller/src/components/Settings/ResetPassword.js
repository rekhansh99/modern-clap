import React from 'react';

import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className="dv_per_service_wrapper">
      <h4
        style={{
          margin: 0,
          fontSize: '14px',
          textAlign: 'left',
          textTransform: 'uppercase',
          borderBottom: '1px solid #d7d7d7',
          display: 'block',
          padding: '15px',
          width: '100%',
          fontFamily: 'Segoe ui bold',
          borderTop: '1px solid #d7d7d7',
          background: '#ececec'
        }}
      >
        Reset Password
        <Link to="#!" className="float-right">
          edit
        </Link>
      </h4>
      <Row className="p-3">
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Current Password </label>
            <FormControl
              type="Password"
              className="dv_all_inputs dv_error_for_input"
              placeholder="Enter"
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>New Password </label>
            <FormControl
              type="Password"
              className="dv_all_inputs"
              placeholder="Enter"
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Retype New Password </label>
            <FormControl
              type="Password"
              className="dv_all_inputs"
              placeholder="Enter"
            />
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ResetPassword;
