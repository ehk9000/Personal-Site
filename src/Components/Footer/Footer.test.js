import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow ( <Footer />)
  });

  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});