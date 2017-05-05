'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var Embed = function Embed(_ref) {
  var className = _ref.className;
  return _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 50 50', className: className },
    _react2.default.createElement('path', { d: 'M 29.125 7.34375 L 17.125 41.34375 L 20.875 42.65625 L 32.875 8.65625 L 29.125 7.34375 z M 9.9375 13.375 L 1.25 23.71875 L 0.1875 25 L 1.25 26.28125 L 9.9375 36.65625 L 13.03125 34.09375 L 5.40625 25 L 13 15.9375 L 9.9375 13.375 z M 40.0625 13.375 L 37 15.9375 L 44.59375 25 L 37 34.0625 L 40.09375 36.625 L 48.71875 26.28125 L 49.78125 25 L 48.71875 23.71875 L 40.0625 13.375 z' })
  );
};

Embed.propTypes = {
  className: _propTypes2.default.string.isRequired
};

exports.default = Embed;