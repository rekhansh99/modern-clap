import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { FormControl } from 'react-bootstrap';
import Loading from './Loading';

import { setActiveBusiness } from '../../app/cache';

const GET_PROVIDER = gql`
  query {
    provider {
      businesses {
        _id
        shopName
      }
    }
  }
`;

const GET_ACTIVE_BUSINESS = gql`
  query {
    activeBusiness @client
  }
`;

const SwitchBusiness = () => {
  const provider = useQuery(GET_PROVIDER);
  const activeBusiness = useQuery(GET_ACTIVE_BUSINESS);

  if (provider.loading || activeBusiness.loading) return <Loading />;
  if (provider.error) return 'An error occured!';

  const options = provider.data.provider.businesses;

  let currBusiness = activeBusiness.data.activeBusiness;
  if (currBusiness === '') {
    setActiveBusiness(options[0]._id);
  }

  let title = '';
  const optionsJSX = options.map(option => {
    if (option._id === currBusiness) title = option.shopName;
    return (
      <option key={option._id} value={option._id}>
        {option.shopName}
      </option>
    );
  });

  return (
    <div className="dv_switch_to_another_business">
      {title}
      <FormControl
        as="select"
        className="dv_all_inputs"
        value={currBusiness}
        onChange={e => setActiveBusiness(e.target.value)}
      >
        {optionsJSX}
      </FormControl>
    </div>
  );
};

export default SwitchBusiness;
