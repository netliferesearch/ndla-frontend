'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ndlaLicenses = require('ndla-licenses');

var _reactBemHelper = require('react-bem-helper');

var _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

var _Icon = require('../icons/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('../button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var classes = new _reactBemHelper2.default({
  name: 'license-icons',
  prefix: 'c-'
});

var LicenseIcon = function LicenseIcon(_ref) {
  var licenseRight = _ref.licenseRight,
      className = _ref.className;

  switch (licenseRight) {
    case _ndlaLicenses.CC:
      return _react2.default.createElement(_Icon2.default.LicenseCc, { className: className });
    case _ndlaLicenses.BY:
      return _react2.default.createElement(_Icon2.default.LicenseBy, { className: className });
    case _ndlaLicenses.NC:
      return _react2.default.createElement(_Icon2.default.LicenseNc, { className: className });
    case _ndlaLicenses.ND:
      return _react2.default.createElement(_Icon2.default.LicenseNd, { className: className });
    case _ndlaLicenses.SA:
      return _react2.default.createElement(_Icon2.default.LicenseSa, { className: className });
    default:
      return undefined;
  }
};

LicenseIcon.propTypes = {
  licenseRight: _react.PropTypes.string.isRequired,
  className: _react.PropTypes.string.isRequired
};

var LicenseIconItem = function LicenseIconItem(_ref2) {
  var licenseRight = _ref2.licenseRight,
      activeLicenseRight = _ref2.activeLicenseRight,
      onLicenseIconClick = _ref2.onLicenseIconClick;
  return _react2.default.createElement(
    'li',
    classes('item', activeLicenseRight === licenseRight && 'active'),
    onLicenseIconClick ? _react2.default.createElement(
      _Button2.default,
      { stripped: true, onClick: function onClick() {
          return onLicenseIconClick((0, _ndlaLicenses.getLicenseRightByAbbreviation)(licenseRight));
        } },
      _react2.default.createElement(LicenseIcon, _extends({ licenseRight: licenseRight }, classes('icon')))
    ) : _react2.default.createElement(LicenseIcon, _extends({ licenseRight: licenseRight }, classes('icon')))
  );
};

LicenseIconItem.propTypes = {
  licenseRight: _react.PropTypes.string.isRequired,
  activeLicenseRight: _react.PropTypes.string,
  onLicenseIconClick: _react.PropTypes.func
};

var LicenseIconList = function LicenseIconList(_ref3) {
  var licenseRights = _ref3.licenseRights,
      rest = _objectWithoutProperties(_ref3, ['licenseRights']);

  var licenseRightsWithCC = [_ndlaLicenses.CC].concat(_toConsumableArray(licenseRights));
  return _react2.default.createElement(
    'ul',
    classes('list'),
    licenseRightsWithCC.map(function (licenseRight) {
      return _react2.default.createElement(LicenseIconItem, _extends({ key: licenseRight, licenseRight: licenseRight }, rest));
    })
  );
};

LicenseIconList.propTypes = {
  licenseRights: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  activeLicenseRight: _react.PropTypes.string,
  onLicenseIconClick: _react.PropTypes.func
};

exports.default = LicenseIconList;