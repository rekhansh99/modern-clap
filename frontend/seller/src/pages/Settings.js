import React from 'react';

import { Container, Card, Row, Col } from 'react-bootstrap';

import { ReactComponent as TickSVG } from '../svgs/chart.svg';
import SwitchBusiness from '../components/common/SwitchBusiness';

const Settings = () => {
  return (
    <Container fluid>
      <SwitchBusiness
        title="Goodhand Transaction LLC"
        options={[
          'Change',
          'Orville Real Estate',
          'Lightspeed General Trading',
          'Alahsa Stone',
          'TOG'
        ]}
      />
      <h1 className="mt-4 dv_page_heading" id="myBtn">
        Settings
      </h1>
      <Card className="mb-4">
        <Card.Header>Profile</Card.Header>
        <Card.Body className="p-0">
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
                  <strong>Notice : </strong> If you want to add mutiple business
                  in one account then add from here otherwise{' '}
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
                    I accepted merge business{' '}
                    <strong>terms &amp; condition </strong>
                  </label>
                </div>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Settings;
