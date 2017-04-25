'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hero = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBemHelper = require('react-bem-helper');

var _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classes = new _reactBemHelper2.default({
  name: 'hero',
  prefix: 'c-'
});

function bgStyle(url) {
  return { backgroundImage: 'url("' + url + '")' };
}

var Hero = exports.Hero = function Hero(_ref) {
  var children = _ref.children,
      url = _ref.url,
      alt = _ref.alt,
      small = _ref.small,
      white = _ref.white;

  var fallbackUrl = small ? '' : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ceddea' fill-opacity='0.15'%3E%3Cpath opacity='.9' d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  var classModifier = small ? 'small' : 'alt';
  var classModifier2 = white ? 'white' : 'alt';
  var classResult = classModifier === 'small' ? classModifier : classModifier2;
  var imageUrl = url || fallbackUrl;
  return _react2.default.createElement(
    'div',
    _extends({}, classes(!url || alt || small || white ? { modifiers: classResult } : null), { style: bgStyle(imageUrl) }),
    children
  );
};

Hero.propTypes = {
  children: _react.PropTypes.node.isRequired,
  url: _react.PropTypes.string,
  alt: _react.PropTypes.bool,
  small: _react.PropTypes.bool,
  white: _react.PropTypes.bool
};