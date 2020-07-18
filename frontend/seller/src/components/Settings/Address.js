import React from 'react';

import { Row, Col } from 'react-bootstrap';

const Address = () => {
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
        Address
        <div className="float-right dv_setting_save_btn_wrapper">
          <button type="button" className="btn btn-sm text-dark">
            Cancel
          </button>
          <button type="button" className="btn btn-sm btn-primary">
            Save
          </button>
        </div>
      </h4>
      <Row className="p-3">
        <Col xs={12}>
          <div className="form-group">
            <label>Address </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="M-2, Bualeeba plaza, near google plaza center, goregaon est, Mumbai - 400063"
              disabled
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>State </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="State"
              defaultValue="Maharashtra"
              disabled
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>City / Area </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="City Area"
              defaultValue="Mumbai"
              disabled
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Pincode </label>
            <input
              disabled
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder
              defaultValue={81765}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Address;
