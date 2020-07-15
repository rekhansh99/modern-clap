import React from 'react';
import Header from '../../components/Header';

import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormFile from 'react-bootstrap/FormFile';
import FormFileInput from 'react-bootstrap/FormFileInput';
import FormFileLabel from 'react-bootstrap/FormFileLabel';

import SectionHeading from '../../components/SectionHeading';

import { ReactComponent as GreenTickSVG } from '../../svgs/tick-green.svg';

const SellerRegistration = () => {
  document.title = 'Seller Registration | Modern clap';

  return (
    <div className="dv_wrapper">
      <Header
        title="Best way to grow your business "
        desc="Register and Join with our more than 30,000 partners and give boost to business."
        headerClassName="dv_about_us_page"
      />
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
              <GreenTickSVG />
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
                Our respresentative will verify your document after only you can
                login your account
              </p>
            </span>
            <SectionHeading
              className="mb-3"
              title="Contact Information"
              linkText="edit"
            />
            <FormControl
              type="text"
              className="dv_careers_form_input"
              placeholder="Owner Full Name"
            ></FormControl>
            <FormControl
              type="email"
              className="dv_careers_form_input"
              placeholder="Email Address"
            ></FormControl>
            <FormControl
              type="tel"
              className="dv_careers_form_input"
              placeholder="Mobile No"
            ></FormControl>
            <FormControl
              type="text"
              className="dv_careers_form_input"
              placeholder="Phone No"
            ></FormControl>
            <FormControl as="select" className="dv_careers_form_input">
              <option value>Select Country</option>
              <option>United arab emirates</option>
              <option>India</option>
              <option>United State of America</option>
            </FormControl>
            <FormControl
              type="password"
              className="dv_careers_form_input"
              placeholder="Password"
            ></FormControl>
            <FormControl
              type="password"
              className="dv_careers_form_input"
              placeholder="Retype Password"
            ></FormControl>
            <SectionHeading
              className="mb-3"
              title="Account Verification"
              linkText="edit"
            />
            <FormControl
              type="text"
              className="dv_careers_form_input"
              placeholder="Trade License No"
            ></FormControl>
            <FormControl
              type="date"
              className="dv_careers_form_input"
              title="Expiry Date"
            ></FormControl>
            <FormFile custom style={{ height: 'auto' }}>
              <FormFileInput
                type="file"
                className="form-control dv_careers_form_input"
                name="filename"
              />
              <FormFileLabel className="dv_attach_resume" htmlFor="customFile">
                Attach Trade License
              </FormFileLabel>
            </FormFile>
            <SectionHeading
              className="mb-3"
              title="Shop Details"
              linkText="edit"
            />
            <FormControl as="select" className="dv_careers_form_input">
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
            </FormControl>
            <FormControl
              type="text"
              className="dv_careers_form_input"
              placeholder="Shop Name"
            />
            <FormControl
              type="text"
              className="dv_careers_form_input"
              placeholder="Contact Person (optional)"
            />
            <FormControl
              type="text"
              className="dv_careers_form_input"
              placeholder="Contact No (optional)"
            />
            <FormControl as="select" className="dv_careers_form_input">
              <option selected>Emirates </option>
              <option selected>Dubai </option>
              {/* <option disabled="">Sharjha </option>
                  <option disabled="">Abu Dhabi </option>
                  <option disabled="">Ras al khaim </option>
                <option disabled="">Al ain </option> */}
            </FormControl>
            <FormControl
              type="text"
              className="dv_careers_form_input"
              placeholder="Address"
            />
            <FormControl
              type="text"
              className="dv_careers_form_input"
              placeholder="Area"
            />
            <FormControl
              type="text"
              className="dv_careers_form_input"
              placeholder="P.O Box "
            />
          </div>
        </div>
      </div>
      <div className="dv_continue_next">
        <div className="dv_seller_container pb-2  pt-2">
          <Button className="btn-default dv_seller_submit_btn">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default SellerRegistration;
