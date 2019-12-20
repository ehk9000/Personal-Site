import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('About', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About /> )
  });

  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});