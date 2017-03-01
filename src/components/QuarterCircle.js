import React, { Component, PropTypes } from 'react';

const QuarterCircle = ({pathData}) => {
  let {path, stroke, fill, active} = pathData;
  let style = {
    opacity: active ? 1.0 : 0.5
  };
  return (
<<<<<<< HEAD
    <path d={path}                
          stroke={stroke} 
          fill={fill}
    />
=======
        <path d={path}                
              stroke={stroke} 
              fill={fill}
              style={style}
        />
>>>>>>> c465fe6443fb031881b1726890b1734665d87102
  );
};

QuarterCircle.propTypes = {
  pathData: PropTypes.object.isRequired
};

export default QuarterCircle;