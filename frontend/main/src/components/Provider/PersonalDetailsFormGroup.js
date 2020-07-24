import React from 'react';
import PropTypes from 'prop-types';

import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';

const PersonalDetailsFormGroup = ({ isOpen }) => {
  return (
    <FormGroup style={{ display: isOpen ? 'block' : 'none' }}>
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Owner Full Name"
        name="ownerName"
        required
      />
      <FormControl
        type="email"
        className="dv_careers_form_input"
        placeholder="Email Address"
        name="ownerEmail"
        required
      />
      <FormControl
        type="tel"
        className="dv_careers_form_input"
        placeholder="Mobile No"
        name="ownerMobile"
        required
      />
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Phone No"
        name="ownerPhone"
      />
      <FormControl
        as="select"
        className="dv_careers_form_input"
        name="country"
        required
      >
        <option value="Select Country">Select Country</option>
        <option value="United arab emirates">United arab emirates</option>
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
        required
      />
      <FormControl
        type="password"
        className="dv_careers_form_input"
        placeholder="Retype Password"
        name="confirmPassword"
        required
      />
    </FormGroup>
  );
};

PersonalDetailsFormGroup.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default PersonalDetailsFormGroup;
