import React from 'react';

import { Container, Card } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import AccountDetails from '../components/Settings/AccountDetails';
import ShopDetails from '../components/Settings/ShopDetails';
import WorkingHours from '../components/Settings/WorkingHours';
import Address from '../components/Settings/Address';
import Media from '../components/Settings/Media';
import ResetPassword from '../components/Settings/ResetPassword';
import CategoryRequestForm from '../components/Settings/CategoryRequestForm';

const Settings = () => {
  document.title = 'Settings - Modernclap';

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
      <h1 className="mt-4 dv_page_heading">Settings</h1>
      <Card className="mb-4">
        <Card.Header>Profile</Card.Header>
        <Card.Body className="p-0">
          <AccountDetails />
          <ShopDetails />
          <WorkingHours />
          <Address />
          <Media />
          <ResetPassword />
          <CategoryRequestForm />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Settings;
