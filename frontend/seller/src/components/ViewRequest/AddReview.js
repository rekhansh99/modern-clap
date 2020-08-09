import React, { useState } from 'react';

import { Alert, Button, Card, Col, Row, Form, InputGroup } from 'react-bootstrap';
import { ChevronLeft } from 'react-feather';

import StarRating from '../Reviews/StarRating';
import { ReactComponent as GreenTickSVG } from '../../svgs/tick-green.svg';

const AddReview = () => {
  const [toolsRating, setToolsRating] = useState(0);
  const [workRating, setWorkRating] = useState(0);
  const [behaviourRating, setBehaviourRating] = useState(0);
  const [overallRating, setOverallRating] = useState(0);

  return (
    <Card className="mb-4">
      <Card.Header>
        <ChevronLeft size={24} /> Add Review - MD12345
      </Card.Header>
      <Card.Body>
        <span
          className="dv_section_heading"
          style={{
            margin: '0 0 15px 0',
            background: 'rgb(63, 199, 63, 0.3)',
            color: '#1b901b'
          }}
        >
          <GreenTickSVG />
          OTP Added Successfully.
          <p
            style={{
              fontSize: '12px',
              textTransform: 'initial',
              fontWeight: 400,
              padding: '0 0 0 32px',
              margin: 0
            }}
          >
            Please give us your valuale review to make our service more better
            for customer.
          </p>
        </span>
        <Row>
          <Col md={12}>
            <Alert variant="danger">
              Enter correct OTP to write the review.
            </Alert>
          </Col>
          <Col md={12}>
            <InputGroup className="mb-3">
              <label>Add OTP for Review </label>
              <Form.Control
                type="tel"
                className="dv_all_inputs"
                placeholder="****"
              />
              <InputGroup.Append>
                <Button className="height-44" type="submit">
                  Submit
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col md={12}>
            <Form.Group>
              <label>Staff Late reach minutes </label>
              <Form.Control as="select" className="dv_all_inputs">
                <option>Before Service time </option>
                <option>Exact on Service Time </option>
                <option>5 Min Late </option>
                <option>10 Min Late </option>
                <option>15 Min Late </option>
                <option>25 Min Late </option>
                <option>30 Min Late </option>
                <option>More than 30 min </option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <label>Tools </label>
              <StarRating value={toolsRating} onChange={setToolsRating} />
            </Form.Group>
            <Form.Group>
              <label>Work </label>
              <StarRating value={workRating} onChange={setWorkRating} />
            </Form.Group>
            <Form.Group>
              <label>Behaviour </label>
              <StarRating
                value={behaviourRating}
                onChange={setBehaviourRating}
              />
            </Form.Group>
            <Form.Group>
              <label>Overall Rating </label>
              <StarRating value={overallRating} onChange={setOverallRating} />
            </Form.Group>
            <Form.Group>
              <label>Review </label>
              <Form.Control
                type="text"
                className="dv_all_inputs"
                style={{ height: '100px', width: '100%' }}
              />
            </Form.Group>
            <Form.Group>
              <label>Any Suggestion </label>
              <Form.Control
                type="text"
                className="dv_all_inputs"
                style={{ height: '100px', width: '100%' }}
              />
            </Form.Group>
            <Form.Group>
              <Button style={{ padding: '10px 0' }} block>
                Submit
              </Button>
            </Form.Group>
            <Form.Group>
              <Form.Check custom id="cash">
                <Form.Check.Input />
                <Form.Check.Label>Paying through cash</Form.Check.Label>
              </Form.Check>
            </Form.Group>
            <Form.Group>
              <Form.Check custom id="card">
                <Form.Check.Input />
                <Form.Check.Label>Paying through card</Form.Check.Label>
              </Form.Check>
            </Form.Group>
            <Form.Group>
              <Button style={{ padding: '10px 0' }} block>
                Pay Amount
              </Button>
            </Form.Group>
            <Form.Group>
              <label>Transaction No </label>
              <Form.Control
                type="text"
                className="dv_all_inputs"
                placeholder="Enter"
              />
            </Form.Group>
            <Form.Group>
              <Button style={{ padding: '10px 0' }} block>
                Complete Your Transaction
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default AddReview;
