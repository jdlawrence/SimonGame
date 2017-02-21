import React, { Component, PropTypes } from 'react';

// const QuarterCircle = ({path, stroke, fill}) => {
const QuarterCircle = ({pathData}) => {
  // console.log('**************', path);
  let {path, stroke, fill} = pathData;
  return (
        <path d={path}                
              stroke={stroke} 
              fill={fill}
        />
  );
};

QuarterCircle.propTypes = {
  pathData: PropTypes.object.isRequired
};

export default QuarterCircle;