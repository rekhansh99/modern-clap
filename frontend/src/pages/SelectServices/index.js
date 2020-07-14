import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import { ChevronLeft, Menu, MapPin, PlusSquare } from 'react-feather';
import { Geo, CartCheck } from 'react-bootstrap-icons';

import MenuModal from '../../components/Menu';
import SectionHeading from '../../components/SectionHeading';
import CategoryList from '../../components/CategoryList';
import ServicesList from '../../components/ServicesList';
import TimingSelector from '../../components/TimingSelector';
import CartModal from '../../components/modals/SelectServices/Cart';
import SelectAddress from '../../components/SelectAddress';
import NewAddress from '../../components/NewAddress';
import Payment from '../../components/Payment';

const SelectServices = () => {
  document.title = 'Services | Modern clap';

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const activePane = useLocation().hash || '#saveaddress';

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
                  activeKey={activePane || '#saveaddress'}
                >
                  <Nav
                    as="ul"
                    variant="tabs"
                    className="dv_nav_tabs"
                    defaultActiveKey="#saveaddress"
                  >
                    <Nav.Item as="li">
                      <Nav.Link
                        as={Link}
                        to="#saveaddress"
                        eventKey="#saveaddress"
                      >
                        <MapPin size={24} />
                        Address
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link
                        as={Link}
                        to="#addnewaddress"
                        eventKey="#addnewaddress"
                      >
                        <PlusSquare size={24} />
                        New
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link
                        as={Link}
                        to="#addcurrentlocation"
                        eventKey="#addcurrentlocation"
                      >
                        <Geo size="1em" />
                        Geolocation
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  {/* Tab panes */}
                  <TabContent className="dv_nav_tabs_content">
                    <TabPane eventKey="#saveaddress">
                      <SelectAddress />
                    </TabPane>
                    <TabPane
                      eventKey="#addnewaddress"
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
              <div className="dv_divider_in_booking_request" />
            </Row>
            <Row>
              <SectionHeading
                title="Payment"
                subtitle="AED 114"
                modal="!"
                linkText="Edit"
              />
              <Payment />
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
              <Link to="#!" onClick={() => setCartOpen(true)}>
                <CartCheck size={20} style={{ margin: '-4px 5px 0 0' }} />
                cart - 15
              </Link>
            </li>
            <li>
              <Link to="/booking-details">Next </Link>
            </li>
          </ul>
        </Container>
      </div>

      <MenuModal open={menuOpen} showMenu={setMenuOpen} />
    </>
  );
};

export default SelectServices;
