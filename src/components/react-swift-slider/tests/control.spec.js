/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from 'react';
import { shallow } from 'enzyme';
import Control from '../Control';

describe('Control - Unit Test', () => {
  describe('previous', () => {
    it('should render previous div with previous on click function', () => {
      const onPressPrev = jest.fn();
      const wrapper = shallow(<Control direction="prev" onPressPrev={onPressPrev}/>)
      expect(wrapper.contains(<div className='prev' onClick={onPressPrev}/>)).toBeTruthy();
    });
  });

  describe('next', () => {
    it('should render next div with next on click function', () => {
      const onNextPrev = jest.fn();
      const wrapper = shallow(<Control direction="next" onPressNext={onNextPrev}/>)
      expect(wrapper.contains(<div className='next' onClick={onNextPrev}/>)).toBeTruthy();
    });
  });
});