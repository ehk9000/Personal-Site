import React from 'react';
import { shallow } from 'enzyme';
import Portfolio from './Portfolio';

describe('Portfolio', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Portfolio />)
  });

  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

