import React from 'react';
import PropTypes from 'prop-types';

const AreaChart = ({ id }) => {
  return (
    <div className="card-body">
      <div className="chartjs-size-monitor">
        <div className="chartjs-size-monitor-expand">
          <div className />
        </div>
        <div className="chartjs-size-monitor-shrink">
          <div className />
        </div>
      </div>
      <canvas
        id={id}
        width={903}
        height={180}
        style={{ display: 'block', width: '903px', height: '180px' }}
        className="chartjs-render-monitor"
      />
    </div>
  );
};

AreaChart.propTypes = {
  id: PropTypes.string.isRequired
};

export default AreaChart;
