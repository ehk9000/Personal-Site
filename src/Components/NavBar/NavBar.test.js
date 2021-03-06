import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  });

  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});