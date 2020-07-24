import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormFile from 'react-bootstrap/FormFile'

const AccountVerificationFormGroup = ({ isOpen }) => {
  const [selectedFileName, setSelectedFile] = useState('Attach Trade License');

  return (
    <FormGroup style={{ display: isOpen ? 'block' : 'none' }}>
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Trade License No"
        name="tradeLicenseNo"
        required
      ></FormControl>
      <FormControl
        type="date"
        className="dv_careers_form_input"
        title="Expiry Date"
        name="tradeLicenseDate"
        required
      ></FormControl>
      <FormFile custom style={{ height: 'auto' }}>
        <FormFile.Input
          type="file"
          className="form-control dv_careers_form_input"
          name="tradeLicenseDoc"

          required
          onChange={e => setSelectedFile(e.target.files[0].name)}
        />
        <FormFile.Label className="dv_attach_resume" htmlFor="customFile">
          {selectedFileName}
        </FormFile.Label>
      </FormFile>
    </FormGroup>
  );
};

AccountVerificationFormGroup.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default AccountVerificationFormGroup;
