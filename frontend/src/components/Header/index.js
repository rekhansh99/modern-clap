import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

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
    <header className="dv_about_us_page">
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
          <p className="dv_home_Service_content_p">{this.props.desc + ' '}</p>
        </Container>
      </div>

      <Menu open={this.state.menuOpen} showMenu={this.showMenu} />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Header;
