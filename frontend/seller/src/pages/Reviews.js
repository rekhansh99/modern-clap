import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Table,
  Dropdown
} from 'react-bootstrap';
import { MoreVertical, Star } from 'react-feather';

import SwitchBusiness from '../components/common/SwitchBusiness';
import Search from '../components/common/Search';
import Pagination from '../components/common/Pagination';
import ReviewModal from '../components/Reviews/ReviewModal';

const Reviews = () => {
  const [modalOpen, setModal] = useState(false);

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
      <h1 className="mt-4 dv_page_heading">Reviews</h1>
      <Card className="mb-4">
        <Card.Header>Search</Card.Header>
        <Card.Body>
          <Row>
            <Col xs={12} lg={3}>
              <Form.Group className="mb-0">
                <Form.Label>Date </Form.Label>
                <Form.Control
                  type="text"
                  className="dv_all_inputs rangepicker"
                  placeholder="Date"
                />
              </Form.Group>
            </Col>
            <Col xs={12} lg={3}>
              <Form.Group className="mb-0">
                <label>Category </label>
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
                  <option>Pest COntrol </option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} lg={3}>
              <Form.Group className="mb-0">
                <label>Star </label>
                <Form.Control as="select" className="dv_all_inputs">
                  <option>Select </option>
                  <option>1 Star </option>
                  <option>2 Star </option>
                  <option>3 Star </option>
                  <option>4 Star </option>
                  <option>5 Star </option>
                  <option>Tool </option>
                  <option>Work </option>
                  <option>Behaviour </option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} lg={3}>
              <Form.Group className="mb-0">
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
        <Card.Header>Ratings and Reviews</Card.Header>
        <Card.Body className="p-0">
          <Search />
          <Table width="100%" cellSpacing={0} responsive>
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
                  <Link to="#!" style={{ fontFamily: 'Segoe ui bold' }}>
                    MD12345
                  </Link>
                </td>
                <td>3.4</td>
                <td>3.4</td>
                <td>3.4</td>
                <td>
                  <Star width={15} height={15} fill="gold" strokeWidth={0} />{' '}
                  3.4
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
                  </span>
                </td>
                <Dropdown as="td">
                  <Dropdown.Toggle as="a" className="dv_everytable_action">
                    <MoreVertical />
                  </Dropdown.Toggle>
                  <Dropdown.Menu alignRight>
                    <Dropdown.Item
                      as={Link}
                      onClick={e => {
                        e.preventDefault();
                        setModal(true);
                      }}
                    >
                      View Review
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
            </tbody>
          </Table>
          <Pagination />
        </Card.Body>
      </Card>
      <ReviewModal isOpen={modalOpen} close={() => setModal(false)} />
    </Container>
  );
};

export default Reviews;
