/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from 'react';
import { shallow } from 'enzyme';
import Slider from '../Slider';

describe('Slider - Unit Test', () => {
  const data =  [
    {'id':'1','src':'https://picjumbo.imgix.net/HNCK9192.jpg?q=40&w=1650&sharp=30'},
    {'id':'2','src':'https://picjumbo.imgix.net/HNCK3313.jpg?q=40&w=1650&sharp=30'},
    {'id':'3','src':'https://picjumbo.imgix.net/HNCK4330.jpg?q=40&w=1650&sharp=30'},
    {'id':'4','src':'https://picjumbo.imgix.net/HNCK0180.jpg?q=40&w=1650&sharp=30'},
    {'id':'5','src':'https://picjumbo.imgix.net/HNCK3286.jpg?q=40&w=1650&sharp=30'}
  ];

  it('should render slider', () => {
    const wrapper = shallow(<Slider data={data}></Slider>)
    expect(wrapper.find('.container').length).toEqual(1);
    expect(wrapper.find('.slides').length).toEqual(1);
  });

  it('')
});
