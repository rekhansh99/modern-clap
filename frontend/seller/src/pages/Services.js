import React from 'react';

import { Search, ChevronLeft, ChevronRight, MoreVertical } from 'react-feather';
import { Container, Row, Col, Card } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';

const Services = () => {
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
              <a
                href="/services/add"
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
              </a>
            </Card.Header>
            <Card.Body className="p-0">
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
                      <td>
                        <a
                          className="dv_everytable_action dropdown-toggle"
                          id="servicedrp"
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
                          aria-labelledby="servicedrp"
                        >
                          <a className="dropdown-item" href="#!">
                            Edit{' '}
                          </a>
                        </div>
                      </td>
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
                      <td>
                        <a
                          className="dv_everytable_action dropdown-toggle"
                          id="servicedrp"
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
                          aria-labelledby="servicedrp"
                        >
                          <a className="dropdown-item" href="#!">
                            Edit{' '}
                          </a>
                        </div>
                      </td>
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
                      <td>
                        <a
                          className="dv_everytable_action dropdown-toggle"
                          id="servicedrp"
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
                          aria-labelledby="servicedrp"
                        >
                          <a className="dropdown-item" href="#!">
                            Edit{' '}
                          </a>
                        </div>
                      </td>
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
                      <td>
                        <a
                          className="dv_everytable_action dropdown-toggle"
                          id="servicedrp"
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
                          aria-labelledby="servicedrp"
                        >
                          <a className="dropdown-item" href="#!">
                            Edit{' '}
                          </a>
                        </div>
                      </td>
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
                      <td>
                        <a
                          className="dv_everytable_action dropdown-toggle"
                          id="servicedrp"
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
                          aria-labelledby="servicedrp"
                        >
                          <a className="dropdown-item" href="#!">
                            Edit{' '}
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
                    <a href="#!">
                      <ChevronLeft />
                    </a>
                  </li>
                  <li>
                    <a href="#!">1</a>
                  </li>
                  <li>
                    <a href="#!">2</a>
                  </li>
                  <li>
                    <a href="#!" className="dv_active_page">
                      3
                    </a>
                  </li>
                  <li>...</li>
                  <li>
                    <a href="#!">8</a>
                  </li>
                  <li>
                    <a href="#!">
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

export default Services;
