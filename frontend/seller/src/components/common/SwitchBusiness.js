import React from 'react';
import PropTypes from 'prop-types';

const SwitchBusiness = ({ title, options }) => {
  const optionsJSX = options.map(option => (
    <option key={option}>{option}</option>
  ));

  return (
    <div className="dv_switch_to_another_business">
      {title}
      <select className="form-control dv_all_inputs">{optionsJSX}</select>
    </div>
  );
};

SwitchBusiness.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default SwitchBusiness;
