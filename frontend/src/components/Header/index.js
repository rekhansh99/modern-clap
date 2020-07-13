import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Menu, ChevronDown } from 'react-feather';

import { ReactComponent as India } from '../../svgs/india.svg';

import MenuModal from '../Menu';
import LocationModal from '../../components/modals/Landing/Location';

class Header extends React.Component {
  state = {
    fixed: false,
    menuOpen: false,
    openLocationModal: false
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    this.setState({ fixed: window.scrollY >= 100 });
  };

  showMenu = show => {
    this.setState({ menuOpen: show });
  };

  render = () => (
    <header className={this.props.headerClassName}>
      <Navbar
        expand="sm"
        variant="none"
        className={classnames('dv_fixed_navbar', {
          dv_fixed_menu: this.state.fixed
        })}
      >
        <Container>
          {/* Brand */}
          <Navbar.Brand
            as={Link}
            className={classnames('dv_logo_icon', {
              dv_menu_scroll_style: this.state.fixed
            })}
            to="/"
          >
            ModernClap
          </Navbar.Brand>
          {/* Links */}
          <Nav as="ul" className="float-right dv_menu_top">
            <Nav.Item as="li">
              <a
                style={{ display: 'none' }}
                className="dv_sm_show"
                href="/booking"
              >
                book now
              </a>
              <Nav.Link
                href="#"
                className={classnames({
                  dv_menu_scroll_style: this.state.fixed
                })}
                onClick={() => this.showMenu(true)}
              >
                Login <Menu size={24} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <div className="dv_heading_search">
        <Container>
          <h1 className="dv_home_Service_content">{this.props.title}</h1>
          <p className="dv_home_Service_content_p">{this.props.desc}</p>
          {this.props.bookNow ? (
            <Link to="#" className="dv_book_now_service">
              book now
            </Link>
          ) : (
            ''
          )}
          {this.props.search ? (
            <div className="dv_drp_search">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text
                    className="dv_input_text_group"
                    onClick={() => this.setState({ openLocationModal: true })}
                  >
                    <India width={15} style={{ margin: '0 15px 0 0' }} />
                    Mumbai
                    <ChevronDown className="dv_arrow_down_search" size={24} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  id="searchservices"
                  className="dv_group_search_input"
                  placeholder="Search for a service"
                />
              </InputGroup>
            </div>
          ) : (
            ''
          )}
        </Container>
      </div>

      <MenuModal open={this.state.menuOpen} showMenu={this.showMenu} />
      <LocationModal
        isOpen={this.state.openLocationModal}
        close={() => this.setState({ openLocationModal: false })}
      />
    </header>
  );
}

Header.propTypes = {
  headerClassName: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  search: PropTypes.bool,
  bookNow: PropTypes.bool
};

Header.defaultProps = {
  headerClassName: 'dv_about_us_page',
  search: false,
  bookNow: false
};

export default Header;
