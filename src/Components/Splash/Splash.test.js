import React from 'react';
import { shallow } from 'enzyme';
import  Splash  from './Splash';

describe(('Splash'), () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Splash />)
  });

  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});