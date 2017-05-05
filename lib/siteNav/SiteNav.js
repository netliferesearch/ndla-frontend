'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteNav = exports.SiteNavItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBemHelper = require('react-bem-helper');

var _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

var _SafeLink = require('../common/SafeLink');

var _SafeLink2 = _interopRequireDefault(_SafeLink);

var _Button = require('../button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                              * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              */

var classes = new _reactBemHelper2.default({
  name: 'site-navigation',
  prefix: 'c-'
});

var SiteNavItem = function SiteNavItem(_ref) {
  var to = _ref.to,
      cssModifier = _ref.cssModifier,
      rest = _objectWithoutProperties(_ref, ['to', 'cssModifier']);

  var link = to ? _react2.default.createElement(_SafeLink2.default, _extends({ to: to }, classes('link'), rest)) : _react2.default.createElement(_Button2.default, _extends({}, classes('link'), { stripped: true }, rest));

  return _react2.default.createElement(
    'li',
    classes('item', cssModifier),
    link
  );
};

exports.SiteNavItem = SiteNavItem;
SiteNavItem.propTypes = {
  children: _propTypes2.default.node.isRequired,
  cssModifier: _propTypes2.default.string,
  to: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

var SiteNav = exports.SiteNav = function SiteNav(_ref2) {
  var children = _ref2.children,
      cssModifier = _ref2.cssModifier;
  return _react2.default.createElement(
    'div',
    classes('container', cssModifier),
    _react2.default.createElement(
      'ul',
      classes('list'),
      children
    )
  );
};

SiteNav.propTypes = {
  children: _propTypes2.default.node,
  cssModifier: _propTypes2.default.string
};