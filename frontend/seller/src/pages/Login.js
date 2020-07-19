import React from 'react';

import loginBG from '../images/login-bg.jpg';

import { Container, Row, Col, Card, Form } from 'react-bootstrap';

const Login = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient( rgba(0, 123, 255, 0.90), rgba(0, 123, 255) ), url(' +
          loginBG +
          ')'
      }}
    >
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <Container>
              <Row className="justify-content-center">
                <Col lg={5}>
                  <Card className="dv_cards">
                    <Card.Header>
                      <h3 className="text-center font-weight-bold my-2">
                        Seller Login
                      </h3>
                    </Card.Header>
                    <Card.Body>
                      <form>
                        <Form.Group>
                          <input
                            className="form-control dv_login_form_input"
                            id="inputEmailAddress"
                            type="email"
                            placeholder="Username or Email address"
                          />
                        </Form.Group>
                        <Form.Group>
                          <input
                            className="form-control dv_login_form_input"
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Form.Group>
                          <div className="custom-control custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="rememberPasswordCheck"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="rememberPasswordCheck"
                            >
                              Remember password
                            </label>
                          </div>
                        </Form.Group>
                        <Form.Group className="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <a className="small" href="password.html">
                            Forgot Password?
                          </a>
                          <a className="btn btn-primary" href="index.html">
                            Login
                          </a>
                        </Form.Group>
                      </form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;
