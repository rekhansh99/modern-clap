import React from 'react';
import { Link } from 'react-router-dom';

import FormControl from 'react-bootstrap/FormControl';
import FormFile from 'react-bootstrap/FormFile';
import FormFileInput from 'react-bootstrap/FormFileInput';
import FormFileLabel from 'react-bootstrap/FormFileLabel';
import Button from 'react-bootstrap/Button';

import Header from '../components/common/Header';
import SectionHeading from '../components/common/SectionHeading';

import { ReactComponent as GreenTickSVG } from '../svgs/tick-green.svg';

const ProviderRegistration = () => {
  document.title = 'Provider Registration | Modern clap';

  return (
    <div className="dv_wrapper">
      <Header
        title="Best way to grow your business "
        desc="Register and Join with our more than 30,000 partners and give boost to business."
        headerClassName="dv_seller_registration_header"
      />
      <div className="dv_content">
        <div className="dv_seller_registration_wrapper">
          <div className="dv_seller_container">
            <ul className="dv_login_regi_provider">
              <li><Link to="/provider/login">Login </Link></li>
              <li><Link to="/provider/register" className="active">Register </Link></li>
            </ul>
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
                Our respresentative will verify your document after only you can login
                your account
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
              <option>Select Country</option>
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
            <SectionHeading className="mb-3" title="Shop Details" linkText="edit" />
            <FormControl as="select" className="dv_careers_form_input" defaultValue={1}>
              <option value={1}>Business Category </option>
              <option value={2}>Cleaners </option>
              <option value={3}>Online Fitness </option>
              <option value={4}>Ladies Salon </option>
              <option value={5}>Gents Salon </option>
              <option value={6}>Disinfection </option>
              <option value={7}>Deep Cleaning </option>
              <option value={8}>Handyman </option>
              <option value={9}>Electrician </option>
              <option value={10}>Painters </option>
              <option value={11}>Packers &amp; Movers </option>
              <option value={12}>AC Technicians </option>
              <option value={13}>Pest COntrol </option>
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
            <FormControl as="select" className="dv_careers_form_input" defaultValue="emirates">
              <option value="emirates">Emirates </option>
              <option value="dubai">Dubai </option>
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

export default ProviderRegistration;
