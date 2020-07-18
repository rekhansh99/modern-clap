import React from 'react';

import { ReactComponent as TickSVG } from '../../svgs/chart.svg';
import { Row, Col } from 'react-bootstrap';

const AccountDetails = () => {
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
        Account Details
        <a href="#!" className="float-right">
          edit
        </a>
      </h4>
      <Row className="p-3">
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Owner Full Name</label>
            <input
              disabled
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="Shyam Jadhav"
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
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
            <input
              disabled
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="demo@gmail.com"
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
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
            <input
              disabled
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder={9222266992}
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Phone No</label>
            <input
              disabled
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder={910456789}
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Select Country</label>
            <input
              disabled
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="India"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AccountDetails;
