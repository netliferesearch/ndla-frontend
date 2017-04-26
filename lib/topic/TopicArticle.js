'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Article = require('../article/Article');

var _Article2 = _interopRequireDefault(_Article);

var _ArticleContent = require('../article/ArticleContent');

var _ArticleContent2 = _interopRequireDefault(_ArticleContent);

var _shapes = require('../shapes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// class TopicArticle extends Component {
/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var TopicArticle = function TopicArticle(_ref) {
  var article = _ref.article,
      notitle = _ref.notitle;
  return (

    // const { article, notitle } = this.props;
    // const { isOpen } = this.state;
    // return (
    _react2.default.createElement(
      'section',
      null,
      notitle ? null : _react2.default.createElement(
        'h1',
        { className: 'c-article__title' },
        article.title
      ),
      _react2.default.createElement(_Article2.default.Introduction, { introduction: article.introduction }),
      _react2.default.createElement(_ArticleContent2.default, { className: 'c-article--narrow', dangerouslySetInnerHTML: { __html: article.content } }),
      article.footNotes
    )
    // );

  );
};
// import Button from '../button/Button';
// import ArticleFootNotes from '../article/ArticleFootNotes';

// import {
//   addEventListenerForResize,
//   updateIFrameDimensions, addAsideClickListener,
//   removeEventListenerForResize,
//   removeAsideClickListener,
// } from 'ndla-article-scripts';
// import { presets } from 'react-motion';
// import ReactCollapse from 'react-collapse';
// import Icon from '../icons/Icon';

TopicArticle.propTypes = {
  article: _shapes.ArticleShape.isRequired,
  notitle: _react.PropTypes.bool
};

exports.default = TopicArticle;