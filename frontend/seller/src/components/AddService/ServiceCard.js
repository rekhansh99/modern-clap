import React from 'react';
import PropTypes from 'prop-types';

import { Edit2, Check } from 'react-feather';

const ServiceCard = ({ title }) => {
  return (
    <div className="dv_per_service_wrapper">
      <h4
        style={{
          margin: 0,
          fontSize: '14px',
          textAlign: 'left',
          textTransform: 'uppercase',
          borderBottom: '1px solid #d7d7d7',
          display: 'block',
          padding: '15px',
          width: '100%',
          fontFamily: 'Segoe ui bold',
          borderTop: '1px solid #d7d7d7',
          background: '#ececec'
        }}
      >
        {title}
        <div className="dv_status_in_list float-right">
          <label className="form-switch">
            <input type="checkbox" defaultChecked />
            <i />
          </label>
        </div>
      </h4>
      <div className="row p-3">
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <div className="input-group mb-3">
            <label>Cut Price - AED</label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              placeholder="Enter"
              defaultValue={160}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                style={{ height: '45px' }}
                type="submit"
              >
                <Edit2 height={24} width={15} />
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <div className="input-group mb-3">
            <label>Sale Price - AED </label>
            <input
              type="text"
              className="form-control dv_all_inputs"
              placeholder="Enter"
              defaultValue={120}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                style={{ height: '45px' }}
                type="submit"
              >
                <Check height={24} width={15} />
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <div className="form-group">
            <label>% OFF </label>
            <input
              disabled
              type="text"
              className="form-control dv_all_inputs"
              name
              placeholder="%"
              defaultValue="23% OFF"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired
};

export default ServiceCard;
