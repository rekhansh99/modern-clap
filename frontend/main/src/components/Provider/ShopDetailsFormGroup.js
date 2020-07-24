import React from 'react';
import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';

import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';

const CATEROGIES = gql`
  query GetCategories {
    categories {
      _id
      name
    }
  }
`;

const ShopDetailsFormGroup = ({ isOpen }) => {
  const { loading, data } = useQuery(CATEROGIES);

  return (
    <FormGroup style={{ display: isOpen ? 'block' : 'none' }}>
      <FormControl
        as="select"
        className="dv_careers_form_input"
        name="businessCategory"
        defaultValue="null"
        required
      >
        <option value="null" hidden disabled>
          Business Category
        </option>
        {!loading &&
          data &&
          data.categories.map((category, index) => (
            <option key={index} value={category._id}>
              {category.name}
            </option>
          ))}
      </FormControl>
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Shop Name"
        name="shopName"
        required
      />
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Contact Person (optional)"
        name="contactPersonName"
      />
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Contact No (optional)"
        name="contactPersonMobile"
      />
      <FormControl
        as="select"
        className="dv_careers_form_input"
        name="city"
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
        required
      />
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Area"
        name="area"
        required
      />
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="P.O Box "
        name="pincode"
        required
      />
    </FormGroup>
  );
};

ShopDetailsFormGroup.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default ShopDetailsFormGroup;
