import React, { useState, useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

import { Container, Card, Form } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import AccountDetails from '../components/Settings/AccountDetails';
import ShopDetails from '../components/Settings/ShopDetails';
import WorkingHours from '../components/Settings/WorkingHours';
import Address from '../components/Settings/Address';
import Media from '../components/Settings/Media';
import ResetPassword from '../components/Settings/ResetPassword';
import CategoryRequestForm from '../components/common/CategoryRequestForm';
import Loading from '../components/common/Loading';

const UPDATE_PROVIDER = gql`
  mutation UpdateProvider($newData: UpdateProviderInput) {
    updateProvider(newData: $newData) {
      __typename
    }
  }
`;

const GET_PROVIDER = gql`
  query {
    provider {
      ownerName
      ownerPhone
      ownerEmail
      ownerMobile
    }
  }
`;

const GET_BUSINESS = gql`
  query GetBusiness($id: ID!) {
    activeBusiness @client @export(as: "id")
    business(id: $id) {
      country
      shopName
    }
  }
`;

const Settings = () => {
  document.title = 'Settings - Modernclap';

  const providerQuery = useQuery(GET_PROVIDER);
  const businessQuery = useQuery(GET_BUSINESS);

  // if (activeBusinessLoading) return <Loading />;

  console.log(providerQuery.data);
  console.log(businessQuery.data);
  const [updateProvider, { loading: providerLoading }] = useMutation(
    UPDATE_PROVIDER
  );
  const [settings, setSettings] = useState({});
  const [activeSection, setActiveSection] = useState('');
  const [changed, setChanged] = useState(false);

  const provider = providerQuery.data && providerQuery.data.provider;
  const business = businessQuery.data && businessQuery.data.business;

  useEffect(() => {
    setChanged(true);
  }, [settings]);

  useEffect(() => {
    setChanged(false);
  }, [activeSection]);

  useEffect(() => {
    if (provider && business) {
      setSettings({
        ...provider,
        ...business
      });
    }
  }, [provider, business]);

  const onSaveSettings = async settingsList => {
    try {
      let newData = {};
      for (let setting of settingsList) {
        newData[setting] = settings[setting];
      }
      await updateProvider({
        variables: { newData }
      });
      setChanged(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid>
      {(providerQuery.loading || businessQuery.loading || providerLoading) && (
        <Loading />
      )}
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
          <Form>
            <AccountDetails
              setActive={setActiveSection}
              active={activeSection === 'accountDetails'}
              onSubmit={onSaveSettings}
              settings={settings}
              setSettings={newSettings =>
                setSettings({ ...settings, ...newSettings })
              }
              changed={changed}
            />
            <ShopDetails
              setActive={setActiveSection}
              active={activeSection === 'shopDetails'}
            />
            <WorkingHours
              setActive={setActiveSection}
              active={activeSection === 'workingHours'}
            />
            <Address
              setActive={setActiveSection}
              active={activeSection === 'address'}
              onSubmit={onSaveSettings}
              settings={settings}
              setSettings={newSettings =>
                setSettings({ ...settings, ...newSettings })
              }
              changed={changed}
            />
            <Media
              setActive={setActiveSection}
              active={activeSection === 'media'}
            />
            <ResetPassword
              setActive={setActiveSection}
              active={activeSection === 'resetPassword'}
            />
          </Form>
          <CategoryRequestForm
            setActive={setActiveSection}
            active={activeSection === 'categoryRequestForm'}
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Settings;
