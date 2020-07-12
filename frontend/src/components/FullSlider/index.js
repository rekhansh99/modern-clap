import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import OwlCarousel from 'react-owl-carousel-autoheight';

import 'owl.carousel/dist/assets/owl.carousel.css';

const FullSlider = props => {
  const imagesJSX = props.images.map((image, i) => (
    <div className="item dv_home_page_slider_item" key={i}>
      <Link to="#!">
        {/* for mobile version we will use diffrent img tag */}
        <img src={image} alt="Full slider" />
      </Link>
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
              "<img src='/images/chevron-left.svg'>",
              "<img src='/images/chevron-right.svg'>"
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

FullSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default FullSlider;
