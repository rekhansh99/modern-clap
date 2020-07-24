import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormFile from 'react-bootstrap/FormFile';
import FormFileInput from 'react-bootstrap/FormFileInput';
import FormFileLabel from 'react-bootstrap/FormFileLabel';
import Button from 'react-bootstrap/Button';

import Header from '../components/common/Header';
import SectionHeading from '../components/common/SectionHeading';

import { ReactComponent as GreenTickSVG } from '../svgs/tick-green.svg';

const REGISTER_PROVIDER = gql`
  mutation RegisterProvider($provider : RegisterProviderInput!) {
    registerProvider(provider: $provider) {
      _id
    }
  }
`;

const ProviderRegistration = () => {
  document.title = 'Provider Registration | Modern clap';

  const form = useRef(null);

  const [openSection, setOpenSection] = useState(0);
  const [highestReachedSection, setHighestReachedSection] = useState(0);
  const [selectedFileName, setSelectedFile] = useState('Attach Trade License');

  const [registerProvider, { data }] = useMutation(REGISTER_PROVIDER);

  const handleNext = async event => {
    event.preventDefault();
    const formData = form.current.elements;

    /* validation code here
    *  if current section input values pass validation move to next section or register
    */

    if (openSection === 2) {
      registerProvider({ variables: { provider: {
        ownerName: formData.ownerName.value,
        ownerEmail: formData.ownerEmail.value,
        ownerMobile: formData.ownerMobile.value,
        ownerPhone: formData.ownerPhone.value,
        country: formData.country.value,
        password: formData.password.value,
        tradeLicenseNo: formData.tradeLicenseNo.value,
        tradeLicenseDate: formData.tradeLicenseDate.value,
        tradeLicenseDoc: formData.tradeLicenseDoc.value,
        businessCategory: formData.businessCategory.value,
        shopName: formData.shopName.value,
        contactPersonName: formData.contactPersonName.value,
        contactPersonMobile: formData.contactPersonMobile.value,
        city: formData.city.value,
        pincode: formData.pincode.value,
        address: formData.address.value,
        area: formData.area.value
      }}})
    }

    highestReachedSection === openSection &&
      setHighestReachedSection(highestReachedSection + 1);
    setOpenSection(openSection + 1);
  };

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
              <li>
                <Link to="/provider/login">Login </Link>
              </li>
              <li>
                <Link to="/provider/register" className="active">
                  Register
                </Link>
              </li>
            </ul>
            <span
              className="dv_section_heading"
              style={{
                margin: '0 0 15px 0',
                background: 'rgb(63, 199, 63, 0.3)',
                color: '#1b901b',
                display: data ? 'block' : 'none'
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
            <Form id="registrationForm" ref={form}>
              <SectionHeading
                className="mb-3"
                title="Contact Information"
                onClick={() => setOpenSection(0)}
                linkText={highestReachedSection >= 0 ? 'Edit' : ''}
              />
                <FormGroup style={{display: openSection === 0 ? "block" : "none"}}>
                  <FormControl
                    type="text"
                    className="dv_careers_form_input"
                    placeholder="Owner Full Name"
                    name="ownerName"
                    id="ownerName"
                    required
                  ></FormControl>
                  <FormControl
                    type="email"
                    className="dv_careers_form_input"
                    placeholder="Email Address"
                    name="ownerEmail"
                    id="ownerEmail"
                    required
                  ></FormControl>
                  <FormControl
                    type="tel"
                    className="dv_careers_form_input"
                    placeholder="Mobile No"
                    name="ownerMobile"
                    id="ownerMobile"
                    required
                  ></FormControl>
                  <FormControl
                    type="text"
                    className="dv_careers_form_input"
                    placeholder="Phone No"
                    name="ownerPhone"
                    id="ownerPhone"
                  ></FormControl>
                  <FormControl
                    as="select"
                    className="dv_careers_form_input"
                    name="country"
                    id="country"
                    required
                  >
                    <option value="Select Country">Select Country</option>
                    <option value="United arab emirates">
                      United arab emirates
                    </option>
                    <option value="India">India</option>
                    <option value="United States of America">
                      United State of America
                    </option>
                  </FormControl>
                  <FormControl
                    type="password"
                    className="dv_careers_form_input"
                    placeholder="Password"
                    name="password"
                    id="password"
                    required
                  ></FormControl>
                  <FormControl
                    type="password"
                    className="dv_careers_form_input"
                    placeholder="Retype Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    required
                  ></FormControl>
                </FormGroup>
              <SectionHeading
                className="mb-3"
                title="Account Verification"
                onClick={() => setOpenSection(1)}
                linkText={highestReachedSection >= 1 ? 'Edit' : ''}
              />
                <FormGroup style={{display: openSection === 1 ? "block" : "none"}}>
                  <FormControl
                    type="text"
                    className="dv_careers_form_input"
                    placeholder="Trade License No"
                    name="tradeLicenseNo"
                    id="tradeLicenseNo"
                    required
                  ></FormControl>
                  <FormControl
                    type="date"
                    className="dv_careers_form_input"
                    title="Expiry Date"
                    name="tradeLicenseDate"
                    id="tradeLicenseDate"
                    required
                  ></FormControl>
                  <FormFile custom style={{ height: 'auto' }}>
                    <FormFileInput
                      type="file"
                      className="form-control dv_careers_form_input"
                      name="tradeLicenseDoc"
                      id="tradeLicenseDoc"
                      required
                      onChange={e => setSelectedFile(e.target.files[0].name)}
                    />
                    <FormFileLabel
                      className="dv_attach_resume"
                      htmlFor="customFile"
                    >
                      {selectedFileName}
                    </FormFileLabel>
                  </FormFile>
                </FormGroup>
              <SectionHeading
                className="mb-3"
                title="Shop Details"
                onClick={() => setOpenSection(2)}
                linkText={highestReachedSection >= 2 ? 'Edit' : ''}
              />
                <FormGroup style={{display: openSection === 2 ? "block" : "none"}}>
                  <FormControl
                    as="select"
                    className="dv_careers_form_input"
                    name="businessCategory"
                    id="businessCategory"
                    required
                  >
                    <option value="Business Category">
                      Business Category{' '}
                    </option>
                    <option value="Cleaners">Cleaners </option>
                    <option value="Online Fitness">Online Fitness </option>
                    <option value="Ladies Salon">Ladies Salon </option>
                    <option value="Gents Salon">Gents Salon </option>
                    <option value="Disinfection">Disinfection </option>
                    <option value="Deep Cleaning">Deep Cleaning </option>
                    <option value="Handyman">Handyman </option>
                    <option value="Electrician">Electrician </option>
                    <option value="Painters">Painters </option>
                    <option value="Packers & Movers">
                      Packers &amp; Movers
                    </option>
                    <option value="AC Technicians">AC Technicians </option>
                    <option value="Pest Control">Pest Control </option>
                  </FormControl>
                  <FormControl
                    type="text"
                    className="dv_careers_form_input"
                    placeholder="Shop Name"
                    name="shopName"
                    id="shopName"
                    required
                  />
                  <FormControl
                    type="text"
                    className="dv_careers_form_input"
                    placeholder="Contact Person (optional)"
                    name="contactPersonName"
                    id="contactPersonName"
                  />
                  <FormControl
                    type="text"
                    className="dv_careers_form_input"
                    placeholder="Contact No (optional)"
                    name="contactPersonMobile"
                    id="contactPersonMobile"
                  />
                  <FormControl
                    as="select"
                    className="dv_careers_form_input"
                    name="city"
                    id="city"
                    required
                  >
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
                    name="address"
                    id="address"
                    required
                  />
                  <FormControl
                    type="text"
                    className="dv_careers_form_input"
                    placeholder="Area"
                    name="area"
                    id="area"
                    required
                  />
                  <FormControl
                    type="text"
                    className="dv_careers_form_input"
                    placeholder="P.O Box "
                    name="pincode"
                    id="pincode"
                    required
                  />
                </FormGroup>
            </Form>
          </div>
        </div>
      </div>
      <div className="dv_continue_next">
        <div className="dv_seller_container pb-2  pt-2">
          <Button
            type="submit"
            form="registrationForm"
            className="btn-default dv_seller_submit_btn"
            onClick={handleNext}
          >
            {highestReachedSection === 2 ? 'Register' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProviderRegistration;
