import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Header from '../components/common/Header';
import SectionHeading from '../components/common/SectionHeading';

import { ReactComponent as GreenTickSVG } from '../svgs/tick-green.svg';
import PersonalDetailsFormGroup from '../components/Provider/PersonalDetailsFormGroup';
import AccountVerificationFormGroup from '../components/Provider/AccountVerificationFormGroup';
import ShopDetailsFormGroup from '../components/Provider/ShopDetailsFormGroup';

const REGISTER_PROVIDER = gql`
  mutation RegisterProvider($provider: RegisterProviderInput!) {
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
  const [registerProvider, { data }] = useMutation(REGISTER_PROVIDER);

  const handleNext = async event => {
    event.preventDefault();
    const formData = form.current.elements;

    /* validation code here
     *  if current section input values pass validation move to next section or register
     */

    if (openSection === 2) {
      registerProvider({
        variables: {
          provider: {
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
          }
        }
      });
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
              <PersonalDetailsFormGroup isOpen={openSection === 0} />
              <SectionHeading
                className="mb-3"
                title="Account Verification"
                onClick={() => setOpenSection(1)}
                linkText={highestReachedSection >= 1 ? 'Edit' : ''}
              />
              <AccountVerificationFormGroup isOpen={openSection === 1} />
              <SectionHeading
                className="mb-3"
                title="Shop Details"
                onClick={() => setOpenSection(2)}
                linkText={highestReachedSection >= 2 ? 'Edit' : ''}
              />
              <ShopDetailsFormGroup isOpen={openSection === 2} />
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
