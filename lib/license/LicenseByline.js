'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LicenseIconList = require('./LicenseIconList');

var _LicenseIconList2 = _interopRequireDefault(_LicenseIconList);

var _shapes = require('../shapes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LicenseByline = function LicenseByline(_ref) {
  var children = _ref.children,
      license = _ref.license;
  return _react2.default.createElement(
    'div',
    { className: 'license-byline' },
    _react2.default.createElement(_LicenseIconList2.default, { licenseRights: license.rights }),
    children ? _react2.default.createElement(
      'div',
      { className: 'license-byline__body' },
      children
    ) : null
  );
}; /*
    * Copyright (c) 2016-present, NDLA.
    *
    * This source code is licensed under the GPLv3 license found in the
    * LICENSE file in the root directory of this source tree.
    * FRI OG BEGRENSET
    */

LicenseByline.propTypes = {
  license: _shapes.LicenseShape.isRequired,
  children: _react.PropTypes.node
};

exports.default = LicenseByline;