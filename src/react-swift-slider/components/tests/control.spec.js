/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Control from '../Control';
import { DIRECTION } from '../../config';

describe('Control - Unit Test', () => {
  afterEach(cleanup);

  describe('previous', () => {
    it('should render previous div with previous on click function', () => {
      const onPressPrev = jest.fn();
      const onNextPrev = jest.fn();
      const { container } = render(
        <Control
          direction={DIRECTION.prev}
          onPressPrev={onPressPrev}
          onPressNext={onNextPrev}
          height={450}
        />,
      );

      fireEvent(
        container.firstChild,
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );

      expect(onPressPrev).toHaveBeenCalled();

      expect(onNextPrev).not.toHaveBeenCalled();
    });
  });

  describe('next', () => {
    it('should render next div with next on click function', () => {
      const onPressPrev = jest.fn();
      const onNextPrev = jest.fn();
      const { container } = render(
        <Control
          direction={DIRECTION.next}
          onPressPrev={onPressPrev}
          onPressNext={onNextPrev}
          height={450}
        />,
      );

      fireEvent(
        container.firstChild,
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );

      expect(onPressPrev).not.toHaveBeenCalled();

      expect(onNextPrev).toHaveBeenCalled();
    });
  });
});
