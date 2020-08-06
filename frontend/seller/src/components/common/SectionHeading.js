import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const SectionHeading = ({ title, active, setActive, changed, onSubmit }) => {
  return (
    <h4 className="view_request_title">
      {title}
      {active ? (
        changed && onSubmit && (
          <div className="float-right dv_setting_save_btn_wrapper">
            <button
              type="button"
              className="btn btn-sm text-dark"
              onClick={() => setActive(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={onSubmit}
            >
              Save
            </button>
          </div>
        )
      ) : (
        <Link
          to="#!"
          className="float-right"
          onClick={() => setActive(true)}
        >
          edit
        </Link>
      )}
    </h4>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  changed: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func
};

export default SectionHeading;
