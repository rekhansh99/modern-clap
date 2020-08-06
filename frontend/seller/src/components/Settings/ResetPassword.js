import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';
import SectionHeading from '../common/SectionHeading';
import { gql, useMutation } from '@apollo/client';

const RESET_PASSWORD = gql`
  mutation ResetPassword($old: String!, $new: String!) {
    resetPassword(old: $old, new: $new)
  }
`;

const ResetPassword = ({ active, setActive }) => {
  const currPassRef = useRef(null);
  const newPassRef = useRef(null);
  const cnfPassRef = useRef(null);

  const [error, setError] = useState(false);

  const [resetPassword, { data }] = useMutation(RESET_PASSWORD);

  const validatePassword = async () => {
    if (newPassRef.current.value !== cnfPassRef.current.value)
      return setError(true);

    setError(false);
    resetPassword({
      variables: {
        old: currPassRef.current.value,
        new: newPassRef.current.value
      }
    });
  };

  if (data && data.resetPassword) {
    data.resetPassword = false;
    setActive(false);
  }

  return (
    <div className="dv_per_service_wrapper">
      <SectionHeading
        title="Reset Password"
        active={active}
        setActive={setActive}
        changed={true}
        onSubmit={validatePassword}
      />
      {active && (
        <Row className="p-3">
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Current Password </label>
              <FormControl
                type="Password"
                className="dv_all_inputs"
                placeholder="****"
                ref={currPassRef}
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>New Password </label>
              <FormControl
                type="Password"
                className="dv_all_inputs"
                placeholder="****"
                ref={newPassRef}
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Retype New Password </label>
              <FormControl
                type="Password"
                className="dv_all_inputs"
                placeholder="****"
                ref={cnfPassRef}
                isInvalid={error}
              />
              <FormControl.Feedback type="invalid">
                Passwords do not match
              </FormControl.Feedback>
            </FormGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

ResetPassword.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
};

export default ResetPassword;
