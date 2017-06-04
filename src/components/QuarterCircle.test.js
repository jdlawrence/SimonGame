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

  /*xit('renders an `.icon-star`', () => {
    const wrapper = shallow(<QuarterCircle />);
    expect(wrapper.find('.icon-star')).to.have.length(1);
  });

  xit('renders children when passed in', () => {
    const wrapper = shallow(
      <QuarterCircle>
        <div className="unique" />
      </QuarterCircle>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  xit('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Foo onButtonClick={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });*/
});