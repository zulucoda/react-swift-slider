/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from 'react';
import Dot from '../Dot';
import { render, fireEvent, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

describe('Dot - Unit Test', () => {
  afterEach(cleanup);

  it('should render a non active dot', () => {
    const onClickFun = jest.fn();
    const { container } = render(
      <Dot
        dotColor="dot color"
        key="some key"
        active={false}
        onClick={onClickFun}
        idx="some index"
      />,
    );
    expect(container.firstChild).toHaveStyle('background: dot color');
  });

  it('should render a active dot', () => {
    const onClickFun = jest.fn();
    const { container } = render(
      <Dot
        activeDotColor="active dot color"
        key="some key"
        active={true}
        onClick={onClickFun}
        idx="some index"
      />,
    );

    expect(container.firstChild).toHaveStyle('background: active dot color');
  });

  it('should call onClick function with index, on element click', () => {
    const onClickFun = jest.fn();
    const { container } = render(
      <Dot
        activeDotColor="active dot color"
        key="some key"
        active={true}
        onClick={onClickFun}
        idx="some index"
      />,
    );

    fireEvent.click(
      container.firstChild,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(onClickFun).toHaveBeenCalledWith('some index');
  });
});
