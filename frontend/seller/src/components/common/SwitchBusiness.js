import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { FormControl } from 'react-bootstrap';
import Loading from './Loading';

import { activeBusiness } from '../../app/cache';

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

const SwitchBusiness = () => {
  const { loading, error, data } = useQuery(GET_PROVIDER);
  
  if (loading) return <Loading />;
  if (error) return 'An error occured!';
  
  const options = data.provider.businesses;
  
  let currBusiness = activeBusiness();
  if (currBusiness === '') {
    activeBusiness(options[0]._id);
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
        onChange={e => activeBusiness(e.target.value)}
      >
        {optionsJSX}
      </FormControl>
    </div>
  );
};

export default SwitchBusiness;
