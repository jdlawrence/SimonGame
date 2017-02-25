import React, { Component, PropTypes } from 'react';

const QuarterCircle = ({pathData}) => {
  let {path, stroke, fill, active} = pathData;
  let style = {
    opacity: active ? 1.0 : 0.5
  };
  return (
        <path d={path}                
              stroke={stroke} 
              fill={fill}
              style={style}
        />
  );
};

QuarterCircle.propTypes = {
  pathData: PropTypes.object.isRequired
};

export default QuarterCircle;