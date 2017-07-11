import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import QuarterCircle from './QuarterCircle';
import sizeMe from 'react-sizeme';

class GameStatus extends Component {
  constructor(props) {
    super(props);
  }

  handleKey(e) {
    console.log('handle Key pressed', e.charCode);
    switch (e.charCode) {
      case 114:
        this.props.flashQC('red');
        this.props.pushHumanPlay('red');
        break;
      case 103:
        this.props.flashQC('green');
        this.props.pushHumanPlay('green');
        break;
      case 98:
        this.props.flashQC('blue');
        this.props.pushHumanPlay('blue');
        break;
      case 121:
        this.props.flashQC('yellow');
        this.props.pushHumanPlay('yellow');
        break;
    }
  }

  render() {
    var centerX = this.props.size.width / 2 - this.props.size.width / 5;
    var centerY = this.props.size.height / 2;
    let radius = 150;
    let centerMaxRadius = 160;
    let centerOuterRadius = 78;
    let centerInnerRadius = 57;

    var greenData = {
      color: 'green',
      path: [
        'M', centerX, centerY,
        'l', -radius, 0,
        'a', radius, radius, 0, 0, 1, radius, -radius,
        'Z'
      ].join(' '),
      stroke: 'black',
      fill: 'green',
      active: false
    };
    var redData = {
      color: 'red',
      path: [
        'M', centerX, centerY,
        'l', 0, -radius,
        'a', radius, radius, 0, 0, 1, radius, radius,
        'Z'
      ].join(' '),
      stroke: 'black',
      fill: 'red',
      active: false
    };
    var blueData = {
      color: 'blue',
      path: [
        'M', centerX, centerY,
        'l', radius, 0,
        'a', radius, radius, 0, 0, 1, -radius, radius,
        'Z'
      ].join(' '),
      stroke: 'black',
      fill: 'blue',
      active: true
    };
    var yellowData = {
      color: 'yellow',
      path: [
        'M', centerX, centerY,
        'l', 0, radius,
        'a', radius, radius, 0, 0, 1, -radius, -radius,
        'Z'
      ].join(' '),
      stroke: 'black',
      fill: 'yellow',
      active: false
    };

    let verticalBar = {
      path: [
        'M', centerX, centerY - radius,
        'l', 0, radius * 2,
      ].join(' '),
      stroke: 'black',
      strokeWidth: 8
    };
    let horizontalBar = {
      path: [
        'M', centerX - radius, centerY,
        'l', radius * 2, 0,
      ].join(' '),
      stroke: 'black',
      strokeWidth: 8
    };
    return (

      <div className="container" onKeyPress={this.handleKey.bind(this)} tabIndex="1" ref="main">
        <div className="controls show-border">Controls</div>
        <div className="gameboard show-border" >
          <svg width="100%" height="100%">
            <circle cx={centerX} cy={centerY} r={centerMaxRadius} fill="black" />
            <QuarterCircle pathData={greenData} {...this.props} />
            <QuarterCircle pathData={redData} {...this.props} />
            <QuarterCircle pathData={blueData} {...this.props} />
            <QuarterCircle pathData={yellowData} {...this.props} />
            <circle cx={centerX} cy={centerY} r={centerOuterRadius} fill="black" />
            <path d={verticalBar.path} stroke={verticalBar.stroke} strokeWidth={verticalBar.strokeWidth} />
            <path d={horizontalBar.path} stroke={horizontalBar.stroke} strokeWidth={horizontalBar.strokeWidth} />
            <circle cx={centerX} cy={centerY} r={centerInnerRadius} fill="grey" />
          </svg>
          <button className="start-game" onClick={this.props.startGame}>Start Game Redux!</button>
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
        </div>
        <div className="score show-border">Score</div>
      </div>
    );
  }

}

GameStatus.propTypes = {
  // clickBlue: PropTypes.func.isRequired,
  // clickRed: PropTypes.func.isRequired,
  // clickGreen: PropTypes.func.isRequired,
  // clickYellow: PropTypes.func.isRequired,
  // comparePlays: PropTypes.func.isRequired,
  // startGame: PropTypes.func.isRequired,
};

// export default GameStatus;
export default sizeMe({ monitorWidth: true, monitorHeight: true })(GameStatus);
