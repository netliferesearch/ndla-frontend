'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Masthead = exports.MastheadItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MastheadItem = exports.MastheadItem = function MastheadItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      left = _ref.left,
      right = _ref.right;

  var classes = (0, _classnames2.default)(className, { masthead__left: left }, { masthead__right: right });
  return _react2.default.createElement(
    'div',
    { className: classes },
    children
  );
}; /**
    * Copyright (c) 2016-present, NDLA.
    *
    * This source code is licensed under the GPLv3 license found in the
    * LICENSE file in the root directory of this source tree.
    *
    */

MastheadItem.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  left: _propTypes2.default.bool
};

MastheadItem.defaultProps = {
  right: false,
  left: false
};

var Masthead = exports.Masthead = function Masthead(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    'div',
    { className: 'masthead' },
    _react2.default.createElement(
      'div',
      { className: 'u-1/1' },
      children
    )
  );
};

Masthead.propTypes = {
  children: _propTypes2.default.node
};