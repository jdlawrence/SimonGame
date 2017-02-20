import React, { Component, PropTypes } from 'react';

const QuarterCircle = ((props) => {
  console.log('**************', props.size[0]);
  return (
    <div>
      hello World!
      <svg width="200" height="200">
        <circle cx={props.size[0]} cy="100" r="100"/>
        <path d="M125 50 a 50 50, 0, 0, 0, -50 50
                    l50 0 Z                 
            " stroke="black" fill="green"/>
      </svg>
    </div>
  );
});

export default QuarterCircle;