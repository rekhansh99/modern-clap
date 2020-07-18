import React from 'react';

import { MoreVertical, Search, ChevronLeft, ChevronRight } from 'react-feather';
import { Container, Row, Col, Card } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';

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
      <h1 className="mt-4 dv_page_heading" id="myBtn">
        Accepted Requests
      </h1>
      <Row>
        <Col xs={12}>
          <Card className="mb-4">
            <Card.Header>Accepted all Bookings</Card.Header>
            <Card.Body>
              <div className="dv_search_input_for_all">
                <Search />
                <input
                  type="text"
                  name
                  placeholder="Search"
                  className="dv_search_anything_tbl"
                />
                <select className="form-control">
                  <option>10 </option>
                  <option>25</option>
                  <option>50 </option>
                  <option>100 </option>
                </select>
              </div>
              <div className="table-responsive">
                <table className="table" width="100%" cellSpacing={0}>
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
                        <a href="#!">MD12345</a>
                      </td>
                      <td>sarika kadam </td>
                      <td>
                        <span
                          style={{
                            textTransform: 'capitalize',
                            color: 'green'
                          }}
                        >
                          completed{' '}
                        </span>{' '}
                      </td>
                      <td>
                        <span>cash </span>{' '}
                      </td>
                      <td>
                        <span
                          style={{
                            textTransform: 'capitalize',
                            color: 'green'
                          }}
                        >
                          successful{' '}
                        </span>{' '}
                      </td>
                      <td>AED 120 </td>
                      <td>
                        <a
                          className="dv_everytable_action dropdown-toggle"
                          id="userDropdown"
                          href="#"
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
                          <a className="dropdown-item" href="#">
                            View{' '}
                          </a>
                          <a className="dropdown-item" href="#">
                            Chat{' '}
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>12/12/2020</td>
                      <td>
                        <a href="#!">MD12345</a>
                      </td>
                      <td>sarika kadam </td>
                      <td>
                        <span
                          style={{ textTransform: 'capitalize', color: 'red' }}
                        >
                          cancelled{' '}
                        </span>{' '}
                      </td>
                      <td>
                        <span>cash </span>{' '}
                      </td>
                      <td>
                        <span
                          style={{
                            textTransform: 'capitalize',
                            color: 'green'
                          }}
                        >
                          cancelled{' '}
                        </span>{' '}
                      </td>
                      <td>AED 120 </td>
                      <td>
                        <a
                          className="dv_everytable_action dropdown-toggle"
                          id="userDropdown"
                          href="#"
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
                          <a className="dropdown-item" href="#">
                            View{' '}
                          </a>
                          <a className="dropdown-item" href="#">
                            Chat{' '}
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>12/12/2020</td>
                      <td>
                        <a href="#!">MD12345</a>
                      </td>
                      <td>sarika kadam </td>
                      <td>
                        <span
                          style={{
                            textTransform: 'capitalize',
                            color: 'green'
                          }}
                        >
                          resheduled{' '}
                        </span>{' '}
                      </td>
                      <td>
                        <span>cash </span>{' '}
                      </td>
                      <td>
                        <span
                          style={{
                            textTransform: 'capitalize',
                            color: '#ff9800'
                          }}
                        >
                          pending{' '}
                        </span>{' '}
                      </td>
                      <td>AED 120 </td>
                      <td>
                        <a
                          className="dv_everytable_action dropdown-toggle"
                          id="userDropdown"
                          href="#"
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
                          <a className="dropdown-item" href="#">
                            View{' '}
                          </a>
                          <a className="dropdown-item" href="#">
                            Chat{' '}
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="dv_pagination">
                <ul>
                  <li>
                    <a href="javascript:void(0);">
                      <ChevronLeft />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">1</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">2</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dv_active_page">
                      3
                    </a>
                  </li>
                  <li>...</li>
                  <li>
                    <a href="javascript:void(0);">8</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <ChevronRight />
                    </a>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AcceptedRequests;
