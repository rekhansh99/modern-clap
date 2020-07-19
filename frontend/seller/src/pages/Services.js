import React from 'react';
import { Link } from 'react-router-dom';
import { MoreVertical } from 'react-feather';
import { Container, Row, Col, Card, Table, Dropdown } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import Search from '../components/common/Search';
import Pagination from '../components/common/Pagination';

const Services = () => {
  document.title = 'Services - Modernclap';

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
      <h1 className="mt-4 dv_page_heading" id="myBtn">
        Services
      </h1>
      <Row>
        <Col xs={12}>
          <Card className="mb-4">
            <Card.Header>
              Services
              <Link
                to="/services/add"
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
                add new
              </Link>
            </Card.Header>
            <Card.Body className="p-0">
              <Search />
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
                  <tr>
                    <td>Cleaners</td>
                    <td>deep cleaning </td>
                    <td>kitchen deep cleaning </td>
                    <td>
                      <div className="dv_status_in_list">
                        <label className="form-switch">
                          <input type="checkbox" defaultChecked />
                          <i />
                        </label>
                      </div>
                    </td>
                    <td>AED 120 </td>
                    <Dropdown as="td">
                      <Dropdown.Toggle as="a" className="dv_everytable_action">
                        <MoreVertical />
                      </Dropdown.Toggle>
                      <Dropdown.Menu alignRight>
                        <Dropdown.Item as={Link} to="/services/add">
                          Edit
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </tr>
                  <tr>
                    <td>Cleaners</td>
                    <td>deep cleaning </td>
                    <td>kitchen deep cleaning </td>
                    <td>
                      <div className="dv_status_in_list">
                        <label className="form-switch">
                          <input type="checkbox" defaultChecked />
                          <i />
                        </label>
                      </div>
                    </td>
                    <td>AED 120 </td>
                    <Dropdown as="td">
                      <Dropdown.Toggle as="a" className="dv_everytable_action">
                        <MoreVertical />
                      </Dropdown.Toggle>
                      <Dropdown.Menu alignRight>
                        <Dropdown.Item as={Link} to="/services/add">
                          Edit
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </tr>
                  <tr>
                    <td>Cleaners</td>
                    <td>deep cleaning </td>
                    <td>kitchen deep cleaning </td>
                    <td>
                      <div className="dv_status_in_list">
                        <label className="form-switch">
                          <input type="checkbox" defaultChecked />
                          <i />
                        </label>
                      </div>
                    </td>
                    <td>AED 120 </td>
                    <Dropdown as="td">
                      <Dropdown.Toggle as="a" className="dv_everytable_action">
                        <MoreVertical />
                      </Dropdown.Toggle>
                      <Dropdown.Menu alignRight>
                        <Dropdown.Item as={Link} to="/services/add">
                          Edit
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </tr>
                  <tr>
                    <td>Cleaners</td>
                    <td>deep cleaning </td>
                    <td>kitchen deep cleaning </td>
                    <td>
                      <div className="dv_status_in_list">
                        <label className="form-switch">
                          <input type="checkbox" defaultChecked />
                          <i />
                        </label>
                      </div>
                    </td>
                    <td>AED 120 </td>
                    <Dropdown as="td">
                      <Dropdown.Toggle as="a" className="dv_everytable_action">
                        <MoreVertical />
                      </Dropdown.Toggle>
                      <Dropdown.Menu alignRight>
                        <Dropdown.Item as={Link} to="/services/add">
                          Edit
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </tr>
                  <tr>
                    <td>Cleaners</td>
                    <td>deep cleaning </td>
                    <td>kitchen deep cleaning </td>
                    <td>
                      <div className="dv_status_in_list">
                        <label className="form-switch">
                          <input type="checkbox" />
                          <i />
                        </label>
                      </div>
                    </td>
                    <td>AED 120 </td>
                    <Dropdown as="td">
                      <Dropdown.Toggle as="a" className="dv_everytable_action">
                        <MoreVertical />
                      </Dropdown.Toggle>
                      <Dropdown.Menu alignRight>
                        <Dropdown.Item as={Link} to="/services/add">
                          Edit
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </tr>
                </tbody>
              </Table>
              <Pagination />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
