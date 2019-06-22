'use strict';

var _react = _interopRequireDefault(require('react'));

var _enzyme = require('enzyme');

var _Dot = _interopRequireDefault(require('../Dot'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
describe('Dot - Unit Test', function() {
  it('should render a non active dot', function() {
    var onClickFun = jest.fn();
    var wrapper = (0, _enzyme.shallow)(
      _react['default'].createElement(_Dot['default'], {
        dotColor: 'dot color',
        key: 'some key',
        active: false,
        onClick: onClickFun,
        idx: 'some index',
      }),
    );
    expect(wrapper.find('li').getElement().props.className).toEqual(
      'swift-slider-dot',
    );
    expect(wrapper.find('li').getElement().props.style.background).toEqual(
      'dot color',
    );
  });
  it('should render a active dot', function() {
    var onClickFun = jest.fn();
    var wrapper = (0, _enzyme.shallow)(
      _react['default'].createElement(_Dot['default'], {
        activeDotColor: 'active dot color',
        key: 'some key',
        active: true,
        onClick: onClickFun,
        idx: 'some index',
      }),
    );
    expect(wrapper.find('li').getElement().props.style.background).toEqual(
      'active dot color',
    );
  });
  it('should call onClick function with index, on element click', function() {
    var onClickFun = jest.fn();
    var wrapper = (0, _enzyme.shallow)(
      _react['default'].createElement(_Dot['default'], {
        activeDotColor: 'active dot color',
        key: 'some key',
        active: true,
        onClick: onClickFun,
        idx: 'some index',
      }),
    );
    wrapper.find('li').simulate('click');
    expect(onClickFun).toHaveBeenCalledWith('some index');
  });
});
