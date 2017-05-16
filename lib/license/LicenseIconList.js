

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   */

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _propTypes = require('prop-types');

const _propTypes2 = _interopRequireDefault(_propTypes);

const _ndlaLicenses = require('ndla-licenses');
// const _ndlaLicenses = require('../../ndla-licenses');

const _reactBemHelper = require('react-bem-helper');

const _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

const _Icon = require('../icons/Icon');

const _Icon2 = _interopRequireDefault(_Icon);

const _Button = require('../button/Button');

const _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } return Array.from(arr); }

function _objectWithoutProperties(obj, keys) { const target = {}; for (const i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const classes = new _reactBemHelper2.default({
  name: 'license-icons',
  prefix: 'c-',
});

const LicenseIcon = function LicenseIcon(_ref) {
  let licenseRight = _ref.licenseRight,
    className = _ref.className;

  const licenseDescription = (0, _ndlaLicenses.getLicenseRightByAbbreviation)(licenseRight).description;
  switch (licenseRight) {
    case _ndlaLicenses.CC:
      return _react2.default.createElement(_Icon2.default.LicenseCc, { className, 'aria-label': licenseDescription });
    case _ndlaLicenses.BY:
      return _react2.default.createElement(_Icon2.default.LicenseBy, { className, 'aria-label': licenseDescription });
    case _ndlaLicenses.NC:
      return _react2.default.createElement(_Icon2.default.LicenseNc, { className, 'aria-label': licenseDescription });
    case _ndlaLicenses.ND:
      return _react2.default.createElement(_Icon2.default.LicenseNd, { className, 'aria-label': licenseDescription });
    case _ndlaLicenses.SA:
      return _react2.default.createElement(_Icon2.default.LicenseSa, { className, 'aria-label': licenseDescription });
    default:
      return undefined;
  }
};

LicenseIcon.propTypes = {
  licenseRight: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string.isRequired,
};

const LicenseIconItem = function LicenseIconItem(_ref2) {
  let licenseRight = _ref2.licenseRight,
    activeLicenseRight = _ref2.activeLicenseRight,
    onLicenseIconClick = _ref2.onLicenseIconClick;
  return _react2.default.createElement(
    'li',
    classes('item', activeLicenseRight === licenseRight && 'active'),
    onLicenseIconClick ? _react2.default.createElement(
      'div',
      null,
      licenseRight.description,
      _react2.default.createElement(
        _Button2.default,
        { stripped: true,
          onClick: function onClick() {
            return onLicenseIconClick((0, _ndlaLicenses.getLicenseRightByAbbreviation)(licenseRight));
          } },
        _react2.default.createElement(LicenseIcon, _extends({ licenseRight }, classes('icon'))),
      ),
    ) : _react2.default.createElement(
      'div',
      null,
      licenseRight.description,
      _react2.default.createElement(LicenseIcon, _extends({ licenseRight }, classes('icon'))),
    ),
  );
};

LicenseIconItem.propTypes = {
  licenseRight: _propTypes2.default.string.isRequired,
  activeLicenseRight: _propTypes2.default.string,
  onLicenseIconClick: _propTypes2.default.func,
};

const LicenseIconList = function LicenseIconList(_ref3) {
  let licenseRights = _ref3.licenseRights,
    rest = _objectWithoutProperties(_ref3, ['licenseRights']);

  const licenseRightsWithCC = [_ndlaLicenses.CC].concat(_toConsumableArray(licenseRights));
  return _react2.default.createElement(
    'ul',
    classes('list'),
    licenseRightsWithCC.map(licenseRight => _react2.default.createElement(LicenseIconItem, _extends({ key: licenseRight, licenseRight }, rest))),
  );
};

LicenseIconList.propTypes = {
  licenseRights: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  activeLicenseRight: _propTypes2.default.string,
  onLicenseIconClick: _propTypes2.default.func,
};

exports.default = LicenseIconList;
