import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Link } from 'react-router-dom';
import { Table, Dropdown } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

import Search from '../common/Search';
import Loading from '../common/Loading';

const GET_SERVICES = gql`
  query Services($business: ID!) {
    business(id: $business) {
      type {
        name
        categories {
          name
          services {
            _id
            name
          }
        }
      }
      services {
        serviceId
        active
        salePrice
      }
    }
  }
`;

// const UPDATE_BUSINESS = gql`
//   mutation {

//   }
// `;

const ServicesTable = () => {
  const { loading, error, data } = useQuery(GET_SERVICES, {
    variables: {
      business: '5f26a44bd129a3a8d95e109e'
    }
  });

  if (loading) return <Loading />;
  if (error) return 'An error occured!';

  let services = [];
  for (let category of data.business.type.categories) {
    for (let service of category.services) {
      services.push({
        id: service._id,
        name: service.name,
        category: category.name,
        type: data.business.type.name
      });
    }
  }
  services = services.map(service => ({
    ...service,
    ...data.business.services.find(s => s.serviceiId === service._id)
  }));

  const setActive = async e => {
    console.log(e.target.name);
    console.log(e.target.checked);
  };

  return (
    <>
      <Search noLimit />
      <Table width="100%" cellSpacing={0} responsive>
        <thead>
          <tr>
            <th>Type </th>
            <th>category </th>
            <th>service </th>
            <th>active </th>
            <th>amount </th>
            <th>action </th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.type}</td>
              <td>{service.category}</td>
              <td>{service.name}</td>
              <td>
                <div className="dv_status_in_list">
                  <label className="form-switch">
                    <input
                      type="checkbox"
                      name={service.id}
                      defaultChecked={service.active}
                      onChange={setActive}
                    />
                    <i />
                  </label>
                </div>
              </td>
              <td>AED {service.price || 10}</td>
              <Dropdown as="td">
                <Dropdown.Toggle as="a" className="dv_everytable_action">
                  <MoreVertical />
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                  <Dropdown.Item as={Link} to={'/services/' + service.id}>
                    Edit
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ServicesTable;
