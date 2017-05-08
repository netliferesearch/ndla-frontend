'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var ArticleIntroductionText = function ArticleIntroductionText(_ref) {
  var text = _ref.text;
  return text ? _react2.default.createElement(
    'p',
    { className: 'article_introduction' },
    text
  ) : null;
};

ArticleIntroductionText.propTypes = {
  text: _propTypes2.default.string
};

var ArticleIntroduction = function ArticleIntroduction(_ref2) {
  var introduction = _ref2.introduction;

  if (!introduction) {
    return null;
  }

  return _react2.default.createElement(
    'section',
    { className: 'article_introduction' },
    _react2.default.createElement(ArticleIntroductionText, { text: introduction })
  );
};

ArticleIntroduction.propTypes = {
  introduction: _propTypes2.default.string
};

exports.default = ArticleIntroduction;