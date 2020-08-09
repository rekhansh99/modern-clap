import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination, Autoplay]);

const NewSlider = props => {
  const sliderItemsJSX = props.items.map((item, i) => {
    return (
      <SwiperSlide key={i}>
        <li className="dv_why_modernclp_ul_li item">
          <item.svg className="dv_why_modernclp_ulsvg" />
          <div className="dv_right_txt_why">
            <span>{item.title}</span>
            <p>{item.desc}</p>
          </div>
        </li>
      </SwiperSlide>
    );
  });

  return (
    <div className="dv_who_we_are">
      <Container>
        <h4 className="dv_why_modernclp_h4">{props.heading}</h4>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true, el: '.pagination_dots' }}
          autoplay={true}
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
          <div className="pagination_dots text-center"></div>
        </Swiper>
      </Container>
    </div>
  );
};

NewSlider.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default NewSlider;