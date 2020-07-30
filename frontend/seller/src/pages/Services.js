import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import ServicesTable from '../components/Services/ServicesTable';

const GET_SERVICES = gql`
  query Services($id: ID!) {
    provider(id: $id) {
      businessCategories {
        name
        type {
          name
        }
        services {
          _id
          name
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

const Services = () => {
  document.title = 'Services - Modernclap';

  const { loading, error, data: getServicesData } = useQuery(GET_SERVICES, {
    variables: {
      id: '5f198e857ae7adef1dc89c86'
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occured!</p>;

  let services = [];
  for (let category of getServicesData.provider.businessCategories) {
    for (let service of category.services) {
      services.push({
        id: service._id,
        name: service.name,
        category: category.name,
        type: category.type.name
      });
    }
  }
  services = services.map(service => ({
    ...service,
    ...getServicesData.provider.services.find(s => s.serviceiId === service._id)
  }));

  return (
    <Container fluid>
      <SwitchBusiness
        title="Goodhand Transaction LLC"
        options={[
          'Change',
          'Orville Real Estate',
          'Lightspeed General Trading',
          'Alahsa Stone',
          'TOG'
        ]}
      />
      <h1 className="mt-4 dv_page_heading">Services</h1>
      <Card className="mb-4">
        <Card.Header>
          Services
          <Link to="/services/add" className="add_new_button">
            add new
          </Link>
        </Card.Header>
        <Card.Body className="p-0">
          <ServicesTable services={services} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Services;
