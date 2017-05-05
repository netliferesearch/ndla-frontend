'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                              * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              */

var LicenseSa = function LicenseSa(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ version: '1', xmlns: 'http://www.w3.org/2000/svg', role: 'img', width: '64', height: '64', viewBox: '5.5 -3.5 64 64', className: className }, rest),
    _react2.default.createElement('circle', { role: 'presentation', fill: 'none', cx: '36.944', cy: '28.631', r: '29.105' }),
    _react2.default.createElement('path', { role: 'presentation', d: 'M37.443-3.5c8.951 0 16.531 3.105 22.742 9.315C66.393 11.987 69.5 19.548 69.5 28.5c0 8.954-3.049 16.457-9.145 22.514-6.437 6.324-14.076 9.486-22.912 9.486-8.649 0-16.153-3.143-22.514-9.429C8.644 44.786 5.5 37.264 5.5 28.501c0-8.723 3.144-16.285 9.429-22.685C21.138-.395 28.643-3.5 37.443-3.5zm.114 5.772c-7.276 0-13.428 2.572-18.457 7.715-5.22 5.296-7.829 11.467-7.829 18.513 0 7.125 2.59 13.257 7.77 18.4 5.181 5.182 11.352 7.771 18.514 7.771 7.123 0 13.334-2.609 18.629-7.828 5.029-4.876 7.543-10.99 7.543-18.343 0-7.313-2.553-13.485-7.656-18.513-5.067-5.145-11.239-7.715-18.514-7.715zM23.271 23.985c.609-3.924 2.189-6.962 4.742-9.114 2.552-2.152 5.656-3.228 9.314-3.228 5.027 0 9.029 1.62 12 4.856 2.971 3.238 4.457 7.391 4.457 12.457 0 4.915-1.543 9-4.627 12.256-3.088 3.256-7.086 4.886-12.002 4.886-3.619 0-6.743-1.085-9.371-3.257-2.629-2.172-4.209-5.257-4.743-9.257H31.1c.19 3.886 2.533 5.829 7.029 5.829 2.246 0 4.057-.972 5.428-2.914 1.373-1.942 2.059-4.534 2.059-7.771 0-3.391-.629-5.971-1.885-7.743-1.258-1.771-3.066-2.657-5.43-2.657-4.268 0-6.667 1.885-7.2 5.656h2.343l-6.342 6.343-6.343-6.343 2.512.001z' })
  );
};

LicenseSa.propTypes = {
  className: _propTypes2.default.string.isRequired
};

exports.default = LicenseSa;