import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Menu } from 'react-feather';

import MenuModal from '../Menu';
import SearchBar from '../Search';

const items = [
  'dubai',
  'Daira',
  'Abu Dhabi',
  'Sharjha',
  'JLT',
  'C++',
  'Clojure',
  'COBOL',
  'ColdFusion',
  'Erlang',
  'Fortran',
  'Groovy',
  'Haskell',
  'Java',
  'JavaScript',
  'Lisp',
  'Perl',
  'PHP',
  'Python',
  'Ruby',
  'Scala',
  'Scheme',
  'Task'
];

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
    if (window.scrollY >= 100 ? !this.state.fixed : this.state.fixed)
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
              <Link
                style={{ display: 'none' }}
                className="dv_sm_show"
                to="/book-now"
              >
                book now
              </Link>
              <Nav.Link
                as={Link}
                to="#"
                className={classnames({
                  dv_menu_scroll_style: this.state.fixed
                })}
                onClick={e => {
                  e.preventDefault();
                  this.showMenu(true);
                }}
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
            <Link to="/book-now" className="dv_book_now_service">
              book now
            </Link>
          ) : (
            ''
          )}
          {this.props.search ? <SearchBar items={items} /> : ''}
        </Container>
      </div>

      <MenuModal open={this.state.menuOpen} showMenu={this.showMenu} />
    </header>
  );
}

Header.propTypes = {
  headerClassName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  search: PropTypes.bool,
  bookNow: PropTypes.bool
};

Header.defaultProps = {
  search: false,
  bookNow: false
};

export default Header;
