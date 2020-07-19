import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';
import { ReactComponent as TickSVG } from '../../svgs/tick.svg';

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
        <Link to="#!" className="float-right">
          edit
        </Link>
      </h4>
      <Row className="p-3">
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Owner Full Name</label>
            <FormControl
              disabled
              type="text"
              className="dv_all_inputs"
              placeholder="Shyam Jadhav"
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
              disabled
              type="text"
              className="dv_all_inputs"
              placeholder="demo@gmail.com"
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
              disabled
              type="text"
              className="dv_all_inputs"
              placeholder={9222266992}
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Phone No</label>
            <FormControl
              disabled
              type="text"
              className="dv_all_inputs"
              placeholder={910456789}
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Select Country</label>
            <FormControl
              disabled
              type="text"
              className="dv_all_inputs"
              placeholder="India"
            />
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export default AccountDetails;
