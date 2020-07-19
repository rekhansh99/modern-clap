import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';

const Media = () => {
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
        Media
      </h4>
      <Row className="p-3">
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Trade License </label>
            <FormControl
              type="text"
              className="dv_all_inputs"
              placeholder="Trade License"
              defaultValue="KJ65423578JB23"
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
              defaultValue="tradeliesence.jpg"
            />
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Media;
