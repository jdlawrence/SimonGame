import React, { Component, PropTypes } from 'react';

class QuarterCircle extends Component {
  render() {
    console.log(this.props.pathData.color); 
    console.log(this.props.QCState);
    let active = this.props.QCState[this.props.pathData.color];
    console.log('objectacit', active);
    let { path, stroke, fill } = this.props.pathData;
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
  }
}

QuarterCircle.propTypes = {
  pathData: PropTypes.object.isRequired
};

export default QuarterCircle;