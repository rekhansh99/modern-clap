import React from 'react';

import { Row, Col } from 'react-bootstrap';

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
          <div className="form-group">
            <label>Trade License </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="Trade License"
              defaultValue="KJ65423578JB23"
              disabled
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Expiry Date </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="Expiry Date"
              defaultValue="12/12/2020"
              disabled
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <a href="#!" className="float-right">
              Download{' '}
            </a>
            <label>Trade License Copy </label>
            <input
              disabled
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="Trade License Copy"
              defaultValue="tradeliesence.jpg"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Media;
