import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { ChevronLeft, ChevronRight } from 'react-feather';

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const FullSlider = () => {
  const images = [
    '/images/slider.jpg',
    '/images/slider.jpg',
    '/images/slider.jpg'
  ];
  const imagesJSX = images.map((image, i) => (
    <SwiperSlide key={i}>
      <div className="item dv_home_page_slider_item">
        <Link to="#!">
          {/* for mobile version we will use diffrent img tag */}
          <img src={image} alt="" />
        </Link>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="dv_home_full_slider">
      <Container>
        <div className="dv_home_slider_card">
          <Swiper
            loop={true}
            autoplay={true}
            navigation={{
              nextEl: '.dv_sploffer_owl_next',
              prevEl: '.dv_sploffer_owl_prev'
            }}
          >
            {imagesJSX}
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
        </div>
      </Container>
    </div>
  );
};

export default FullSlider;
