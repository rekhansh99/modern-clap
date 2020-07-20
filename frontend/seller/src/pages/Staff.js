import React from 'react';
import { Link } from 'react-router-dom';
import { MoreVertical, Star } from 'react-feather';
import { Container, Card, Table, Dropdown } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import Search from '../components/common/Search';
import Pagination from '../components/common/Pagination';

const Staff = () => {
  document.title = 'Staff - Modernclap';

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
      <h1 className="mt-4 dv_page_heading">Staff</h1>
      <Card className="mb-4">
        <Card.Header>
          All Staff list
          <Link
            to="/staff/add"
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
                <th>staff name </th>
                <th>profession </th>
                <th>rating </th>
                <th>status </th>
                <th>action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rose mella </td>
                <td>hair dresser </td>
                <td>
                  <Star size={15} fill="gold" strokeWidth={0} /> 3.9
                </td>
                <td>
                  <div className="dv_status_in_list">
                    <label className="form-switch">
                      <input type="checkbox" defaultChecked />
                      <i />
                    </label>
                  </div>
                </td>
                <Dropdown as="td">
                  <Dropdown.Toggle as="a" className="dv_everytable_action">
                    <MoreVertical />
                  </Dropdown.Toggle>
                  <Dropdown.Menu alignRight>
                    <Dropdown.Item as={Link} to="/staff/staffId">
                      View
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
              <tr>
                <td>Rose mella </td>
                <td>hair dresser </td>
                <td>
                  <Star size={15} fill="gold" strokeWidth={0} /> 3.9
                </td>
                <td>
                  <div className="dv_status_in_list">
                    <label className="form-switch">
                      <input type="checkbox" defaultChecked />
                      <i />
                    </label>
                  </div>
                </td>
                <Dropdown as="td">
                  <Dropdown.Toggle as="a" className="dv_everytable_action">
                    <MoreVertical />
                  </Dropdown.Toggle>
                  <Dropdown.Menu alignRight>
                    <Dropdown.Item as={Link} to="/staff/staffId">
                      View
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
              <tr>
                <td>Rose mella </td>
                <td>hair dresser </td>
                <td>
                  <Star size={15} fill="gold" strokeWidth={0} /> 3.9
                </td>
                <td>
                  <div className="dv_status_in_list">
                    <label className="form-switch">
                      <input type="checkbox" defaultChecked />
                      <i />
                    </label>
                  </div>
                </td>
                <Dropdown as="td">
                  <Dropdown.Toggle as="a" className="dv_everytable_action">
                    <MoreVertical />
                  </Dropdown.Toggle>
                  <Dropdown.Menu alignRight>
                    <Dropdown.Item as={Link} to="/staff/staffId">
                      View
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
              <tr>
                <td>Rose mella </td>
                <td>hair dresser </td>
                <td>
                  <Star size={15} fill="gold" strokeWidth={0} /> 3.9
                </td>
                <td>
                  <div className="dv_status_in_list">
                    <label className="form-switch">
                      <input type="checkbox" defaultChecked />
                      <i />
                    </label>
                  </div>
                </td>
                <Dropdown as="td">
                  <Dropdown.Toggle as="a" className="dv_everytable_action">
                    <MoreVertical />
                  </Dropdown.Toggle>
                  <Dropdown.Menu alignRight>
                    <Dropdown.Item as={Link} to="/staff/staffId">
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
    </Container>
  );
};

export default Staff;
