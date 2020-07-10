import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Blogs = () => {
  return (
    <div className="dv_wrapper">
      <Header
        title="Blog"
        desc="A blog is a discussion or informational data published on the Web"
      />

      <div className="dv_content">
        <div className="dv_terms_conditions">
          <Container>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <div className="dv_blog_cards">
                  <Link to="#!">
                    <img src="images/blog-list.jpg" alt="" title />
                    <div className="dv_blog_heading">blog heading text</div>
                    <p className="dv_blog_p">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod..!
                    </p>
                    <span className="dv_blog_date">12/12/2020</span>
                  </Link>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div className="dv_blog_cards">
                  <Link to="#!">
                    <img src="images/blog-list.jpg" alt="" title />
                    <div className="dv_blog_heading">blog heading text</div>
                    <p className="dv_blog_p">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod..!
                    </p>
                    <span className="dv_blog_date">12/12/2020</span>
                  </Link>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div className="dv_blog_cards">
                  <Link to="#!">
                    <img src="images/blog-list.jpg" alt="" title />
                    <div className="dv_blog_heading">blog heading text</div>
                    <p className="dv_blog_p">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod..!
                    </p>
                    <span className="dv_blog_date">12/12/2020</span>
                  </Link>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div className="dv_blog_cards">
                  <Link to="#!">
                    <img src="images/blog-list.jpg" alt="" title />
                    <div className="dv_blog_heading">blog heading text</div>
                    <p className="dv_blog_p">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod..!
                    </p>
                    <span className="dv_blog_date">12/12/2020</span>
                  </Link>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div className="dv_blog_cards">
                  <Link to="#!">
                    <img src="images/blog-list.jpg" alt="" title />
                    <div className="dv_blog_heading">blog heading text</div>
                    <p className="dv_blog_p">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod..!
                    </p>
                    <span className="dv_blog_date">12/12/2020</span>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
