import React, { useState } from 'react';

import { Codepen } from 'react-feather';
import {
  Container,
  Col,
  Row,
  Card,
  Table,
  Form,
  Dropdown
} from 'react-bootstrap';
import { DateRangePicker } from 'react-bootstrap-daterangepicker';
import moment from 'moment';

import SwitchBusiness from '../components/common/SwitchBusiness';
import NumberCard from '../components/common/NumberCard';
import Search from '../components/common/Search';
import Pagination from '../components/common/Pagination';
import { Link } from 'react-router-dom';

const Sale = () => {
  document.title = 'Sale - Modernclap';

  const [dateRange, setDateRange] = useState({
    start: moment().startOf('hour'),
    end: moment().startOf('hour').add(32, 'hour')
  });

  const onDateRangeChanged = (event, picker) => {
    setDateRange({ start: picker.startDate, end: picker.endDate });
  };

  const getDateRange = () => {
    return (
      dateRange.start.format('M/DD hh:mm A') +
      ' - ' +
      dateRange.end.format('M/DD, hh:mm A')
    );
  };

  const dateRangePickerConfig = {
    timePicker: true,
    startDate: dateRange.start,
    endDate: dateRange.end,
    locale: {
      format: 'M/DD hh:mm A'
    },
    ranges: {
      Today: [moment(), moment()],
      Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [
        moment().subtract(1, 'month').startOf('month'),
        moment().subtract(1, 'month').endOf('month')
      ]
    }
  };

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
      <h1 className="mt-4 dv_page_heading">Sale</h1>
      <Row>
        <ul className="dv_daily_week_yesterday_sale">
          <li>
            <Link to="#!">a week sale </Link>
          </li>
          <li>
            <Link to="#!">yesterday sale </Link>
          </li>
          <li>
            <Link to="#!" className="active">
              daily sale
            </Link>
          </li>
        </ul>
        <Col xs={12} md={6} xl={3}>
          <NumberCard
            title="Total Appointments"
            value={21}
            icon={<Codepen />}
          />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard
            title="Total Appointments"
            value={21}
            icon={<Codepen />}
          />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard
            title="Total Appointments"
            value={21}
            icon={<Codepen />}
          />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard
            title="Total Appointments"
            value={21}
            icon={<Codepen />}
          />
        </Col>
      </Row>
      <Card className="mb-4">
        <Card.Header>Search</Card.Header>
        <Card.Body>
          <Row>
            <Col xs={12} lg={3}>
              <Form.Group>
                <Form.Label>Date </Form.Label>
                <DateRangePicker
                  {...dateRangePickerConfig}
                  containerStyles={{ width: '100%' }}
                  onApply={onDateRangeChanged}
                >
                  <Form.Control
                    type="text"
                    className="dv_all_inputs rangepicker"
                    style={{ cursor: 'pointer' }}
                    value={getDateRange()}
                    readOnly
                  />
                </DateRangePicker>
              </Form.Group>
            </Col>
            <Col xs={12} lg={3}>
              <Form.Group>
                <label>Type </label>
                <Form.Control as="select" className="dv_all_inputs">
                  <option>Select </option>
                  <option>Cleaners </option>
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
                  <option>Pest Control </option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} lg={3}>
              <Form.Group>
                <label>Category </label>
                <Form.Control as="select" className="dv_all_inputs">
                  <option>All </option>
                  <option>Kitchen cleaning </option>
                  <option>Bedroom cleaning </option>
                  <option>Bathroom cleaning </option>
                  <option>Living Room cleaning </option>
                  <option>Untesil cleaning </option>
                  <option>Iron with folding cloths </option>
                  <option>Machine Laundry </option>
                  <option>Refrigerator Cleaning </option>
                  <option>Ovan &amp; Microwave Cleaning </option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} lg={3}>
              <Form.Group>
                <label>Payment </label>
                <Form.Control as="select" className="dv_all_inputs">
                  <option>Select </option>
                  <option>Cash </option>
                  <option>Card </option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>
          <Card.Title className="float-left">Total Sale</Card.Title>
          <Dropdown className="dv_download_report">
            <Dropdown.Toggle as="a" title="Add New" id="addnewshortcut">
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight>
              <Dropdown.Item as={Link} to="#!">
                Excel
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#!">
                CSV
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Header>
        <Card.Body className="p-0">
          <Search />
          <Table className="table" width="100%" cellSpacing={0} responsive>
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
                  <Link to="#!">MD12345 </Link>
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
                  <Link to="#!">MD12345 </Link>
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
                  <Link to="#!">MD12345 </Link>
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
                  <Link to="#!">MD12345 </Link>
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
                  <Link to="#!">MD12345 </Link>
                </td>
                <td>sanika shinde </td>
                <td>AED 100</td>
                <td>AED 20</td>
                <td>AED 80 </td>
                <td>Cash </td>
              </tr>
            </tbody>
          </Table>
          <Pagination />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Sale;
