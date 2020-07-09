import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import Menu from '../Menu';

class Header extends React.Component {
  state = {
    fixed: false,
    menuOpen: false
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
        className={classnames('dv_fixed_navbar', {
          dv_fixed_menu: this.state.fixed
        })}
      >
        <Container>
          {/* Brand */}
          <Navbar.Brand
            className={classnames('dv_logo_icon', {
              dv_menu_scroll_style: this.state.fixed
            })}
            href="/"
          >
            ModernClap
          </Navbar.Brand>
          {/* Links */}
          <Nav as="ul" className="float-right dv_menu_top">
            <Nav.Item as="li">
              <a
                style={{ display: 'none' }}
                className="dv_sm_show"
                href="/book-now"
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
                Login
                <Image
                  src="images/svgs/three-bars.svg"
                  width="24"
                  height="24"
                />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <div className="dv_heading_search">
        <Container>
          <h1 className="dv_home_Service_content">{this.props.title}</h1>
          <p className="dv_home_Service_content_p">{this.props.desc}</p>
          {this.props.search ? (
            <div className="dv_drp_search">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text
                    className="dv_input_text_group"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    <img
                      src="/images/svgs/india.svg"
                      alt=""
                      width="15px"
                      style={{ margin: '0 15px 0 0' }}
                    />
                    Mumbai
                    <svg
                      className="dv_arrow_down_search"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
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

      <Menu open={this.state.menuOpen} showMenu={this.showMenu} />
    </header>
  );
}

Header.propTypes = {
  headerClassName: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.oneOf(PropTypes.string, PropTypes.element).isRequired,
  search: PropTypes.bool
};

Header.defaultProps = {
  headerClassName: 'dv_about_us_page',
  search: false
};

export default Header;
