'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _LicenseCc = require('./LicenseCc');

var _LicenseCc2 = _interopRequireDefault(_LicenseCc);

var _Download = require('./Download');

var _Download2 = _interopRequireDefault(_Download);

var _Copy = require('./Copy');

var _Copy2 = _interopRequireDefault(_Copy);

var _Audio = require('./Audio');

var _Audio2 = _interopRequireDefault(_Audio);

var _Document = require('./Document');

var _Document2 = _interopRequireDefault(_Document);

var _ArrowDown = require('./ArrowDown');

var _ArrowDown2 = _interopRequireDefault(_ArrowDown);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _Embed = require('./Embed');

var _Embed2 = _interopRequireDefault(_Embed);

var _Book = require('./Book');

var _Book2 = _interopRequireDefault(_Book);

var _Path = require('./Path');

var _Path2 = _interopRequireDefault(_Path);

var _Pencil = require('./Pencil');

var _Pencil2 = _interopRequireDefault(_Pencil);

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

var _OpenWindow = require('./OpenWindow');

var _OpenWindow2 = _interopRequireDefault(_OpenWindow);

var _Time = require('./Time');

var _Time2 = _interopRequireDefault(_Time);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

var _LicenseBy = require('./LicenseBy');

var _LicenseBy2 = _interopRequireDefault(_LicenseBy);

var _LicenseNc = require('./LicenseNc');

var _LicenseNc2 = _interopRequireDefault(_LicenseNc);

var _LicenseNd = require('./LicenseNd');

var _LicenseNd2 = _interopRequireDefault(_LicenseNd);

var _LicenseSa = require('./LicenseSa');

var _LicenseSa2 = _interopRequireDefault(_LicenseSa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                              * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              */

function Icon(props) {
  var icon = props.icon,
      className = props.className,
      rest = _objectWithoutProperties(props, ['icon', 'className']);

  return (0, _react.createElement)(icon, _extends({ className: (0, _classnames2.default)('icon', className) }, rest));
}

Icon.propTypes = {
  icon: _elementType2.default.isRequired,
  className: _propTypes2.default.string
};

Icon.Download = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _Download2.default }));
};
Icon.Copy = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _Copy2.default }));
};
Icon.Audio = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _Audio2.default }));
};
Icon.Document = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _Document2.default }));
};
Icon.ArrowDown = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _ArrowDown2.default }));
};
Icon.Grid = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _Grid2.default }));
};
Icon.Link = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _Link2.default }));
};
Icon.Embed = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _Embed2.default }));
};
Icon.Book = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _Book2.default }));
};
Icon.Path = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _Path2.default }));
};
Icon.Pencil = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _Pencil2.default }));
};
Icon.Search = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _Search2.default }));
};
Icon.Time = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _Time2.default }));
};
Icon.User = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _User2.default }));
};
// Icon.Info = props => (<Icon {...props} icon={Info} />);
Icon.OpenWindow = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _OpenWindow2.default }));
};
Icon.LicenseCc = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _LicenseCc2.default }));
};
Icon.LicenseBy = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _LicenseBy2.default }));
};
Icon.LicenseNc = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _LicenseNc2.default }));
};
Icon.LicenseNd = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _LicenseNd2.default }));
};
Icon.LicenseSa = function (props) {
  return _react2.default.createElement(Icon, _extends({}, props, { icon: _LicenseSa2.default }));
};

exports.default = Icon;