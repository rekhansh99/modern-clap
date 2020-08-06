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
      _id
    }
  }
`;

const UPDATE_BUSINESS = gql`
  mutation UpdateBusiness($id: String!, $newData: UpdateBusinessInput!) {
    updateBusiness(id: $id, newData: $newData) {
      _id
    }
  }
`;

const GET_PROVIDER_AND_BUSINESS = gql`
  query GetProviderAndBusiness($id: ID!) {
    provider {
      ownerName
      ownerPhone
      ownerPhoneVerified
      ownerEmail
      ownerEmailVerified
      ownerMobile
      ownerMobileVerified
      country
    }

    activeBusiness @client @export(as: "id")

    business(id: $id) {
      shopName
      type {
        _id
        name
      }
      tradeLicenseNo
      tradeLicenseDate
      tradeLicenseDoc
      contactPersonName
      contactPersonMobile
      businessHours {
        open {
          mon
          tue
          wed
          thu
          fri
          sat
          sun
        }
        close {
          mon
          tue
          wed
          thu
          fri
          sat
          sun
        }
      }
      city
      pincode
      address
      state
    }
  }
`;

const Settings = () => {
  document.title = 'Settings - Modernclap';

  const query = useQuery(GET_PROVIDER_AND_BUSINESS);

  const [updateProvider, { loading: providerLoading }] = useMutation(
    UPDATE_PROVIDER
  );

  const [updateBusiness, { loading: businessLoading }] = useMutation(
    UPDATE_BUSINESS
  );

  const [settings, setSettings] = useState({});
  const [activeSection, setActiveSection] = useState('');
  const [changed, setChanged] = useState(false);

  const provider = query.data && query.data.provider;
  const business = query.data && query.data.business;

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

  const updateProviderWrapper = newData => {
    return updateProvider({
      variables: {
        newData
      }
    });
  };

  const updateBusinessWrapper = newData => {
    console.log(newData, query.data.activeBusiness);
    return updateBusiness({
      variables: {
        newData,
        id: query.data.activeBusiness
      }
    })
  };

  return (
    <Container fluid>
      {(query.loading || providerLoading || businessLoading) && <Loading />}
      <SwitchBusiness />
      <h1 className="mt-4 dv_page_heading">Settings</h1>
      <Card className="mb-4">
        <Card.Header>Profile</Card.Header>
        <Card.Body className="p-0">
          <Form>
            <AccountDetails
              setActive={bool => setActiveSection(bool ? 'accountDetails' : '')}
              active={activeSection === 'accountDetails'}
              onSubmit={updateProviderWrapper}
              settings={settings}
              setSettings={newSettings =>
                setSettings({ ...settings, ...newSettings })
              }
              changed={changed}
              setChanged={setChanged}
            />
            <ShopDetails
              setActive={bool => setActiveSection(bool ? 'shopDetails' : '')}
              active={activeSection === 'shopDetails'}
              onSubmit={updateBusinessWrapper}
              settings={settings}
              setSettings={newSettings =>
                setSettings({ ...settings, ...newSettings })
              }
              changed={changed}
              setChanged={setChanged}
            />
            <WorkingHours
              setActive={bool => setActiveSection(bool ? 'workingHours' : '')}
              active={activeSection === 'workingHours'}
              onSubmit={updateBusinessWrapper}
              settings={settings}
              setSettings={newSettings =>
                setSettings({ ...settings, ...newSettings })
              }
              changed={changed}
              setChanged={setChanged}
            />
            <Address
              setActive={bool => setActiveSection(bool ? 'address' : '')}
              active={activeSection === 'address'}
              onSubmit={updateBusinessWrapper}
              settings={settings}
              setSettings={newSettings =>
                setSettings({ ...settings, ...newSettings })
              }
              changed={changed}
              setChanged={setChanged}
            />
            <Media
              setActive={bool => setActiveSection(bool ? 'media' : '')}
              active={activeSection === 'media'}
              settings={settings}
            />
            <ResetPassword
              setActive={bool => setActiveSection(bool ? 'resetPassword' : '')}
              active={activeSection === 'resetPassword'}
            />
          </Form>
          <CategoryRequestForm
            setActive={bool =>
              setActiveSection(bool ? 'categoryRequestForm' : '')
            }
            active={activeSection === 'categoryRequestForm'}
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Settings;
