import React from 'react';

import { Link } from 'react-router-dom';
import { MoreVertical } from 'react-feather';
import { Container, Row, Col, Card, Table, Dropdown } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import Search from '../components/common/Search';
import Pagination from '../components/common/Pagination';

const AcceptedRequests = () => {
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
      <h1 className="mt-4 dv_page_heading">Accepted Requests</h1>
      <Row>
        <Col xs={12}>
          <Card className="mb-4">
            <Card.Header>Accepted all Bookings</Card.Header>
            <Card.Body className="p-0">
              <Search />
              <Table responsive width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                    <th>date </th>
                    <th>Ref No </th>
                    <th>customer </th>
                    <th>booking </th>
                    <th>pay. type </th>
                    <th>pay. status </th>
                    <th>amount </th>
                    <th>action </th>
                  </tr>
                  <tr>
                    <th />
                    <th />
                    <th />
                    <th />
                    <th />
                    <th />
                    <th>AED 1245 </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12/12/2020</td>
                    <td>
                      <Link to="#!">MD12345</Link>
                    </td>
                    <td>sarika kadam </td>
                    <td>
                      <span
                        style={{
                          textTransform: 'capitalize',
                          color: 'green'
                        }}
                      >
                        completed
                      </span>
                    </td>
                    <td>
                      <span>cash </span>
                    </td>
                    <td>
                      <span
                        style={{
                          textTransform: 'capitalize',
                          color: 'green'
                        }}
                      >
                        successful
                      </span>
                    </td>
                    <td>AED 120 </td>
                    <Dropdown as="td">
                      <Dropdown.Toggle as="a" className="dv_everytable_action">
                        <MoreVertical />
                      </Dropdown.Toggle>
                      <Dropdown.Menu alignRight>
                        <Dropdown.Item as={Link} to="#!">
                          View
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="#!">
                          Chat
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </tr>
                  <tr>
                    <td>12/12/2020</td>
                    <td>
                      <Link to="#!">MD12345</Link>
                    </td>
                    <td>sarika kadam </td>
                    <td>
                      <span
                        style={{ textTransform: 'capitalize', color: 'red' }}
                      >
                        cancelled
                      </span>
                    </td>
                    <td>
                      <span>cash </span>
                    </td>
                    <td>
                      <span
                        style={{
                          textTransform: 'capitalize',
                          color: 'green'
                        }}
                      >
                        cancelled
                      </span>
                    </td>
                    <td>AED 120 </td>
                    <Dropdown as="td">
                      <Dropdown.Toggle as="a" className="dv_everytable_action">
                        <MoreVertical />
                      </Dropdown.Toggle>
                      <Dropdown.Menu alignRight>
                        <Dropdown.Item as={Link} to="#!">
                          View
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="#!">
                          Chat
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </tr>
                  <tr>
                    <td>12/12/2020</td>
                    <td>
                      <Link to="#!">MD12345</Link>
                    </td>
                    <td>sarika kadam </td>
                    <td>
                      <span
                        style={{
                          textTransform: 'capitalize',
                          color: 'green'
                        }}
                      >
                        resheduled
                      </span>
                    </td>
                    <td>
                      <span>cash </span>
                    </td>
                    <td>
                      <span
                        style={{
                          textTransform: 'capitalize',
                          color: '#ff9800'
                        }}
                      >
                        pending
                      </span>
                    </td>
                    <td>AED 120 </td>
                    <Dropdown as="td">
                      <Dropdown.Toggle as="a" className="dv_everytable_action">
                        <MoreVertical />
                      </Dropdown.Toggle>
                      <Dropdown.Menu alignRight>
                        <Dropdown.Item as={Link} to="#!">
                          View
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="#!">
                          Chat
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

export default AcceptedRequests;
