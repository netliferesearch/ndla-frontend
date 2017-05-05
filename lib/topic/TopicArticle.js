'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ndlaArticleScripts = require('ndla-article-scripts');

var _reactMotion = require('react-motion');

var _reactCollapse = require('react-collapse');

var _reactCollapse2 = _interopRequireDefault(_reactCollapse);

var _Icon = require('../icons/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Article = require('../article/Article');

var _Article2 = _interopRequireDefault(_Article);

var _Button = require('../button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ArticleFootNotes = require('../article/ArticleFootNotes');

var _ArticleFootNotes2 = _interopRequireDefault(_ArticleFootNotes);

var _shapes = require('../shapes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var TopicArticle = function (_Component) {
  _inherits(TopicArticle, _Component);

  function TopicArticle(props) {
    _classCallCheck(this, TopicArticle);

    var _this = _possibleConstructorReturn(this, (TopicArticle.__proto__ || Object.getPrototypeOf(TopicArticle)).call(this, props));

    _this.state = { isOpen: false };
    _this.toggleOpen = _this.toggleOpen.bind(_this);
    return _this;
  }

  _createClass(TopicArticle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _ndlaArticleScripts.addEventListenerForResize)();
      (0, _ndlaArticleScripts.updateIFrameDimensions)();
      (0, _ndlaArticleScripts.addAsideClickListener)();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _ndlaArticleScripts.removeEventListenerForResize)();
      (0, _ndlaArticleScripts.removeAsideClickListener)();
    }
  }, {
    key: 'toggleOpen',
    value: function toggleOpen() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          article = _props.article,
          openTitle = _props.openTitle,
          closeTitle = _props.closeTitle,
          notitle = _props.notitle;
      var isOpen = this.state.isOpen;

      return _react2.default.createElement(
        'section',
        null,
        notitle ? null : _react2.default.createElement(
          'h1',
          null,
          article.title
        ),
        _react2.default.createElement(_Article2.default.Introduction, { introduction: article.introduction }),
        _react2.default.createElement(
          _reactCollapse2.default,
          { className: isOpen ? 'c-article-collapse c-article-collapse--open' : 'c-article-collapse', isOpened: isOpen, springConfig: _reactMotion.presets.wobble, keepCollapsedContent: true },
          _react2.default.createElement('div', { style: { overflow: 'hidden' }, dangerouslySetInnerHTML: { __html: article.content } })
        ),
        article.footNotes && isOpen ? _react2.default.createElement(_ArticleFootNotes2.default, { footNotes: article.footNotes }) : null,
        _react2.default.createElement(
          'div',
          { className: isOpen ? 'c-topic-article__btnwrapper c-topic-article__btnwrapper--open' : 'c-topic-article__btnwrapper' },
          _react2.default.createElement(
            _Button2.default,
            { className: 'c-topic-article_toggle-button', onClick: this.toggleOpen, outline: true },
            isOpen ? closeTitle : openTitle,
            ' ',
            _react2.default.createElement(_Icon2.default.ArrowDown, { className: isOpen ? 'icon icon--rotate' : 'icon' })
          )
        )
      );
    }
  }]);

  return TopicArticle;
}(_react.Component);

TopicArticle.propTypes = {
  article: _shapes.ArticleShape.isRequired,
  openTitle: _react.PropTypes.node.isRequired,
  closeTitle: _react.PropTypes.node.isRequired,
  notitle: _react.PropTypes.bool
};

exports.default = TopicArticle;