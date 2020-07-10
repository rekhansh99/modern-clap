import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import OwlCarousel from 'react-owl-carousel-autoheight';

import 'owl.carousel/dist/assets/owl.carousel.css';

const RepeatSlider = props => {
  const sliderItemsJSX = props.items.map((item, i) => (
    <div className="item" key={i}>
      <Link to={item.link}>
        <img className="owlsliderimg" src={item.src} alt={item.alt} />
        <div className="dv_img_title">{item.title}</div>
      </Link>
    </div>
  ));

  return (
    <div className="dv_repeat_slider_wrapper">
      <Container>
        <h3 className="dv_repeat_slider_heading">{props.heading}</h3>
        <p className="dv_repeat_slider_para">{props.desc}</p>
        <OwlCarousel
          items={3}
          className="owl-theme dv_home_slider"
          // autoHeight={true}
          // autoWidth={true}
          nav={true}
          loop={true}
          navClass={[
            'owl-prev dv_sploffer_owl_prev',
            'owl-next dv_sploffer_owl_next'
          ]}
          margin={15}
          navText={[
            "<img src='/images/chevron-left.svg'>",
            "<img src='/images/chevron-right.svg'>"
          ]}
          dots={false}
          responsive={{
            320: {
              items: 1
            },
            480: {
              items: 1
            },
            600: {
              items: 2
            },
            991: {
              items: 3
            }
          }}
        >
          {sliderItemsJSX}
        </OwlCarousel>
      </Container>
    </div>
  );
};

RepeatSlider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      src: PropTypes.string,
      title: PropTypes.string,
      alt: ''
    })
  ).isRequired,
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default RepeatSlider;
