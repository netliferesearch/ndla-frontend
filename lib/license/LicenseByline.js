'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LicenseIconList = require('./LicenseIconList');

var _LicenseIconList2 = _interopRequireDefault(_LicenseIconList);

var _shapes = require('../shapes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

var LicenseByline = function LicenseByline(_ref) {
  var children = _ref.children,
      license = _ref.license;
  return _react2.default.createElement(
    'div',
    { className: 'license-byline' },
    _react2.default.createElement(_LicenseIconList2.default, { licenseRights: license.rights }),
    'test',
    children ? _react2.default.createElement(
      'div',
      { className: 'license-byline__body' },
      children
    ) : null
  );
};

LicenseByline.propTypes = {
  license: _shapes.LicenseShape.isRequired,
  children: _propTypes2.default.node
};

exports.default = LicenseByline;