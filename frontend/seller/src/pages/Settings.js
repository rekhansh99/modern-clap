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

const GET_ACTIVE_BUSINESS = gql`
  query {
    activeBusiness @client
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
    business(id: $id) {
      country
      shopName
    }
  }
`;

const Settings = () => {
  document.title = 'Settings - Modernclap';

  const { data: activeBusinessData } = useQuery(GET_ACTIVE_BUSINESS);

  // if (activeBusinessLoading) return <Loading />;

  const { data: getBusinessData, loading: getBusinessLoading } = useQuery(
    GET_BUSINESS,
    {
      variables: {
        id: activeBusinessData.activeBusiness
      }
    }
  );
  const { data: getProviderData, loading: getProviderLoading } = useQuery(
    GET_PROVIDER
  );
  console.log(getProviderData);
  console.log(getBusinessData);
  const [updateProvider, { loading: updateProviderLoading }] = useMutation(
    UPDATE_PROVIDER
  );
  const [settings, setSettings] = useState({});
  const [activeSection, setActiveSection] = useState('');
  const [changed, setChanged] = useState(false);

  const provider = getProviderData && getProviderData.provider;
  const business = getBusinessData && getBusinessData.business;

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

  // console.log(getBusinessLoading, getProviderLoading, updateProviderLoading);
  // console.log(settings);
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
      {(getProviderLoading || getBusinessLoading || updateProviderLoading) && (
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
