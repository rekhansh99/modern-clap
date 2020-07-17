import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import { ChevronLeft, Menu, MapPin, PlusSquare } from 'react-feather';
import { Geo, CartCheck } from 'react-bootstrap-icons';

import MenuModal from '../components/common/Menu';
import SectionHeading from '../components/common/SectionHeading';
import CategoryList from '../components/SelectServices/CategoryList';
import ServicesList from '../components/SelectServices/ServicesList';
import TimingSelector from '../components/common/TimingSelector';
import CartModal from '../components/SelectServices/Cart';
import SelectAddress from '../components/SelectServices/SelectAddress';
import NewAddress from '../components/SelectServices/NewAddress';
import Payment from '../components/SelectServices/Payment';

const SelectServices = () => {
  document.title = 'Services | Modern clap';

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [openSection, setOpenSection] = useState(0);
  const [highestReachedSection, setHighestReachedSection] = useState(0);
  const [activeLocationPane, setActiveLocationPane] = useState('');

  return (
    <>
      <div className="dv_wrapper dv_book_request">
        <div className="dv_select_service_heading">
          <Container>
            <Link to="/">
              <ChevronLeft size={24} />
              Book Your Request
            </Link>
            <Menu
              size={24}
              style={{ float: 'right' }}
              onClick={() => setMenuOpen(true)}
            />
          </Container>
        </div>
        <div className="dv_select_service_page">
          <Container>
            <Row>
              <SectionHeading
                title="services"
                subtitle="2 services"
                modal="!"
                onClick={() => setOpenSection(0)}
                linkText={highestReachedSection >= 0 && 'Edit'}
              />
              {openSection === 0 && (
                <React.Fragment>
                  <CategoryList title="Type" />
                  <CategoryList title="Category" />
                  <ServicesList />
                </React.Fragment>
              )}
              <div className="dv_divider_in_booking_request" />
            </Row>
            <Row>
              <SectionHeading
                title="timing"
                subtitle="12 Mar, 04 pm"
                modal="!"
                onClick={() => setOpenSection(1)}
                linkText={highestReachedSection >= 1 && 'Edit'}
              />
              {openSection === 1 && <TimingSelector />}
              <div className="dv_divider_in_booking_request" />
            </Row>
            <Row>
              <SectionHeading
                title="location"
                subtitle="Home"
                modal="!"
                onClick={() => setOpenSection(2)}
                linkText={highestReachedSection >= 2 && 'Edit'}
              />
              {openSection === 2 && (
                <div className="dv_add_divider">
                  <TabContainer
                    activeKey={activeLocationPane}
                    defaultActiveKey="saveaddress"
                  >
                    <Nav
                      as="ul"
                      variant="tabs"
                      className="dv_nav_tabs"
                      activeKey={activeLocationPane}
                      defaultActiveKey="saveaddress"
                    >
                      <Nav.Item as="li">
                        <Nav.Link
                          as={Link}
                          onClick={() => {
                            setActiveLocationPane('saveaddress');
                          }}
                          eventKey="saveaddress"
                        >
                          <MapPin size={24} />
                          Address
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          as={Link}
                          onClick={() => {
                            setActiveLocationPane('addnewaddress');
                          }}
                          eventKey="addnewaddress"
                        >
                          <PlusSquare size={24} />
                          New
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          as={Link}
                          onClick={() => {
                            setActiveLocationPane('addcurrentlocation');
                          }}
                          eventKey="addcurrentlocation"
                        >
                          <Geo size="1em" />
                          Geolocation
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    {/* Tab panes */}
                    <TabContent className="dv_nav_tabs_content">
                      <TabPane eventKey="saveaddress">
                        <SelectAddress />
                      </TabPane>
                      <TabPane
                        eventKey="addnewaddress"
                        className="addnewaddress"
                      >
                        <NewAddress />
                      </TabPane>
                      {/* <div id="addcurrentlocation" class="tab-pane fade">
                      <h3>Menu 1</h3>
                      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div> */}
                    </TabContent>
                  </TabContainer>
                </div>
              )}
              <div className="dv_divider_in_booking_request" />
            </Row>
            <Row>
              <SectionHeading
                title="Payment"
                subtitle="AED 114"
                modal="!"
                onClick={() => setOpenSection(3)}
                linkText={highestReachedSection >= 3 && 'Edit'}
              />
              {openSection === 3 && <Payment />}
              <div className="dv_divider_in_booking_request" />
            </Row>
          </Container>
        </div>
      </div>

      <CartModal isOpen={cartOpen} close={() => setCartOpen(false)} />

      <div className="dv_continue_next">
        <Container>
          <ul>
            <li>
              <Link onClick={() => setCartOpen(true)}>
                <CartCheck size={20} style={{ margin: '-4px 5px 0 0' }} />
                cart - 15
              </Link>
            </li>
            <li>
              {highestReachedSection === 3 ? (
                <Link to="/booking-details">Book Now</Link>
              ) : (
                <Link
                  onClick={() => {
                    highestReachedSection === openSection &&
                      setHighestReachedSection(highestReachedSection + 1);
                    setOpenSection(openSection + 1);
                  }}
                >
                  Next
                </Link>
              )}
            </li>
          </ul>
        </Container>
      </div>

      <MenuModal open={menuOpen} showMenu={setMenuOpen} />
    </>
  );
};

export default SelectServices;
