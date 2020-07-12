import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { ChevronLeft, ChevronRight } from 'react-feather';

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const RepeatSlider = props => {
  const sliderItemsJSX = props.items.map((item, i) => (
    <SwiperSlide key={i}>
      <div className="item">
        <Link to={item.link}>
          <img className="owlsliderimg" src={item.src} alt={item.alt} />
          <div className="dv_img_title">{item.title}</div>
        </Link>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="dv_repeat_slider_wrapper">
      <Container>
        <h3 className="dv_repeat_slider_heading">{props.heading}</h3>
        <p className="dv_repeat_slider_para">{props.desc}</p>
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: '.dv_sploffer_owl_next',
            prevEl: '.dv_sploffer_owl_prev'
          }}
          breakpoints={{
            320: {
              slidesPerView: 1
            },
            480: {
              slidesPerView: 1
            },
            600: {
              slidesPerView: 2
            },
            991: {
              slidesPerView: 3
            }
          }}
        >
          {sliderItemsJSX}
          <div className="owl-nav">
            <button
              slot="container-end"
              type="button"
              className="dv_sploffer_owl_prev"
            >
              <ChevronLeft />
            </button>
            <button
              slot="container-end"
              type="button"
              className="dv_sploffer_owl_next"
            >
              <ChevronRight />
            </button>
          </div>
        </Swiper>
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
