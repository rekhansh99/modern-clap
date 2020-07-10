import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Provider = ({ isOpen, setOpen }) => {
  return (
    <Modal
      id="providers"
      dialogClassName="dv_choose_location_md_dialog"
      show={isOpen}
      onHide={() => setOpen(false)}
      style={{ margin: '2% auto 0 auto', maxWidth: '95%' }}
    >
      <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          Providers Details
        </ModalTitle>
        <img
          src="/images/svgs/close.svg"
          width={24}
          height={24}
          alt=""
          onClick={() => setOpen(false)}
        />
      </ModalHeader>
      <ModalBody
        style={{
          border: 'none',
          maxHeight: '90%',
          padding: '15px',
          borderRadius: '0 0 5px 5px',
          overflow: 'auto'
        }}
      >
        <Accordion defaultActiveKey="0">
          <div className="dv_provider_card" style={{ position: 'relative' }}>
            <div className="dv_provider_logo">
              <img src="images/facebook.png" alt="" title />
            </div>
            <span
              style={{
                float: 'left',
                position: 'absolute',
                left: '23px',
                fontWeight: 900,
                color: '#0eca0e',
                bottom: '7px'
              }}
            >
              <img
                src="/images/svgs/star.svg"
                style={{
                  width: '16px',
                  position: 'relative',
                  top: '-2px',
                  fill: '#0eca0e',
                  color: '#0eca0e'
                }}
              />
              4.5
            </span>
            <div className="dv_provider_name">
              lightspeed general trading llc
            </div>
            <div className="dv_provider_location">al rigga, dubai, UAE</div>
            <div className="dv_rating_from_customer">
              &quot;Got <span>24</span> Review&quot;
            </div>
            <Dropdown className="dv_about_provider_dropdown">
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                <svg
                  data-toggle="dropdown"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d7d7d7"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={12} y1={8} x2={12} y2={12} />
                  <line x1={12} y1={16} x2="12.01" y2={16} />
                </svg>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dv_about_provider_dropdown_menu">
                <Dropdown.Item href="#/action-1">
                  <svg
                    style={{
                      width: '20px',
                      float: 'left',
                      height: '20px',
                      margin: '0 15px 0 0'
                    }}
                    id="Layer_1"
                    enableBackground="new 0 0 480.111 480.111"
                    height={512}
                    viewBox="0 0 480.111 480.111"
                    width={512}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m448.034 177.676v262.38c0 17.67-14.33 32-32 32h-352c-17.67 0-32-14.33-32-32 0-248.047-.021-201.581.07-262.38z"
                      fill="#d6f4fc"
                    />
                    <path
                      d="m448.034 177.676v60.598c0 13.114-10.512 23.978-23.626 24.031-.146.001-368.493.001-368.759 0-13.11-.057-23.615-10.921-23.615-24.031 0-17.484-.013-5.22.07-60.598z"
                      fill="#bdeffc"
                    />
                    <path
                      d="m321.034 329.056v143h-162v-143c0-17.67 14.33-32 32-32h98c17.67 0 32 14.33 32 32z"
                      fill="#e8f8fc"
                    />
                    <path
                      d="m472.034 177.676c0 32.017-25.963 58-58 58-32.03 0-58-25.97-58-58 0 32.03-25.97 58-58 58s-58-25.97-58-58c0 32.03-25.97 58-58 58s-58-25.97-58-58c-.05 31.82-26.24 58-58 58-31.721 0-57.95-26.147-58-58 0-50.408-.138-47.306.35-49.62.48-2.271-2.847 5.77 47.47-110.36 2.54-5.85 8.31-9.64 14.68-9.64h339c6.37 0 12.14 3.79 14.68 9.64 50.354 116.216 46.989 108.087 47.47 110.36.487 2.309.35-.843.35 49.62z"
                      fill="#ff6d7a"
                    />
                    <path
                      d="m472.034 177.676c0 32.017-25.963 58-58 58-32.03 0-58-25.97-58-58 0 32.03-25.97 58-58 58s-58-25.97-58-58c0 32.03-25.97 58-58 58s-58-25.97-58-58c-.05 31.82-26.24 58-58 58-31.721 0-57.95-26.147-58-58v-46.3c0-1.12.12-2.23.35-3.32h463.3c.487 2.309.35-.843.35 49.62z"
                      fill="#fe4f60"
                    />
                    <path
                      d="m405.211 50.803c-101.577-13.98-204.092 3.951-287.008 66.429-9.333 7.033-20.709 10.823-32.395 10.823h-77.424c.48-2.271-2.847 5.77 47.47-110.36 2.54-5.85 8.31-9.64 14.68-9.64h339c6.376 0 12.143 3.786 14.678 9.636l2.229 5.142c6.246 14.413-5.668 30.112-21.23 27.97z"
                      fill="#ff7c87"
                    />
                    <path d="m456.034 271.056v169c0 22.056-17.944 40-40 40h-352c-22.056 0-40-17.944-40-40v-169c0-4.418 3.582-8 8-8s8 3.582 8 8v169c0 13.234 10.766 24 24 24h87v-135c0-22.056 17.944-40 40-40h98c22.056 0 40 17.944 40 40v103c0 4.418-3.582 8-8 8s-8-3.582-8-8v-103c0-13.233-10.767-24-24-24h-98c-13.233 0-24 10.767-24 24v135h65v-126c0-4.418 3.582-8 8-8s8 3.582 8 8v126h168c13.233 0 24-10.766 24-24v-169c0-4.418 3.582-8 8-8s8 3.581 8 8zm-404-143c0 4.418 3.582 8 8 8 435.268 0 413.687.778 416.867-1.661 1.662-1.279 2.749-3.124 3.047-5.232.446-3.215 3.317 4.691-52.574-124.288-1.269-2.926-4.152-4.819-7.341-4.819h-360c-3.188 0-6.073 1.894-7.34 4.819l-52 120c-.919 2.122-.66-1.246-.66 52.813.058 36.385 29.665 65.987 66 65.987 24.979 0 46.778-13.99 57.983-34.556 25.026 45.99 90.945 46.041 116.017.031 25.052 45.973 90.942 45.983 116 0 11.197 20.548 32.998 34.525 58 34.525 36.393 0 66-29.607 66-66 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 27.57-22.43 50-50 50s-50-22.43-50-50c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 27.57-22.43 50-50 50s-50-22.43-50-50c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 27.57-22.43 50-50 50-26.957 0-50-21.664-50-50.4 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 28.493-22.899 50.4-50 50.4-27.526 0-49.957-22.436-50-50v-47.961l49.253-113.658h349.496l45.066 104h-399.814c-4.419 0-8 3.581-8 8z" />
                  </svg>
                  Provider Details
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <svg
                    style={{
                      width: '20px',
                      float: 'left',
                      height: '20px',
                      margin: '0 15px 0 0'
                    }}
                    id="Capa_1"
                    enableBackground="new 0 0 512 512"
                    height={512}
                    viewBox="0 0 512 512"
                    width={512}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g>
                        <path
                          d="m15.484 177.215h481.032c8.551 0 15.484-11.813 15.484-24.484v-137.247c0-8.552-6.932-15.484-15.484-15.484h-481.032c-8.552 0-15.484 6.932-15.484 15.484v137.247c0 14.921 6.932 24.484 15.484 24.484z"
                          fill="#de5974"
                        />
                        <path
                          d="m496.516 168.215h-481.032c-8.552 0-15.484-6.933-15.484-15.484v18.581c0 8.551 6.932 15.484 15.484 15.484h481.032c8.552 0 15.484-6.933 15.484-15.484v-18.581c0 8.551-6.932 15.484-15.484 15.484z"
                          fill="#c7495d"
                        />
                        <path
                          d="m451.02 66.986-18.029-2.62c-2.875-.418-5.359-2.223-6.645-4.828l-8.062-16.337c-3.237-6.559-12.591-6.559-15.828 0l-8.063 16.337c-1.286 2.605-3.77 4.41-6.645 4.828l-18.029 2.62c-7.239 1.052-10.129 9.948-4.891 15.053l13.046 12.716c2.08 2.027 3.029 4.949 2.538 7.812l-2.6 15.158h65.115l-2.6-15.158c-.491-2.863.458-5.784 2.538-7.812l13.045-12.716c5.239-5.105 2.349-14.001-4.89-15.053z"
                          fill="#ffe07d"
                        />
                        <path
                          d="m373.987 270.638c-10.851 0-19.647 8.796-19.647 19.647v-13.499c0-10.851-8.796-19.647-19.647-19.647-10.851 0-19.647 8.796-19.647 19.647v-13.499c0-10.851-8.796-19.647-19.647-19.647-10.851 0-19.647 8.796-19.647 19.647v-87.956c0-10.851-8.796-19.647-19.647-19.647-10.851 0-19.647 8.796-19.647 19.647v175.619h-.294l-31.614-35.431c-9.894-11.089-24.049-17.429-38.911-17.429-7.656 0-12.524 8.192-8.863 14.916l30.832 56.641c7.248 13.315 16.531 25.417 27.514 35.867l35.263 33.554v8.694l57.156 9 57.156-9v-8.694s28.936-30.516 28.936-101.496v-47.288c.001-10.85-8.795-19.646-19.646-19.646z"
                          fill="#f0c69e"
                        />
                        <g>
                          <path
                            d="m250.386 466.343 56.9 9 57.412-9v-18.58h-114.312z"
                            fill="#e6ba94"
                          />
                        </g>
                        <path
                          d="m296.653 66.986-18.029-2.62c-2.875-.418-5.359-2.223-6.645-4.828l-8.062-16.337c-3.237-6.559-12.591-6.559-15.828 0l-8.063 16.337c-1.285 2.605-3.77 4.41-6.645 4.828l-18.028 2.62c-7.239 1.052-10.129 9.948-4.891 15.053l13.046 12.716c2.08 2.027 3.029 4.949 2.538 7.812l-2.6 15.158h65.115l-2.6-15.158c-.491-2.863.458-5.784 2.538-7.812l13.046-12.716c5.238-5.105 2.347-14.001-4.892-15.053z"
                          fill="#ffe07d"
                        />
                        <path
                          d="m142.286 66.986-18.028-2.62c-2.875-.418-5.359-2.223-6.645-4.828l-8.062-16.337c-3.237-6.559-12.591-6.559-15.828 0l-8.063 16.338c-1.286 2.605-3.77 4.41-6.645 4.828l-18.028 2.62c-7.239 1.052-10.129 9.948-4.891 15.053l13.045 12.716c2.08 2.027 3.029 4.949 2.538 7.812l-2.6 15.158h65.114l-2.6-15.158c-.491-2.863.458-5.784 2.538-7.812l13.046-12.716c5.238-5.106 2.348-14.002-4.891-15.054z"
                          fill="#ffe07d"
                        />
                        <path
                          d="m246.251 502.419h122.071c5.5 0 9.959-7.181 9.959-18.959v-7.158c0-5.5-4.459-9.959-9.959-9.959h-122.071c-5.5 0-9.959 4.459-9.959 9.959v7.158c0 11.539 4.458 18.959 9.959 18.959z"
                          fill="#e5ecf7"
                        />
                        <path
                          d="m368.322 493.419h-122.071c-5.5 0-9.959-4.459-9.959-9.959v18.581c0 5.5 4.459 9.959 9.959 9.959h122.071c5.5 0 9.959-4.459 9.959-9.959v-18.581c0 5.5-4.459 9.959-9.959 9.959z"
                          fill="#b9cbea"
                        />
                        <g>
                          <g>
                            <path
                              d="m134.194 117.726-28.451-14.957c-2.571-1.352-5.642-1.352-8.213 0l-28.451 14.957-.48 2.797c-1.237 7.209 6.33 12.707 12.805 9.303l16.125-8.477c2.571-1.352 5.642-1.352 8.213 0l16.125 8.477c6.475 3.404 14.042-2.094 12.805-9.303z"
                              fill="#ffd064"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="m288.561 117.726-28.451-14.957c-2.571-1.352-5.643-1.352-8.214 0l-28.451 14.957-.48 2.797c-1.237 7.209 6.331 12.707 12.805 9.303l16.125-8.477c2.571-1.352 5.642-1.352 8.214 0l16.125 8.477c6.475 3.404 14.042-2.094 12.805-9.303z"
                              fill="#ffd064"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="m442.928 117.726-28.451-14.957c-2.571-1.352-5.643-1.352-8.214 0l-28.451 14.957-.48 2.797c-1.237 7.209 6.33 12.707 12.805 9.303l16.125-8.477c2.571-1.352 5.642-1.352 8.214 0l16.125 8.477c6.474 3.404 14.042-2.094 12.805-9.303z"
                              fill="#ffd064"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  Reviews
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Contact Information
                <img
                  style={{
                    float: 'right',
                    position: 'absolute',
                    right: '15px',
                    top: '15px'
                  }}
                  src="/images/svgs/angle.svg"
                />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p className="dv_sub_headings_para"></p>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                  <li
                    style={{
                      display: 'block',
                      margin: 0,
                      padding: '0 0 15px 0',
                      color: '#282828'
                    }}
                  >
                    <svg
                      style={{ width: '30px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-smartphone"
                    >
                      <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
                      <line x1={12} y1={18} x2="12.01" y2={18} />
                    </svg>{' '}
                    :{' '}
                    <a style={{ color: '#282828' }} href="tel:+971568476532">
                      +971 56 847 6532
                    </a>
                  </li>
                  <li
                    style={{
                      display: 'block',
                      margin: 0,
                      padding: 0,
                      color: '#282828'
                    }}
                  >
                    <svg
                      style={{ width: '30px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-phone-call"
                    >
                      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>{' '}
                    :{' '}
                    <a style={{ color: '#282828' }} href="tel:+971568476532">
                      +971 56 847 6532
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Note
                <img
                  style={{
                    float: 'right',
                    position: 'absolute',
                    right: '15px',
                    top: '15px'
                  }}
                  src="/images/svgs/angle.svg"
                />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p className="dv_sub_headings_para">
                  Service Providers will arrived at your location before service
                  time.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </ModalBody>
    </Modal>
  );
};

Provider.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default Provider;
