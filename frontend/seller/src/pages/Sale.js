import React from 'react';

import { Codepen, ChevronLeft, ChevronRight } from 'react-feather';
import { Container, Col, Row, Card } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import NumberCard from '../components/common/NumberCard';

const Sale = () => {
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
        Sale
      </h1>
      <ul className="dv_daily_week_yesterday_sale">
        <li>
          <a href="#!">a week sale</a>
        </li>
        <li>
          <a href="#!">yesterday sale </a>
        </li>
        <li>
          <a href="#!" className="active">
            daily sale
          </a>
        </li>
      </ul>
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
      </Row>
      <Card className="mb-4">
        <Card.Header>Search</Card.Header>
        <Card.Body>
          <Row>
            <Col xs={12} lg={3}>
              <div className="form-group">
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
              <div className="form-group">
                <label>Type </label>
                <select className="form-control dv_all_inputs">
                  <option>Select </option>
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
              <div className="form-group">
                <label>Category </label>
                <select className="form-control dv_all_inputs">
                  <option>All </option>
                  <option selected>Kitchen cleaning </option>
                  <option>Bedroom cleaning </option>
                  <option>Bathroom cleaning </option>
                  <option>Living Room cleaning </option>
                  <option>Untesil cleaning </option>
                  <option>Iron with folding cloths </option>
                  <option>Machine Laundry </option>
                  <option>Refrigerator Cleaning </option>
                  <option>Ovan &amp; Microwave Cleaning </option>
                </select>
              </div>
            </Col>
            <Col xs={12} lg={3}>
              <div className="form-group">
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
        <Card.Header>
          <Card.Title className="float-left">Total Sale</Card.Title>
          <div className="dv_download_report dropdown">
            <a
              title="Add New"
              className="dropdown-toggle"
              id="addnewshortcut"
              href="#!"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Export
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="addnewshortcut"
            >
              <a className="dropdown-item" href="#!">
                Excel
              </a>
              <a className="dropdown-item" href="#!">
                CSV
              </a>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <div className="dv_search_input_for_all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx={11} cy={11} r={8} />
              <line x1={21} y1={21} x2="16.65" y2="16.65" />
            </svg>
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
                  <th>created on </th>
                  <th>Ref No </th>
                  <th>customer </th>
                  <th>total amount </th>
                  <th>revenue </th>
                  <th>modernclap revenue </th>
                  <th>payment type </th>
                </tr>
                <tr>
                  <th />
                  <th />
                  <th />
                  <th>AED 35,700 </th>
                  <th>
                    <span style={{ color: 'green' }}>AED 34,500</span>
                  </th>
                  <th>AED 1200 </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12/12/2020 </td>
                  <td>
                    <a href="#!">MD12345 </a>
                  </td>
                  <td>sanika shinde </td>
                  <td>AED 100</td>
                  <td>AED 20</td>
                  <td>AED 80 </td>
                  <td>Cash </td>
                </tr>
                <tr>
                  <td>12/12/2020 </td>
                  <td>
                    <a href="#!">MD12345 </a>
                  </td>
                  <td>sanika shinde </td>
                  <td>AED 100</td>
                  <td>AED 20</td>
                  <td>AED 80 </td>
                  <td>Cash </td>
                </tr>
                <tr>
                  <td>12/12/2020 </td>
                  <td>
                    <a href="#!">MD12345 </a>
                  </td>
                  <td>sanika shinde </td>
                  <td>AED 100</td>
                  <td>AED 20</td>
                  <td>AED 80 </td>
                  <td>Cash </td>
                </tr>
                <tr>
                  <td>12/12/2020 </td>
                  <td>
                    <a href="#!">MD12345 </a>
                  </td>
                  <td>sanika shinde </td>
                  <td>AED 100</td>
                  <td>AED 20</td>
                  <td>AED 80 </td>
                  <td>Cash </td>
                </tr>
                <tr>
                  <td>12/12/2020 </td>
                  <td>
                    <a href="#!">MD12345 </a>
                  </td>
                  <td>sanika shinde </td>
                  <td>AED 100</td>
                  <td>AED 20</td>
                  <td>AED 80 </td>
                  <td>Cash </td>
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

export default Sale;
