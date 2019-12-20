import React from 'react';
import { shallow } from 'enzyme';
import Projects from './Projects';

describe('Projects', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Projects />)
  });

  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

