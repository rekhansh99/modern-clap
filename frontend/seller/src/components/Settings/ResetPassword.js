import React from 'react';

import { Row, Col } from 'react-bootstrap';

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
        <a href="#!" className="float-right">
          edit
        </a>
      </h4>
      <Row className="p-3">
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Current Password </label>
            <input
              type="Password"
              className="form-control dv_all_inputs dv_error_for_input"
              name
              placeholder="Enter"
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>New Password </label>
            <input
              type="Password"
              className="form-control dv_all_inputs"
              name
              placeholder="Enter"
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Retype New Password </label>
            <input
              type="Password"
              className="form-control dv_all_inputs"
              name
              placeholder="Enter"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ResetPassword;
