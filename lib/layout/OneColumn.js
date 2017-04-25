'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneColumn = undefined;

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

var OneColumn = exports.OneColumn = function OneColumn(_ref) {
  var children = _ref.children,
      className = _ref.className,
      cssModifier = _ref.cssModifier;

  var modifierClass = cssModifier ? 'o-wrapper--' + cssModifier : '';
  var classes = (0, _classnames2.default)('o-wrapper', modifierClass, ['', className]);
  return _react2.default.createElement(
    'div',
    { className: classes },
    children
  );
};

OneColumn.propTypes = {
  children: _react.PropTypes.node,
  cssModifier: _react.PropTypes.string,
  className: _react.PropTypes.string
};

exports.default = OneColumn;