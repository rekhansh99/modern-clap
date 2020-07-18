import React from 'react';

import { Container, Card, Row, Col } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import {
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Star,
  Search
} from 'react-feather';

const Reviews = () => {
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
        Reviews
      </h1>
      <Card className="mb-4">
        <Card.Header>Search</Card.Header>
        <Card.Body>
          <Row>
            <Col xs={12} lg={3}>
              <div className="form-group mb-0">
                <label>Date </label>
                <input
                  name="daterange"
                  type="text"
                  className="form-control dv_all_inputs"
                  placeholder="Date"
                />
              </div>
            </Col>
            <Col xs={12} lg={3}>
              <div className="form-group mb-0">
                <label>Category </label>
                <select className="form-control dv_all_inputs">
                  <option selected>Select </option>
                  <option selected>Cleaners </option>
                  <option>Online Fitness </option>
                  <option>Ladies Salon </option>
                  <option>Gents Salon </option>
                  <option>Disinfection </option>
                  <option>Deep Cleaning </option>
                  <option>Handyman </option>
                  <option>Electrician </option>
                  <option>Painters </option>
                  <option>Packers &amp; Movers </option>
                  <option>AC Technicians </option>
                  <option>Pest COntrol </option>
                </select>
              </div>
            </Col>
            <Col xs={12} lg={3}>
              <div className="form-group mb-0">
                <label>Star </label>
                <select className="form-control dv_all_inputs">
                  <option>Select </option>
                  <option selected>1 Star </option>
                  <option>2 Star </option>
                  <option>3 Star </option>
                  <option>4 Star </option>
                  <option>5 Star </option>
                  <option>Tool </option>
                  <option>Work </option>
                  <option>Behaviour </option>
                </select>
              </div>
            </Col>
            <Col xs={12} lg={3}>
              <div className="form-group mb-0">
                <label>Payment </label>
                <select className="form-control dv_all_inputs">
                  <option selected>Select </option>
                  <option>Cash </option>
                  <option>Card </option>
                </select>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>Ratings and Reviews</Card.Header>
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
                  <th>date </th>
                  <th>ref id </th>
                  <th>tools </th>
                  <th>work </th>
                  <th>behaviour </th>
                  <th>rating </th>
                  <th>review </th>
                  <th>action </th>
                </tr>
                <tr>
                  <th />
                  <th />
                  <th>3.8</th>
                  <th>4.3</th>
                  <th>2.9</th>
                  <th>4.1</th>
                  <th>234</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12/12/2020 </td>
                  <td>
                    <a href="#!" style={{ fontFamily: 'Segoe ui bold' }}>
                      MD12345
                    </a>
                  </td>
                  <td>3.4</td>
                  <td>3.4</td>
                  <td>3.4</td>
                  <td>
                    <Star width={15} height={15} /> 3.4
                  </td>
                  <td>
                    <span
                      style={{
                        display: 'block',
                        width: '80px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      very smart service they given to us really appricite
                    </span>{' '}
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
                      <a
                        className="dropdown-item"
                        href="#!"
                        data-toggle="modal"
                        data-target="#dvviewreview"
                      >
                        View Review
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
    </Container>
  );
};

export default Reviews;
