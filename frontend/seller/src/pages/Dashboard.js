import React from 'react';

import { Link } from 'react-router-dom';
import { MoreVertical } from 'react-feather';
import { Container, Row, Col, Card, Table, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NumberCard from '../components/common/NumberCard';
import SwitchBusiness from '../components/common/SwitchBusiness';
import Pagination from '../components/common/Pagination';
import Search from '../components/common/Search';
import AreaChart from '../components/Dashboard/AreaChart';

const Dashboard = () => {
  document.title = 'Dashboard - Modernclap';

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
      <h1 className="mt-4 dv_page_heading">Dashboard</h1>
      <Row>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Total Appointments" value={21} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Total Appointments" value={21} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Total Appointments" value={21} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Total Appointments" value={21} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Total Appointments" value={21} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Total Appointments" value={21} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Total Appointments" value={21} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Total Appointments" value={21} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Card className="mb-4">
            <Card.Header>
              <FontAwesomeIcon icon="chart-area" className="mr-1" />
              Current week Bookings
            </Card.Header>
            <Card.Body>
              <AreaChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Card className="mb-4">
            <Card.Header>
              <FontAwesomeIcon icon="table" className="mr-1" />
              Latest Bookings
            </Card.Header>
            <Card.Body className="p-0">
              <Search />
              <Table id="dataTable" width="100%" cellSpacing={0} responsive>
                <thead>
                  <tr>
                    <th>request no </th>
                    <th>Customer </th>
                    <th>Service</th>
                    <th>Location</th>
                    <th>Amount</th>
                    <th>status</th>
                    <th>action</th>
                  </tr>
                  <tr>
                    <th>1542 </th>
                    <th />
                    <th />
                    <th />
                    <th>AED 12,024 </th>
                    <th> </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MD542154</td>
                    <td>sanjay sakpal </td>
                    <td>waxing</td>
                    <td>al rigga </td>
                    <td>AED 450 </td>
                    <td>
                      <span style={{ color: 'red' }}>pending</span>
                    </td>
                    <Dropdown as="td">
                      <Dropdown.Toggle as="a" className="dv_everytable_action">
                        <MoreVertical />
                      </Dropdown.Toggle>
                      <Dropdown.Menu alignRight>
                        <Dropdown.Item
                          as={Link}
                          className="dropdown-item"
                          to="/request/MD542154"
                        >
                          View
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </tr>
                  <tr>
                    <td>MD542154</td>
                    <td>sanjay sakpal </td>
                    <td>waxing</td>
                    <td>al rigga </td>
                    <td>AED 450 </td>
                    <td>
                      <span style={{ color: 'green' }}>completed</span>
                    </td>
                    <Dropdown as="td">
                      <Dropdown.Toggle as="a" className="dv_everytable_action">
                        <MoreVertical />
                      </Dropdown.Toggle>
                      <Dropdown.Menu alignRight>
                        <Dropdown.Item as={Link} to="/request/MD542154">
                          View
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

export default Dashboard;
