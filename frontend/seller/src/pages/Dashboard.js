import React from 'react';

import { Codepen } from 'react-feather';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NumberCard from '../components/common/NumberCard';

const Dashboard = () => {
  return (
    <Row>
      <Col xs={12} md={6} xl={3}>
        <NumberCard title="Total Appointments" value="21" icon={<Codepen />} />;
      </Col>
      <Col xs={12} md={6} xl={3}>
        <NumberCard title="Total Appointments" value="21" icon={<Codepen />} />;
      </Col>
      <Col xs={12} md={6} xl={3}>
        <NumberCard title="Total Appointments" value="21" icon={<Codepen />} />;
      </Col>
      <Col xs={12} md={6} xl={3}>
        <NumberCard title="Total Appointments" value="21" icon={<Codepen />} />;
      </Col>
      <Col xs={12} md={6} xl={3}>
        <NumberCard title="Total Appointments" value="21" icon={<Codepen />} />;
      </Col>
      <Col xs={12} md={6} xl={3}>
        <NumberCard title="Total Appointments" value="21" icon={<Codepen />} />;
      </Col>
      <Col xs={12} md={6} xl={3}>
        <NumberCard title="Total Appointments" value="21" icon={<Codepen />} />;
      </Col>
      <Col xs={12} md={6} xl={3}>
        <NumberCard title="Total Appointments" value="21" icon={<Codepen />} />;
      </Col>
    </Row>
  );
};

export default Dashboard;
