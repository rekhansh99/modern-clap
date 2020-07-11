import React from 'react';
import Header from '../../components/Header';

import { ReactComponent as TickSVG } from '../../svgs/tick.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SellerRegistration = () => {
  return (
    <div className="dv_wrapper">
      <Header
        title="Best way to grow your business "
        desc="Register and Join with our more than 30,000 partners and give boost to business. "
      />
      <div>
        <div className="dv_content">
          <div className="dv_seller_registration_wrapper">
            <div className="dv_seller_container">
              <span
                className="dv_section_heading"
                style={{
                  margin: '0 0 15px 0',
                  background: 'rgb(63, 199, 63, 0.3)',
                  color: '#1b901b'
                }}
              >
                <TickSVG />
                Succesfully Register
                <p
                  style={{
                    fontSize: '12px',
                    textTransform: 'initial',
                    fontWeight: 400,
                    padding: '0 0 0 32px',
                    margin: 0
                  }}
                >
                  Our respresentative will verify your document after only you
                  can login your account
                </p>
              </span>
              <span
                className="dv_section_heading"
                style={{ margin: '0 0 15px 0' }}
              >
                <TickSVG />
                Contact Information
                {/* <span class="dv_sm_overview">Basic info </span> */}
                <a href="#!" className="dv_edit_for_all">
                  edit
                </a>
              </span>
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="Owner Full Name"
              ></Form.Control>
              <Form.Control
                type="Email Address"
                className="dv_careers_form_input"
                placeholder="Email Address"
              ></Form.Control>
              <Form.Control
                type="tel"
                className="dv_careers_form_input"
                placeholder="Mobile No"
              ></Form.Control>
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="Phone No"
              ></Form.Control>
              <Form.Control as="select" className="dv_careers_form_input">
                <option value>Select Country</option>
                <option>United arab emirates</option>
                <option>India</option>
                <option>United State of America</option>
              </Form.Control>
              <Form.Control
                type="password"
                className="dv_careers_form_input"
                placeholder="Password"
              ></Form.Control>
              <Form.Control
                type="Password"
                className="dv_careers_form_input"
                placeholder="Retype Password"
              ></Form.Control>
              <span
                className="dv_section_heading"
                style={{ margin: '0 0 15px 0' }}
              >
                <TickSVG />
                Account verification
                {/* <span class="dv_sm_overview">Basic info </span> */}
                <a href="#!" className="dv_edit_for_all">
                  edit
                </a>
              </span>
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="Trade License No"
              ></Form.Control>
              <Form.Control
                type="date"
                className="dv_careers_form_input"
                placeholder
                defaultValue
                title="Expiry Date"
              ></Form.Control>
              <div className="custom-file mb-3">
                <input
                  type="file"
                  className="form-control dv_careers_form_input custom-file-input"
                  name="filename"
                />
                <label
                  className="dv_attach_resume custom-file-label"
                  htmlFor="customFile"
                >
                  Attach Trade License
                </label>
                <span
                  className="dv_section_heading"
                  style={{ margin: '0 0 15px 0' }}
                >
                  <TickSVG />
                  Shop Details
                  {/* <span class="dv_sm_overview">Basic info </span> */}
                  <a href="#!" className="dv_edit_for_all">
                    edit
                  </a>
                </span>
                <Form.Control as="select" className="dv_careers_form_input">
                  <option selected>Business Category </option>
                  <option>Cleaners </option>
                  <option>Online Fitness </option>
                  <option>Ladies Salon </option>
                  <option>Gents Salon </option>
                  <option>Disinfection </option>
                  <option>Deep Cleaning </option>
                  <option>Handyman </option>
                  <option>Electrician </option>
                  <option>Painters </option>
                  <option>Packers &amp; Movers </option>
                  <option>AC Technicians </option>
                  <option>Pest COntrol </option>
                </Form.Control>
                <Form.Control
                  type="text"
                  className="dv_careers_form_input"
                  placeholder="Shop Name"
                ></Form.Control>
                <Form.Control
                  type="text"
                  className="dv_careers_form_input"
                  placeholder="Contact Person (optional)"
                ></Form.Control>
                <Form.Control
                  type="text"
                  className="dv_careers_form_input"
                  placeholder="Contact No (optional)"
                ></Form.Control>
                <Form.Control as="select" className="dv_careers_form_input">
                  <option selected>Emirates </option>
                  <option selected>Dubai </option>
                  {/* <option disabled="">Sharjha </option>
										<option disabled="">Abu Dhabi </option>
										<option disabled="">Ras al khaim </option>
										<option disabled="">Al ain </option> */}
                </Form.Control>
                <Form.Control
                  type="text"
                  className="dv_careers_form_input"
                  placeholder="Address"
                ></Form.Control>
                <Form.Control
                  type="text"
                  className="dv_careers_form_input"
                  placeholder="Area"
                ></Form.Control>
                <Form.Control
                  type="text"
                  className="dv_careers_form_input"
                  placeholder="P.O Box "
                ></Form.Control>
              </div>
            </div>
          </div>
        </div>
        <div className="dv_continue_next">
          <div className="dv_seller_container pb-2  pt-2">
            <Button className="btn-default dv_seller_submit_btn">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerRegistration;
