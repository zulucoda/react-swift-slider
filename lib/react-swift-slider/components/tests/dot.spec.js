'use strict';

var _react = _interopRequireDefault(require('react'));

var _Dot = _interopRequireDefault(require('../Dot'));

var _react2 = require('@testing-library/react');

require('jest-dom/extend-expect');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
describe('Dot - Unit Test', function() {
  afterEach(_react2.cleanup);
  it('should render a non active dot', function() {
    var onClickFun = jest.fn();

    var _render = (0, _react2.render)(
        _react['default'].createElement(_Dot['default'], {
          dotColor: 'dot color',
          key: 'some key',
          active: false,
          onClick: onClickFun,
          idx: 'some index',
        }),
      ),
      container = _render.container;

    expect(container.firstChild).toHaveStyle('background: dot color');
  });
  it('should render a active dot', function() {
    var onClickFun = jest.fn();

    var _render2 = (0, _react2.render)(
        _react['default'].createElement(_Dot['default'], {
          activeDotColor: 'active dot color',
          key: 'some key',
          active: true,
          onClick: onClickFun,
          idx: 'some index',
        }),
      ),
      container = _render2.container;

    expect(container.firstChild).toHaveStyle('background: active dot color');
  });
  it('should call onClick function with index, on element click', function() {
    var onClickFun = jest.fn();

    var _render3 = (0, _react2.render)(
        _react['default'].createElement(_Dot['default'], {
          activeDotColor: 'active dot color',
          key: 'some key',
          active: true,
          onClick: onClickFun,
          idx: 'some index',
        }),
      ),
      container = _render3.container;

    _react2.fireEvent.click(
      container.firstChild,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(onClickFun).toHaveBeenCalledWith('some index');
  });
});
