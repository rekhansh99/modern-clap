import React from 'react';

import { Codepen, MoreVertical } from 'react-feather';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NumberCard from '../components/common/NumberCard';
import SwitchBusiness from '../components/common/SwitchBusiness';
import Pagination from '../components/common/Pagination';

const Dashboard = () => {
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
        Dashboard
      </h1>
      <Row>
        <Col xs={12} md={6} xl={3}>
          <NumberCard
            title="Total Appointments"
            value="21"
            icon={<Codepen />}
          />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard
            title="Total Appointments"
            value="21"
            icon={<Codepen />}
          />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard
            title="Total Appointments"
            value="21"
            icon={<Codepen />}
          />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard
            title="Total Appointments"
            value="21"
            icon={<Codepen />}
          />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard
            title="Total Appointments"
            value="21"
            icon={<Codepen />}
          />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard
            title="Total Appointments"
            value="21"
            icon={<Codepen />}
          />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard
            title="Total Appointments"
            value="21"
            icon={<Codepen />}
          />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard
            title="Total Appointments"
            value="21"
            icon={<Codepen />}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Card className="mb-4">
            <Card.Header>
              <FontAwesomeIcon icon="chart-area" className="mr-1" />
              Current week Bookings
            </Card.Header>
            <Card.Body>Area Chart Here</Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Card className="mb-4">
            <Card.Header>
              <FontAwesomeIcon icon="table" className="mr-1" />
              Latest Bookings
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table
                  className="table"
                  id="dataTable"
                  width="100%"
                  cellSpacing={0}
                >
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
                      <td>
                        <a
                          className="dv_everytable_action dropdown-toggle"
                          id="userDropdown"
                          href="#!"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <MoreVertical />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="userDropdown"
                        >
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                        </div>
                      </td>
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
                      <td>
                        <a
                          className="dv_everytable_action dropdown-toggle"
                          id="userDropdown"
                          href="#!"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <MoreVertical />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="userDropdown"
                        >
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Pagination />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
