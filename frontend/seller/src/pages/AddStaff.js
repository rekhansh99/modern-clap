import React, { useState } from 'react';

import {
  Container,
  Card,
  Row,
  Col,
  FormControl,
  Alert,
  Table,
  FormCheck,
  FormGroup,
  FormFile,
  Button
} from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import { Link } from 'react-router-dom';
import NumberCard from '../components/common/NumberCard';
import BasicDetails from '../components/AddStaff/BasicDetails';

const AddStaff = () => {
  document.title = 'Add Staff - Modernclap';

  const averageRating = 4.5;
  const toolsRating = 4.5;
  const workRating = 4.5;
  const behaviourRating = 4.5;

  const [basicDetails, setBasicDetails] = useState({
    title: 'Mr',
    firstName: '',
    lastName: '',
    mobile: '',
    profession: ''
  });

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

      <h1 className="mt-4 dv_page_heading">Staff </h1>
      <Card className="mb-4">
        <Card.Header>
          Staff Details
          <Link
            to="/staffs"
            style={{
              background: '#007bff',
              color: '#ffffff',
              textTransform: 'uppercase',
              padding: '5px',
              fontSize: '12px',
              borderRadius: '5px',
              float: 'right',
              position: 'absolute',
              right: '10px',
              top: '10px'
            }}
          >
            View all
          </Link>
        </Card.Header>
        <Card.Body className="p-0">
          <div className="dv_per_service_wrapper">
            <h4 className="view_request_title">Performance</h4>
            <Row className="p-3">
              <Col xl={3} md={6} xs={12}>
                <NumberCard title="Average Rating" value={averageRating} />
              </Col>
              <Col xl={3} md={6} xs={12}>
                <NumberCard title="Tools Rating" value={toolsRating} />
              </Col>
              <Col xl={3} md={6} xs={12}>
                <NumberCard title="Work Rating" value={workRating} />
              </Col>
              <Col xl={3} md={6} xs={12}>
                <NumberCard title="Behaviour Rating" value={behaviourRating} />
              </Col>
            </Row>
          </div>
          <BasicDetails
            {...basicDetails}
            onChange={input => setBasicDetails({ ...basicDetails, ...input })}
          />
          <div className="dv_per_service_wrapper">
            <h4 className="view_request_title">User Permission</h4>
            <Row className="p-3">
              <Col md={12}>
                <Alert variant="warning" className="m-0">
                  <strong>Note : </strong> Users can see business access pages
                  in their account by read only and edit.
                </Alert>
              </Col>
            </Row>
            <Row>
              <Table>
                <thead>
                  <tr>
                    <th className="pl-4">Page access </th>
                    <th>view only </th>
                    <th>Edit </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pl-4 text-capitalize">dashboard </td>
                    <td>
                      <FormCheck custom id="viewdashboard">
                        <FormCheck.Input defaultChecked />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                    <td>
                      <FormCheck custom id="editdashboard">
                        <FormCheck.Input defaultChecked />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">notifiaction </td>
                    <td>
                      <FormCheck custom id="viewnotification">
                        <FormCheck.Input defaultChecked />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                    <td>
                      <FormCheck custom id="editnotification">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">inbox </td>
                    <td>
                      <FormCheck custom id="viewinbox">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                    <td>
                      <FormCheck custom id="editinbox">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">request list </td>
                    <td>
                      <FormCheck custom id="viewrequests">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                    <td>
                      <FormCheck custom id="editrequests">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">accepted request </td>
                    <td>
                      <FormCheck custom id="viewacceptedrequests">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                    <td>
                      <FormCheck custom id="editacceptedrequests">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">service </td>
                    <td>
                      <FormCheck custom id="viewservices">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                    <td>
                      <FormCheck custom id="editservices">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">staff </td>
                    <td>
                      <FormCheck custom id="viewstaffs">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                    <td>
                      <FormCheck custom id="editstaffs">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">Sale </td>
                    <td>
                      <FormCheck custom id="viewsale">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                    <td>
                      <FormCheck custom id="editsale">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">review </td>
                    <td>
                      <FormCheck custom id="viewreviews">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                    <td>
                      <FormCheck custom id="editreviews">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">setting </td>
                    <td>
                      <FormCheck custom id="viewsettings">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                    <td>
                      <FormCheck custom id="editsettings">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </div>
          <div className="dv_per_service_wrapper">
            <h4 className="view_request_title">Account Details</h4>
            <Row className="p-3">
              <Col md={12}>
                <Alert variant="warning">
                  <strong>Note : </strong> Using there credentials you can login
                  your account.
                </Alert>
              </Col>
              <Col lg={4} xs={12}>
                <FormGroup>
                  <label>Email ID </label>
                  <FormControl
                    type="text"
                    className="dv_all_inputs"
                    placeholder="Enter"
                  />
                </FormGroup>
              </Col>
              <Col lg={4} xs={12}>
                <FormGroup>
                  <label>Password </label>
                  <FormControl
                    type="Password"
                    className="dv_all_inputs"
                    placeholder="Enter"
                  />
                </FormGroup>
              </Col>
              <Col lg={4} xs={12}>
                <FormGroup>
                  <label>Re-enter Password </label>
                  <FormControl
                    type="Password"
                    className="dv_all_inputs"
                    placeholder="Enter"
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
          <div className="dv_per_service_wrapper">
            <h4 className="view_request_title">Certification</h4>
            <Row className="p-3">
              <Col md={12}>
                <Alert variant="warning">
                  <strong>Note : </strong> After submitting certificate you will
                  get certified badge within 1 week in working days.
                </Alert>
              </Col>
              <Col lg={4} xs={12}>
                <label>Profession Certificate 1 </label>
                <FormFile custom id="cert1">
                  <FormFile.Input />
                  <FormFile.Label>Choose file</FormFile.Label>
                </FormFile>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                  <li
                    style={{ display: 'inline-block', margin: 0, padding: 0 }}
                  >
                    <Link to="#!">Download</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={4} xs={12}>
                <label>Profession Certificate 2 </label>
                <FormFile custom id="cert2">
                  <FormFile.Input />
                  <FormFile.Label>Choose file</FormFile.Label>
                </FormFile>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                  <li
                    style={{ display: 'inline-block', margin: 0, padding: 0 }}
                  >
                    <Link to="#!">Download</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={4} xs={12}>
                <label>Profession Certificate 3 </label>
                <FormFile custom id="cert3">
                  <FormFile.Input />
                  <FormFile.Label>Choose file</FormFile.Label>
                </FormFile>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                  <li
                    style={{ display: 'inline-block', margin: 0, padding: 0 }}
                  >
                    <Link to="#!">Download</Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <div className="dv_per_service_wrapper">
            <h4 className="view_request_title">Add to other business also</h4>
            <Row>
              <Table>
                <thead>
                  <tr>
                    <th className="pl-4">Page access </th>
                    <th>also add to </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pl-4 text-capitalize">cleaners </td>
                    <td>
                      <FormCheck custom id="cleaners">
                        <FormCheck.Input defaultChecked />
                        <FormCheck.Label>Default</FormCheck.Label>
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">online fitness </td>
                    <td>
                      <FormCheck custom id="onlinefitness">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">Ladies Salon </td>
                    <td>
                      <FormCheck custom id="ladiessalon">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">gents salon </td>
                    <td>
                      <FormCheck custom id="gentssalon">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">deep cleaning </td>
                    <td>
                      <FormCheck custom id="deepcleaning">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">handyman </td>
                    <td>
                      <FormCheck custom id="handyman">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">AC technician </td>
                    <td>
                      <FormCheck custom id="actech">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 text-capitalize">painters </td>
                    <td>
                      <FormCheck custom id="painters">
                        <FormCheck.Input />
                        <FormCheck.Label />
                      </FormCheck>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </div>
        </Card.Body>
      </Card>
      <Col md={12} className="text-center mb-4">
        <Button variant="primary">Save Details </Button>
      </Col>
    </Container>
  );
};

export default AddStaff;
