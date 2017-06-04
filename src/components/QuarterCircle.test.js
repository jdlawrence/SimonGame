import React from 'react';
import { shallow } from 'enzyme';

import QuarterCircle from './QuarterCircle';

const centerX = 0, centerY = 0, radius = 50;
const testState = {
  green: false,
  red: false,
  blue: false,
  yellow: false
};
const testData = {
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

describe('<QuarterCircle />', () => {
  it('runs a dummy test', () => {
    expect(2).toBe(2);
  });
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<QuarterCircle pathData={testData} QCState={testState} />);
    expect(wrapper).toMatchSnapshot();
  });

  });