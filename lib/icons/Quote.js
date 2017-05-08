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

var Quote = function Quote(_ref) {
  var className = _ref.className;
  return _react2.default.createElement(
    'svg',
    { width: '96', height: '84', viewBox: '0 0 96 84', xmlns: 'http://www.w3.org/2000/svg', className: className },
    _react2.default.createElement('path', { d: 'M48 .7C22 .7.9 19.2.9 42c0 9.8 3.9 18.8 10.5 25.9-1.2 3.3-3.4 7-7.4 9.6-1 .7-.7 2.2.5 2.4 4.2.6 11.4.7 18-3.3 7.4 4.2 16.1 6.6 25.6 6.6 26 0 47.1-18.5 47.1-41.3C95.2 19.1 74 .7 48 .7zm-4.1 40.7c0 4.8-.4 8.7-1.2 11.4-.2.6-.5 1.1-.8 1.7h-9.3c.1-.1.3-.2.4-.4 1.4-1.9 2.2-4.6 2.3-8h-3.6c-2.5 0-4.5-2-4.5-4.5v-7.8c0-2.5 2-4.5 4.5-4.5h12.2v12.1zm24.9 0c0 4.8-.4 8.7-1.2 11.4-.2.6-.5 1.1-.8 1.7h-9.3c.1-.1.3-.2.4-.4 1.4-1.9 2.2-4.6 2.3-8h-3.6c-2.5 0-4.5-2-4.5-4.5v-7.8c0-2.5 2-4.5 4.5-4.5h12.2v12.1z' })
  );
};

Quote.propTypes = {
  className: _propTypes2.default.string.isRequired
};

exports.default = Quote;