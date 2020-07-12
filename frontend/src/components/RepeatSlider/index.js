import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ItemsCarousel from 'react-items-carousel';
import { ChevronLeft, ChevronRight } from 'react-feather';

const RepeatSlider = props => {
  const [activeItem, setActiveItem] = useState(0);

  const sliderItemsJSX = props.items.map((item, i) => (
    <div className="item" key={i}>
      <Link to={item.link}>
        <img
          className="owlsliderimg"
          height={199}
          src={item.src}
          alt={item.alt}
        />
        <div className="dv_img_title">{item.title}</div>
      </Link>
    </div>
  ));

  return (
    <div className="dv_repeat_slider_wrapper">
      <Container>
        <h3 className="dv_repeat_slider_heading">{props.heading}</h3>
        <p className="dv_repeat_slider_para">{props.desc}</p>
        <ItemsCarousel
          activeItemIndex={activeItem}
          requestToChangeActive={setActiveItem}
          numberOfCards={3}
          infiniteLoop={true}
          gutter={15}
          showSlither={true}
          slidesToScroll={1}
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
            itemsInnerWrapper: 'position-relative',
            itemWrapper: 'w-auto position-relative',
            rightChevronWrapper: 'p-2',
            leftChevronWrapper: 'p-2'
          }}
        >
          {sliderItemsJSX}
        </ItemsCarousel>
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
