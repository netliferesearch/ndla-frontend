'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Masthead = exports.MastheadItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

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
};

MastheadItem.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.bool,
  right: _react.PropTypes.bool,
  left: _react.PropTypes.bool
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
      { className: 'o-wrapper u-1/1' },
      children
    )
  );
};

Masthead.propTypes = {
  children: _react.PropTypes.node
};