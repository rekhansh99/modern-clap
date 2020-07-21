import React from 'react';

import { Link } from 'react-router-dom';
import { Table, Dropdown } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

import Search from '../common/Search';
import Pagination from '../common/Pagination';

const LatestBookingsTable = () => {
  const data = [
    {
      requestNo: 'MD542154',
      customer: 'sanjay sakpal',
      service: 'waxing',
      location: 'al rigga',
      amount: 'AED 450',
      status: 'pending'
    },
    {
      requestNo: 'MD542154',
      customer: 'sanjay sakpal',
      service: 'waxing',
      location: 'al rigga',
      amount: 'AED 450',
      status: 'completed'
    }
  ];

  return (
    <>
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
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {data.map((req, index) => (
            <tr key={index}>
              <td>{req.requestNo}</td>
              <td>{req.customer}</td>
              <td>{req.service}</td>
              <td>{req.location}</td>
              <td>{req.amount}</td>
              <td>
                <span className={req.status}>{req.status}</span>
              </td>
              <Dropdown as="td">
                <Dropdown.Toggle as="a" className="dv_everytable_action">
                  <MoreVertical />
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                  <Dropdown.Item as={Link} to={'/request/' + req.requestNo}>
                    View
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination />
    </>
  );
};

export default LatestBookingsTable;
