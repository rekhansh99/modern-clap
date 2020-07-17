import React from 'react';
import PropTypes from 'prop-types';

const NumberCard = props => {
  return (
    <div className="card mb-4">
      <div className="card-body">{props.title}</div>
      <span className="dv_card_value_dashboard">
        {props.icon}
        {props.value}
      </span>
    </div>
  );
};

NumberCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.object.isRequired
};

export default NumberCard;
