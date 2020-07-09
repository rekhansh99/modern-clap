import React from 'react';

import Container from 'react-bootstrap/Container';
import OwlCarousel from 'react-owl-carousel-autoheight';

import 'owl.carousel/dist/assets/owl.carousel.css';

const FullSlider = () => {
  const images = [
    '/images/slider.jpg',
    '/images/slider.jpg',
    '/images/slider.jpg'
  ];
  const imagesJSX = images.map((image, i) => (
    <div className="item dv_home_page_slider_item" key={i}>
      <a href="#!">
        {/* for mobile version we will use diffrent img tag */}
        <img src={image} alt="" title />
      </a>
    </div>
  ));

  return (
    <div className="dv_home_full_slider">
      <Container>
        <div className="dv_home_slider_card">
          <OwlCarousel
            items={1}
            className="dv_home_slider_banner"
            nav={true}
            loop={true}
            navClass={[
              'owl-prev dv_home_slider_prev',
              'owl-next dv_home_slider_next'
            ]}
            margin={0}
            navText={[
              "<img src='fonts/feather-icons/chevron-left.svg'>",
              "<img src='fonts/feather-icons/chevron-right.svg'>"
            ]}
            dots={false}
          >
            {imagesJSX}
          </OwlCarousel>
        </div>
      </Container>
    </div>
  );
};

export default FullSlider;
