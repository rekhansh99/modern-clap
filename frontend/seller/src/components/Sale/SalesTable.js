import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import Search from '../common/Search';
import Pagination from '../common/Pagination';

const SalesTable = ({ orders }) => {
  return (
    <>
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
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.createdOn}</td>
              <td>
                <Link to={'/request/' + order.id}>{order.id}</Link>
              </td>
              <td>{order.customer}</td>
              <td>{order.totalAmount}</td>
              <td>{order.revenue}</td>
              <td>{order.modernclapRevenue}</td>
              <td>{order.paymentType}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination />
    </>
  );
};

SalesTable.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      customer: PropTypes.shape.isRequired,
      createdOn: PropTypes.string.isRequired,
      totalAmount: PropTypes.number.isRequired,
      revenue: PropTypes.number.isRequired,
      modernclapRevenue: PropTypes.number.isRequired,
      paymentType: PropTypes.string.isRequired
    })
  )
};

export default SalesTable;
