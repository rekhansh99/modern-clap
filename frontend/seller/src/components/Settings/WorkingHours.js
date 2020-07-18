import React from 'react';

import { ReactComponent as TickSVG } from '../../svgs/chart.svg';
import { Row, Col } from 'react-bootstrap';

const WorkingHours = () => {
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
        Working Hours
        <a href="#!" className="float-right">
          edit
        </a>
      </h4>
      <Row className="p-3">
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Business Category </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              defaultValue="Cleaning"
              disabled
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Shop Name </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              defaultValue="Cleaning"
              disabled
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Contact Person </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              defaultValue="Shankar Gupta"
              disabled
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <TickSVG
              style={{
                width: '15px',
                float: 'left',
                margin: '3px 10px 0 0'
              }}
            />
            <label>Contact Number </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              defaultValue={9222266992}
              disabled
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Location </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              defaultValue="Dubai"
              disabled
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WorkingHours;
