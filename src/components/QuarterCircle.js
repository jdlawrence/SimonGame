import React, { Component, PropTypes } from 'react';

class QuarterCircle extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.pushPlay(this.props.pathData.color);
    this.props.playSequence();
  }
  render() {
    let active = this.props.QCState[this.props.pathData.color];
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
        onMouseEnter={() => this.props.toggleColor(this.props.pathData.color)}
        onMouseLeave={() => this.props.toggleColor(this.props.pathData.color)}
      />
    );
  }
}

QuarterCircle.propTypes = {
  pathData: PropTypes.object.isRequired
};

export default QuarterCircle;