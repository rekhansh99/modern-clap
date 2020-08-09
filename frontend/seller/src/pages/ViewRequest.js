import React, { useState } from 'react';

import { Container, Card, Button, Row, Col } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import askConfirmation from '../utils/askConfirmation';

import ConfirmationModal from '../components/common/ConfirmationModal';
import CustomerDetails from '../components/ViewRequest/CustomerDetails';
import ProviderDetails from '../components/ViewRequest/ProviderDetails';
import BookingDetails from '../components/ViewRequest/BookingDetails';
import ServiceDetails from '../components/ViewRequest/ServiceDetails';
import AddReview from '../components/ViewRequest/AddReview';

const ViewRequest = () => {
  document.title = 'View Request - Modernclap';

  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const handleMakePayment = () => {
    askConfirmation(setConfirmationOpen, () => {
      console.log('YES was clicked!');
    });
  };

  return (
    <Container fluid>
      <SwitchBusiness />
      <h1 className="mt-4 dv_page_heading">View Request</h1>
      <Card className="mb-4">
        <Card.Header className="text-center">
          {/* <Button variant="danger" className="dv_accep_reject_btn">Reject </Button> */}
          {/* <Button variant="primary" className="dv_accep_reject_btn">Make </Button> */}
          <Button
            variant="primary"
            className="dv_accep_reject_btn"
            onClick={handleMakePayment}
          >
            Add OTP For Review
          </Button>
        </Card.Header>
        <Card.Body className="p-0">
          <div className="dv_customer_details">
            <Row>
              <Col md={3} className="p-0">
                <CustomerDetails />
              </Col>
              <Col md={3} className="p-0 dv_mobile_left_12">
                <ProviderDetails />
              </Col>
              <Col md={3} className="p-0 dv_mobile_left_12">
                <BookingDetails />
              </Col>
              <Col md={3} className="p-0 dv_mobile_left_12">
                <ServiceDetails />
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
      <Row>
        <Col md={6} xs={12} style={{ margin: '0 auto' }}>
          {/* <span
            className="dv_section_heading"
            style={{
              margin: '0 0 15px 0',
              background: 'rgb(63, 199, 63, 0.3)',
              color: '#1b901b'
            }}
          >
            <GreenTickSVG />
            Payment Done
            <p
              style={{
                fontSize: '12px',
                textTransform: 'initial',
                fontWeight: 400,
                padding: '0 0 0 32px',
                margin: 0
              }}
            >
              We have received your payment against <strong>MD123443 </strong>{' '}
              invoice on <strong>12/12/2020</strong>. Please shaare your
              feedback to improve our quality service for you.
            </p>
          </span> */}
          <AddReview />
        </Col>
      </Row>
      <ConfirmationModal
        isOpen={confirmationOpen}
        close={() => setConfirmationOpen(false)}
      />
    </Container>
  );
};

export default ViewRequest;
