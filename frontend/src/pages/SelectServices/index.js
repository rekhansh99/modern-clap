import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';
import Nav from 'react-bootstrap/Nav';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import { ChevronLeft, Menu, MapPin, PlusSquare, Edit3 } from 'react-feather';
import { Geo, PencilSquare, TrashFill, CartCheck } from 'react-bootstrap-icons';

import SectionHeading from '../../components/SectionHeading';
import CategoryList from '../../components/CategoryList';
import ServicesList from '../../components/ServicesList';
import TimingSelector from '../../components/TimingSelector';
import Dropdown from 'react-bootstrap/esm/Dropdown';

const SelectServices = () => {
  const activePane = useLocation().hash;

  return (
    <>
      <div className="dv_wrapper dv_book_request">
        <div className="dv_select_service_heading">
          <div className="container">
            <Link to="#!">
              <ChevronLeft size={24} />
              Book Your Request
            </Link>
            <Menu size={24} style={{ float: 'right' }} />
          </div>
        </div>
        <div className="dv_select_service_page">
          <Container>
            <Row>
              <SectionHeading
                title="services"
                subtitle="2 services"
                modal="!"
                linkText="Edit"
              />
              <CategoryList title="Type" />
              <CategoryList title="Category" />
              <ServicesList />
              <div className="dv_divider_in_booking_request" />
            </Row>
            <Row>
              <SectionHeading
                title="timing"
                subtitle="12 Mar, 04 pm"
                modal="!"
                linkText="Edit"
              />
              <TimingSelector />
              <div className="dv_divider_in_booking_request" />
            </Row>
            <Row>
              <SectionHeading
                title="location"
                subtitle="Home"
                modal="!"
                linkText="Edit"
              />
              <div className="dv_add_divider">
                <TabContainer
                  defaultActiveKey="#saveaddress"
                  activeKey={activePane}
                >
                  <Nav
                    as="ul"
                    variant="tabs"
                    className="dv_nav_tabs"
                    defaultActiveKey="#saveaddress"
                  >
                    <Nav.Item as="li">
                      <Nav.Link href="#saveaddress">
                        <MapPin size={24} />
                        Address
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#addnewaddress">
                        <PlusSquare size={24} />
                        New
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#addcurrentlocation">
                        <Geo size="1em" />
                        Geolocation
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  {/* Tab panes */}
                  <TabContent className="dv_nav_tabs_content">
                    <TabPane eventKey="#saveaddress">
                      <div className="dv_store_address">
                        <span
                          style={{ display: 'block', padding: '10px 0 0 0' }}
                        >
                          Select a address from previous addresses{' '}
                        </span>
                        <div className="dv_payment_selection">
                          <Row style={{ width: '100%', margin: 0 }}>
                            <Col
                              as={FormCheck}
                              type="checkbox"
                              custom
                              lg={12}
                              md={12}
                              sm={12}
                              xs={12}
                              className="dv_save_address_list"
                            >
                              <FormCheck.Input
                                type="checkbox"
                                id="add1"
                                name="cash"
                                defaultChecked
                              />
                              <FormCheck.Label htmlFor="add1">
                                <span className="dv_address_type">other</span>
                                m-02 buhaleeba plaza, al rigga road, near to al
                                rigga station, dubai, UAE
                              </FormCheck.Label>
                              <Dropdown className="dv_about_provider_dropdown">
                                <Dropdown.Toggle as={Edit3} size={24} />
                                <Dropdown.Menu className="dv_about_provider_dropdown_menu">
                                  <Dropdown.Item href="#">
                                    <PencilSquare
                                      size={20}
                                      style={{
                                        color: '#2874f0',
                                        float: 'left',
                                        margin: '0 15px 0 0'
                                      }}
                                    />
                                    Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#">
                                    <TrashFill
                                      size={20}
                                      style={{
                                        color: '#ff4a4a',
                                        float: 'left',
                                        margin: '0 15px 0 0'
                                      }}
                                    />
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </Col>
                            <div className="dv_divider_in_booking_request" />
                            <Col
                              as={FormCheck}
                              lg={12}
                              md={12}
                              sm={12}
                              xs={12}
                              custom
                              type="checkbox"
                              className="dv_save_address_list"
                            >
                              <FormCheck.Input
                                type="checkbox"
                                id="add1"
                                name="cash"
                                defaultChecked
                              />
                              <FormCheck.Label htmlFor="add1">
                                <span className="dv_address_type">home</span>
                                m-02 saraya plaza, al muraqabat road, near to al
                                muraqabat metra, dubai, UAE
                              </FormCheck.Label>
                              <Dropdown className="dv_about_provider_dropdown">
                                <Dropdown.Toggle as={Edit3} size={24} />
                                <Dropdown.Menu className="dv_about_provider_dropdown_menu">
                                  <Dropdown.Item href="#">
                                    <PencilSquare
                                      size={20}
                                      style={{
                                        color: '#2874f0',
                                        float: 'left',
                                        margin: '0 15px 0 0'
                                      }}
                                    />
                                    Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#">
                                    <TrashFill
                                      size={20}
                                      style={{
                                        color: '#ff4a4a',
                                        float: 'left',
                                        margin: '0 15px 0 0'
                                      }}
                                    />
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </Col>
                            <div className="dv_divider_in_booking_request" />
                            <Col
                              as={FormCheck}
                              type="checkbox"
                              custom
                              lg={12}
                              md={12}
                              sm={12}
                              xs={12}
                              className="dv_save_address_list"
                            >
                              <FormCheck.Input
                                type="checkbox"
                                id="add1"
                                name="cash"
                                defaultChecked
                              />
                              <FormCheck.Label htmlFor="add1">
                                <span className="dv_address_type">home</span>
                                m-02 buhaleeba plaza, al rigga road, near to al
                                rigga station, dubai, UAE{' '}
                              </FormCheck.Label>
                              <Dropdown className="dv_about_provider_dropdown">
                                <Dropdown.Toggle as={Edit3} size={24} />
                                <Dropdown.Menu className="dv_about_provider_dropdown_menu">
                                  <Dropdown.Item href="#">
                                    <PencilSquare
                                      size={20}
                                      style={{
                                        color: '#2874f0',
                                        float: 'left',
                                        margin: '0 15px 0 0'
                                      }}
                                    />
                                    Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#">
                                    <TrashFill
                                      size={20}
                                      style={{
                                        color: '#ff4a4a',
                                        float: 'left',
                                        margin: '0 15px 0 0'
                                      }}
                                    />
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane
                      eventKey="#addnewaddress"
                      className="addnewaddress"
                    >
                      <span
                        style={{
                          display: 'block',
                          padding: '10px 0',
                          margin: '0 0 0 -12px'
                        }}
                      >
                        Add New addres or search location{' '}
                      </span>
                      <Row>
                        <Col
                          lg={6}
                          md={12}
                          sm={12}
                          xs={12}
                          className="dv_padding_left_0"
                        >
                          <FormControl
                            type="text"
                            id="searchlocation"
                            className="dv_use_current_location"
                            placeholder="Search New Location"
                          />
                          <iframe
                            className="dv_location_map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.84785662167!2d54.94754379834026!3d25.075707331290918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1592160141041!5m2!1sen!2sae"
                            title="map"
                            style={{ border: 0 }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                            frameBorder={0}
                          />
                        </Col>
                        <Col
                          lg={6}
                          md={12}
                          sm={12}
                          xs={12}
                          className="dv_padding_right_0"
                        >
                          {/*  <button type="button" class="btn btn-default dv_use_current_location">
                                                    <svg style="width: 20px; margin: 0 15px 0 0;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                    Use Current Location
                                                </button> */}
                          <div className="dv_location_wrapper">
                            <Row>
                              <Col lg={6} md={12} sm={12} xs={12}>
                                <FormControl
                                  type="text"
                                  className="dv_all_location_feild_input dv_error_for_input"
                                  placeholder="Flat No"
                                  id="FlatNo"
                                />
                              </Col>
                              <Col lg={6} md={12} sm={12} xs={12}>
                                <FormControl
                                  type="text"
                                  className="dv_all_location_feild_input"
                                  placeholder="Building Name"
                                  id="BuildingName"
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={6} md={12} sm={12} xs={12}>
                                <FormControl
                                  type="text"
                                  className="dv_all_location_feild_input"
                                  placeholder="Residence area"
                                  id="Residence"
                                />
                              </Col>
                              <Col lg={6} md={12} sm={12} xs={12}>
                                <FormControl
                                  type="text"
                                  className="dv_all_location_feild_input"
                                  placeholder="Near Landmark"
                                  id="Nearlanmark"
                                />
                              </Col>
                            </Row>
                            <Row
                              as="ul"
                              className="dv_select_location_Address_type"
                            >
                              <Col
                                as={FormCheck}
                                custom
                                lg={4}
                                md={4}
                                sm={4}
                                xs={4}
                                type="checkbox"
                              >
                                <FormCheck.Input
                                  type="checkbox"
                                  id="Home"
                                  name="example1"
                                />
                                <FormCheck.Label htmlFor="Home">
                                  Home{' '}
                                </FormCheck.Label>
                              </Col>
                              <Col
                                as={FormCheck}
                                custom
                                lg={4}
                                md={4}
                                sm={4}
                                xs={4}
                                type="checkbox"
                              >
                                <FormCheck.Input
                                  type="checkbox"
                                  id="Office"
                                  name="example1"
                                />
                                <FormCheck.Label htmlFor="Office">
                                  Office{' '}
                                </FormCheck.Label>
                              </Col>
                              <Col
                                as={FormCheck}
                                custom
                                lg={4}
                                md={4}
                                sm={4}
                                xs={4}
                                type="checkbox"
                              >
                                <FormCheck.Input
                                  type="checkbox"
                                  id="Other"
                                  name="example1"
                                />
                                <FormCheck.Label htmlFor="Other">
                                  Other{' '}
                                </FormCheck.Label>
                              </Col>
                            </Row>
                            <div className="row dv_md_margin_0">
                              <div className="lg={12} md={12} sm={12} xs={12} col-12 dv_padding_right_0">
                                <button
                                  type="button"
                                  className="btn btn-default dv_save_address_location"
                                >
                                  Save Address
                                </button>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                    {/* <div id="addcurrentlocation" class="tab-pane fade">
                                      <h3>Menu 1</h3>
                                      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div> */}
                  </TabContent>
                </TabContainer>
              </div>
              <div className="dv_divider_in_booking_request" />
            </Row>
            <Row>
              <SectionHeading
                title="Payment"
                subtitle="AED 114"
                modal="!"
                linkText="Edit"
              />
              <div className="dv_payment_selection">
                <Row style={{ width: '100%', margin: 0 }}>
                  <Col as={FormCheck} custom lg={12} md={12} sm={12} xs={12}>
                    <FormCheck.Input
                      type="checkbox"
                      custom
                      id="cash"
                      name="cash"
                      defaultChecked
                    />
                    <FormCheck.Label custom htmlFor="cash">
                      Paying through cash after service{' '}
                    </FormCheck.Label>
                  </Col>
                  <div className="dv_divider_in_booking_request" />
                  <Col as={FormCheck} custom lg={12} md={12} sm={12} xs={12}>
                    <FormCheck.Input
                      type="checkbox"
                      custom
                      id="card"
                      name="card"
                    />
                    <FormCheck.Label custom htmlFor="card">
                      Paying through card after service
                    </FormCheck.Label>
                  </Col>
                  <div className="dv_divider_in_booking_request" />
                  {/* 
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="cardonline" name="cardonline">
                    <label class="custom-control-label" for="cardonline">Add Cards and Pay through Online  </label>
                </div> */}
                </Row>
              </div>
              <div className="dv_view_cart_visible">
                <ul>
                  <li>
                    Total : 5 services <span>AED 120</span>
                  </li>
                  <li>
                    VAT 5% : <span>AED 6</span>
                  </li>
                  <li>
                    Discount : <span>AED 12</span>
                  </li>
                  <li>
                    Grand Total : <span>AED 114</span>
                  </li>
                </ul>
              </div>
              <div className="dv_payment_selection">
                <Row style={{ width: '100%', margin: 0 }}>
                  <Col as={FormCheck} custom lg={12} md={12} sm={12} xs={12}>
                    <FormCheck.Input
                      type="checkbox"
                      custom
                      id="iamsure"
                      defaultChecked
                    />
                    <FormCheck.Label custom htmlFor="iamsure">
                      I am surely want to book this service and with this i am
                      accepting our{' '}
                      <a
                        style={{ color: '#282828', fontWeight: 800 }}
                        href="#!"
                      >
                        Terms &amp; Condition.{' '}
                      </a>{' '}
                    </FormCheck.Label>
                  </Col>
                </Row>
              </div>
              <div className="dv_divider_in_booking_request" />
            </Row>
          </Container>
        </div>
      </div>
      <div className="dv_continue_next">
        <Container>
          <ul>
            <li>
              <Link to="#!">
                <CartCheck size={20} style={{ margin: '-4px 5px 0 0' }} />
                cart - 15
              </Link>
            </li>
            <li>
              <Link to="#!">Next </Link>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
};

export default SelectServices;
