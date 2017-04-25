'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageContainer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageContainer = exports.PageContainer = function PageContainer(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    children
  );
}; /**
    * Copyright (c) 2016-present, NDLA.
    *
    * This source code is licensed under the GPLv3 license found in the
    * LICENSE file in the root directory of this source tree.
    *
    */

PageContainer.propTypes = {
  children: _react.PropTypes.node
};

exports.default = PageContainer;