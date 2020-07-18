import React from 'react';

import { ReactComponent as TickSVG } from '../../svgs/chart.svg';
import { Row, Col } from 'react-bootstrap';

const CategoryRequestForm = () => {
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
        Add Category Request Form
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
        <Col md={12}>
          <div className="alert alert-warning">
            <strong>Notice : </strong> If you want to add mutiple business in
            one account then add from here otherwise{' '}
            <a href="#!">click here </a> to register as a new business.
          </div>
        </Col>
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
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Shop Name </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="Enter Name"
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
              placeholder="Enter Name"
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Contact Number </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="Enter Number"
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>State </label>
            <select className="form-control dv_all_inputs">
              <option>Dubai </option>
              <option>Abu Dhabi </option>
              <option>Sharjha </option>
              <option>Ras al Khaimah </option>
              <option>Fujairah</option>
            </select>
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Address </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="Enter Address"
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>PO Box</label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="e g : 81748"
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Trade License (jpg, png, pdf) </label>
            <div className="custom-file">
              <label>Trade License </label>
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
              />
              <label className="custom-file-label" htmlFor="customFile">
                Choose file
              </label>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="form-group">
            <label>Trade License No </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="Enter Number"
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
              placeholder="Enter Expiry Date"
            />
          </div>
        </Col>
        <Col xs={12} className="pb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck"
              name="example1"
            />
            <label className="custom-control-label" htmlFor="customCheck">
              I accepted merge business <strong>terms &amp; condition </strong>
            </label>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CategoryRequestForm;
