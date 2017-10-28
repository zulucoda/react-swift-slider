'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('normalize-css');

var data = [{ 'id': '1', 'src': 'https://picjumbo.imgix.net/HNCK9192.jpg?q=40&w=1650&sharp=30' }, { 'id': '2', 'src': 'https://picjumbo.imgix.net/HNCK3313.jpg?q=40&w=1650&sharp=30' }, { 'id': '3', 'src': 'https://picjumbo.imgix.net/HNCK4330.jpg?q=40&w=1650&sharp=30' }, { 'id': '4', 'src': 'https://picjumbo.imgix.net/HNCK0180.jpg?q=40&w=1650&sharp=30' }, { 'id': '5', 'src': 'https://picjumbo.imgix.net/HNCK3286.jpg?q=40&w=1650&sharp=30' }];

_reactDom2.default.render(_react2.default.createElement(_Slider2.default, { data: data }), document.getElementById('root'));