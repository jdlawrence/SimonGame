import React, { Component, PropTypes } from 'react';

class QuarterCircle extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    // console.log('objecthere', e);
    this.props.pushPlay(this.props.pathData.color);
  }
  render() {
    // console.log(this.props.pathData.color); 
    // console.log(this.props.QCState);
    let active = this.props.QCState[this.props.pathData.color];
    // console.log('objectacit', active);
    let { path, stroke, fill } = this.props.pathData;
    let style = {
      opacity: active ? 1.0 : 0.5
    };
    return (
      <path d={path}
        stroke={stroke}
        fill={fill}
        style={style}
        onClick={this.handleClick}
      />
    );
  }
}

QuarterCircle.propTypes = {
  pathData: PropTypes.object.isRequired
};

export default QuarterCircle;