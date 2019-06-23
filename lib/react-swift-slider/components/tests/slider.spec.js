'use strict';

var _react = _interopRequireDefault(require('react'));

var _react2 = require('@testing-library/react');

var _Slider = _interopRequireDefault(require('../Slider'));

require('jest-dom/extend-expect');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
describe('Slider - Unit Test', function() {
  afterEach(_react2.cleanup);
  var data = [
    {
      id: '1',
      src: 'https://picjumbo.imgix.net/HNCK9192.jpg?q=40&w=1650&sharp=30',
    },
    {
      id: '2',
      src: 'https://picjumbo.imgix.net/HNCK3313.jpg?q=40&w=1650&sharp=30',
    },
    {
      id: '3',
      src: 'https://picjumbo.imgix.net/HNCK4330.jpg?q=40&w=1650&sharp=30',
    },
    {
      id: '4',
      src: 'https://picjumbo.imgix.net/HNCK0180.jpg?q=40&w=1650&sharp=30',
    },
    {
      id: '5',
      src: 'https://picjumbo.imgix.net/HNCK3286.jpg?q=40&w=1650&sharp=30',
    },
  ];
  it('should render slider', function() {
    var _render = (0, _react2.render)(
        _react['default'].createElement(_Slider['default'], {
          data: data,
          interval: 1,
        }),
      ),
      container = _render.container;

    expect(container.querySelector('div > ul').childElementCount).toEqual(5);
    expect(
      container.querySelector('div >:nth-child(2)').childElementCount,
    ).toEqual(5);
    expect(container.querySelector('div >:nth-child(3)')).toBeTruthy();
    expect(container.querySelector('div >:nth-child(2)')).toBeTruthy();
  });
  it('should set the height to 500px when height is specified', function() {
    var _render2 = (0, _react2.render)(
        _react['default'].createElement(_Slider['default'], {
          height: 500,
          data: data,
        }),
      ),
      container = _render2.container;

    expect(container.querySelector('div > ul')).toHaveStyle('height : 500px');
  });
  it('should go to position 4 when on the first slide when clicking on next', function() {
    var _render3 = (0, _react2.render)(
        _react['default'].createElement(_Slider['default'], {
          data: data,
        }),
      ),
      container = _render3.container;

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : visible',
    );
    expect(container.querySelector('div > ul > :nth-child(5)')).toHaveStyle(
      'visibility : hidden',
    );
    var prevButton = container.querySelector('div >:nth-child(3)');

    _react2.fireEvent.click(prevButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : hidden',
    );
    expect(container.querySelector('div > ul > :nth-child(5)')).toHaveStyle(
      'visibility : visible',
    );
  });
  it('should go to previous slide', function() {
    var _render4 = (0, _react2.render)(
        _react['default'].createElement(_Slider['default'], {
          data: data,
        }),
      ),
      container = _render4.container;

    var prevButton = container.querySelector('div >:nth-child(3)');

    _react2.fireEvent.click(prevButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : hidden',
    );
    expect(container.querySelector('div > ul > :nth-child(4)')).toHaveStyle(
      'visibility : hidden',
    );
    expect(container.querySelector('div > ul > :nth-child(5)')).toHaveStyle(
      'visibility : visible',
    );

    _react2.fireEvent.click(prevButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : hidden',
    );
    expect(container.querySelector('div > ul > :nth-child(4)')).toHaveStyle(
      'visibility : visible',
    );
    expect(container.querySelector('div > ul > :nth-child(5)')).toHaveStyle(
      'visibility : hidden',
    );
  });
  it('should go to next slide', function() {
    var _render5 = (0, _react2.render)(
        _react['default'].createElement(_Slider['default'], {
          data: data,
        }),
      ),
      container = _render5.container;

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : visible',
    );
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'visibility : hidden',
    );
    var nextButton = container.querySelector('div >:nth-child(4)');

    _react2.fireEvent.click(nextButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : hidden',
    );
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'visibility : visible',
    );
  });
  it('should go to position 0 when on the last slide when clicking on next', function() {
    var _render6 = (0, _react2.render)(
        _react['default'].createElement(_Slider['default'], {
          data: [data[0], data[1]],
        }),
      ),
      container = _render6.container;

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : visible',
    );
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'visibility : hidden',
    );
    var nextButton = container.querySelector('div >:nth-child(4)');

    _react2.fireEvent.click(nextButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : hidden',
    );
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'visibility : visible',
    );

    _react2.fireEvent.click(nextButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : visible',
    );
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'visibility : hidden',
    );
  });
  it('should go slide when clicking on a dot', function() {
    var _render7 = (0, _react2.render)(
        _react['default'].createElement(_Slider['default'], {
          data: data,
        }),
      ),
      container = _render7.container;

    var dotUl = container.querySelector('div >:nth-child(2)');
    expect(dotUl.querySelector(':nth-child(1)')).toHaveStyle(
      'background : #e8784e',
    );
    expect(dotUl.querySelector(':nth-child(3)')).toHaveStyle(
      'background : #909192',
    );

    _react2.fireEvent.click(dotUl.querySelector(':nth-child(3)'));

    expect(dotUl.querySelector(':nth-child(1)')).toHaveStyle(
      'background : #909192',
    );
    expect(dotUl.querySelector(':nth-child(3)')).toHaveStyle(
      'background : #e8784e',
    );
  });
  it('should not show dots', function() {
    var _render8 = (0, _react2.render)(
        _react['default'].createElement(_Slider['default'], {
          data: data,
          showDots: false,
        }),
      ),
      container = _render8.container;

    expect(container.querySelectorAll('ul').length).toBe(1);
  });
  it('should not show next and previous', function() {
    var _render9 = (0, _react2.render)(
        _react['default'].createElement(_Slider['default'], {
          data: data,
          enableNextAndPrev: false,
        }),
      ),
      container = _render9.container;

    expect(container.querySelector('div >:nth-child(3)')).toBeFalsy();
    expect(container.querySelector('div >:nth-child(4)')).toBeFalsy();
  });
});
