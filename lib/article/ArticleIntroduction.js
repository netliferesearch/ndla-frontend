"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleIntroductionText = function ArticleIntroductionText(_ref) {
  var text = _ref.text;
  return text ? _react2.default.createElement(
    "p",
    { className: "article_introduction" },
    text
  ) : null;
}; /**
    * Copyright (c) 2016-present, NDLA.
    *
    * This source code is licensed under the GPLv3 license found in the
    * LICENSE file in the root directory of this source tree.
    *
    */

ArticleIntroductionText.propTypes = {
  text: _react.PropTypes.string
};

var ArticleIntroduction = function ArticleIntroduction(_ref2) {
  var introduction = _ref2.introduction;

  if (!introduction) {
    return null;
  }

  return _react2.default.createElement(
    "section",
    { className: "article_introduction" },
    _react2.default.createElement(ArticleIntroductionText, { text: introduction })
  );
};

ArticleIntroduction.propTypes = {
  introduction: _react.PropTypes.string
};

exports.default = ArticleIntroduction;