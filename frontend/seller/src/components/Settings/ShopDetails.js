import React from 'react';

import { ReactComponent as TickSVG } from '../../svgs/tick.svg';
import { Row, Col, FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShopDetails = () => {
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
        Shop Details
        <Link to="#!" className="float-right">
          edit
        </Link>
      </h4>
      <Row className="p-3">
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Business Category </label>
            <FormControl
              type="text"
              className="dv_all_inputs"
              defaultValue="Cleaning"
              disabled
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Shop Name </label>
            <FormControl
              type="text"
              className="dv_all_inputs"
              defaultValue="Cleaning"
              disabled
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Contact Person </label>
            <FormControl
              type="text"
              className="dv_all_inputs"
              defaultValue="Shankar Gupta"
              disabled
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={4}>
          <FormGroup>
            <TickSVG
              style={{
                width: '15px',
                float: 'left',
                margin: '3px 10px 0 0'
              }}
            />
            <label>Contact Number </label>
            <FormControl
              type="text"
              className="dv_all_inputs"
              defaultValue={9222266992}
              disabled
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Location </label>
            <FormControl
              type="text"
              className="dv_all_inputs"
              defaultValue="Dubai"
              disabled
            />
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ShopDetails;
