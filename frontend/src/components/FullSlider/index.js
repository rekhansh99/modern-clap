import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import ItemsCarousel from 'react-items-carousel';
import { ChevronLeft, ChevronRight } from 'react-feather';

const FullSlider = () => {
  const [activeItem, setActiveItem] = useState(0);

  const images = [
    '/images/slider.jpg',
    '/images/slider.jpg',
    '/images/slider.jpg'
  ];
  const imagesJSX = images.map((image, i) => (
    <div className="item dv_home_page_slider_item" key={i}>
      <Link to="#!">
        {/* for mobile version we will use diffrent img tag */}
        <img src={image} alt="" />
      </Link>
    </div>
  ));

  return (
    <div className="dv_home_full_slider">
      <Container>
        <div className="dv_home_slider_card">
          <ItemsCarousel
            activeItemIndex={activeItem}
            requestToChangeActive={setActiveItem}
            numberOfCards={1}
            infiniteLoop={true}
            leftChevron={
              <button type="button" className="dv_sploffer_owl_prev">
                <ChevronLeft />
              </button>
            }
            rightChevron={
              <button type="button" className="dv_sploffer_owl_next">
                <ChevronRight />
              </button>
            }
            classes={{
              rightChevronWrapper: 'p-2',
              leftChevronWrapper: 'p-2'
            }}
          >
            {imagesJSX}
          </ItemsCarousel>
        </div>
      </Container>
    </div>
  );
};

export default FullSlider;
