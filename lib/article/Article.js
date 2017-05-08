'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Article = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBemHelper = require('react-bem-helper');

var _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classes = new _reactBemHelper2.default({
  name: 'article',
  prefix: 'c-'
}); /**
     * Copyright (c) 2016-present, NDLA.
     *
     * This source code is licensed under the GPLv3 license found in the
     * LICENSE file in the root directory of this source tree.
     *
     */

var Article = exports.Article = function Article(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'article',
    classes(),
    _react2.default.createElement(
      'section',
      null,
      ' ',
      children,
      ' '
    )
  );
};

Article.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = Article;