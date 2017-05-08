'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneColumn = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
}; /**
    * Copyright (c) 2016-present, NDLA.
    *
    * This source code is licensed under the GPLv3 license found in the
    * LICENSE file in the root directory of this source tree.
    *
    */

OneColumn.propTypes = {
  children: _propTypes2.default.node,
  cssModifier: _propTypes2.default.string,
  className: _propTypes2.default.string
};

exports.default = OneColumn;