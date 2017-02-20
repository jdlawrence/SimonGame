import React, { Component, PropTypes } from 'react';

const QuarterCircle = (({pathData, stroke, fill}) => {
  console.log('**************', pathData);
  return (
    <div>
      <svg width="200" height="200">
        <path d={pathData.path}                
              stroke={pathData.stroke} 
              fill={pathData.fill}
        />
      </svg>
    </div>
  );
});

QuarterCircle.propTypes = {
  pathData: PropTypes.array.isRequired,
  stroke: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired
};

export default QuarterCircle;