import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { ReactComponent as Tick } from '../../svgs/tick.svg';

const SectionHeading = ({ title, subtitle, modal, linkText }) => {
  return (
    <span className="dv_section_heading">
      <Tick />
      {title} <span className="dv_sm_overview"> {subtitle}</span>
      <Link to={'#' + modal} replace className="dv_edit_for_all">
        {linkText}
      </Link>
    </span>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  modal: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};

export default SectionHeading;
