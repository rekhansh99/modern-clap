import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import Header from '../components/common/Header';
import SectionHeading from '../components/common/SectionHeading';

const SellerLogin = () => {
  document.title = 'Provider Login | Modern clap';

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
              <li><Link to="/provider/login" className="active">Login </Link></li>
              <li><Link to="/provider/register">Register </Link></li>
            </ul>
            <SectionHeading
              title="Login as a Provider"
              className="mb-3"
            />
            <FormControl type="email" className="dv_careers_form_input" placeholder="User Name" />
            <FormControl type="password" className="dv_careers_form_input" placeholder="Password" />
          </div>
        </div>
      </div>
      <div className="dv_continue_next">
        <div className="dv_seller_container pb-2  pt-2">
          <Button className="btn-default dv_seller_submit_btn">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;