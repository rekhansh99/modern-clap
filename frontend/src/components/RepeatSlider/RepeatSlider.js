import React from 'react';
import PropTypes from 'prop-types';

const RepeatSlider = props => {
  const sliderItemsJSX = props.items.map((item, i) => (
    <div className="item" key={i}>
      <a href={item.link}>
        <img className="owlsliderimg" src={item.src} alt="" />
        <div className="dv_img_title">{item.title}</div>
      </a>
    </div>
  ));

  return (
    <div className="dv_repeat_slider_wrapper">
      <div className="container">
        <h3 className="dv_repeat_slider_heading">{props.heading}</h3>
        <p className="dv_repeat_slider_para">{props.desc}</p>
        <div className="dv_home_slider owl-carousel owl-theme">
          {sliderItemsJSX}
        </div>
      </div>
    </div>
  );
};

RepeatSlider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      src: PropTypes.string,
      title: PropTypes.string
    })
  ).isRequired,
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default RepeatSlider;
