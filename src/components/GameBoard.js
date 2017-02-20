import React, { Component, PropTypes } from 'react';
import QuarterCircle from './QuarterCircle';

let centerX = 125;
let centerY = 75;
let radius = 50;
let centerOuterRadius = 26;
let centerInnerRadius = 19;

var greenData = {
  path: [
    'M', centerX, centerY,
    'l', -radius, 0,
    'a', radius, radius, 0, 0, 1, radius, -radius, 
    'Z'
  ].join(' '),
  stroke: 'black',
  fill: 'green'
};
var redData = {
  path: [
    'M', centerX, centerY,
    'l', 0, -radius,
    'a', radius, radius, 0, 0, 1, radius, radius, 
    'Z'
  ].join(' '),
  stroke: 'black',
  fill: 'red'
};
var blueData = {
  path: [
    'M', centerX, centerY,
    'l', radius, 0,
    'a', radius, radius, 0, 0, 1, -radius, radius, 
    'Z'
  ].join(' '),
  stroke: 'black',
  fill: 'blue'
};
var yellowData = {
  path: [
    'M', centerX, centerY,
    'l', 0, radius,
    'a', radius, radius, 0, 0, 1, -radius, -radius, 
    'Z'
  ].join(' '),
  stroke: 'black',
  fill: 'yellow'
};

let verticalBar = {
  path: [
    'M', centerX, centerY - radius,
    'l', 0, radius * 2,
  ].join(' '),
  stroke: 'black',
  strokeWidth: 8
}
let horizontalBar = {
  path: [
    'M', centerX - radius, centerY,
    'l', radius * 2, 0,
  ].join(' '),
  stroke: 'black',
  strokeWidth: 8
}
const GameBoard = (() => {
  return (
    <div>
      <svg width="200" height="200">
        <QuarterCircle pathData={greenData}/>
        <QuarterCircle pathData={redData}/>
        <QuarterCircle pathData={blueData}/>
        <QuarterCircle pathData={yellowData}/>
        <path d={verticalBar.path} stroke={verticalBar.stroke} strokeWidth={verticalBar.strokeWidth}/>
        <path d={horizontalBar.path} stroke={horizontalBar.stroke} strokeWidth={horizontalBar.strokeWidth}/>
        <circle cx={centerX} cy={centerY} r={centerInnerRadius} fill="grey"/>
      </svg>
    </div>
  );
});

export default GameBoard;