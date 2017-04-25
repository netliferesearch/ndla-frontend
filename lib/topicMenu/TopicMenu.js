'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBemHelper = require('react-bem-helper');

var _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

var _SafeLink = require('../common/SafeLink');

var _SafeLink2 = _interopRequireDefault(_SafeLink);

var _SubtopicLinkList = require('./SubtopicLinkList');

var _SubtopicLinkList2 = _interopRequireDefault(_SubtopicLinkList);

var _shapes = require('../shapes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var classes = new _reactBemHelper2.default({
  name: 'topic-menu',
  prefix: 'c-'
});

var TopicMenu = function (_Component) {
  _inherits(TopicMenu, _Component);

  function TopicMenu(props) {
    _classCallCheck(this, TopicMenu);

    var _this = _possibleConstructorReturn(this, (TopicMenu.__proto__ || Object.getPrototypeOf(TopicMenu)).call(this, props));

    _this.state = {
      expandedTopicId: undefined
    };

    _this.closeCallback = null;
    _this.handleMouseClick = _this.handleMouseClick.bind(_this);
    // this.handleMouseLeave = this.handleMouseLeave.bind(this);
    return _this;
  }

  _createClass(TopicMenu, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.closeCallback) {
        clearTimeout(this.closeCallback);
      }
    }
  }, {
    key: 'handleMouseClick',
    value: function handleMouseClick(topicId) {
      if (this.closeCallback) {
        clearTimeout(this.closeCallback);
        this.closeCallback = null;
      }
      this.setState({ expandedTopicId: topicId });
    }

    // handleMouseLeave() {
    //   this.closeCallback = setTimeout(() => {
    //     this.setState({ expandedTopicId: undefined });
    //   }, this.props.delay);
    // }

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          topics = _props.topics,
          toTopic = _props.toTopic,
          closeMenu = _props.close;
      var expandedTopicId = this.state.expandedTopicId;

      var expandedTopic = topics.find(function (topic) {
        return topic.id === expandedTopicId;
      });
      return _react2.default.createElement(
        'div',
        _extends({}, classes('dropdown', null, 'o-wrapper u-1/1'), { onMouseLeave: this.handleMouseLeave }),
        _react2.default.createElement(
          'ul',
          classes('list', null, classes('left').className),
          topics.map(function (topic) {
            return _react2.default.createElement(
              'li',
              _extends({}, classes('topic-item', topic.id === expandedTopicId && 'active'), { onClick: function onClick() {
                  return _this2.handleMouseClick(topic.id);
                }, key: topic.id }),
              _react2.default.createElement(
                _SafeLink2.default,
                _extends({}, classes('link'), { to: toTopic(topic.id) }),
                topic.name
              )
            );
          })
        ),
        expandedTopic ? _react2.default.createElement(_SubtopicLinkList2.default, {
          classes: classes,
          className: classes('right').className,
          closeMenu: closeMenu,
          topic: expandedTopic,
          toTopic: toTopic
        }) : null
      );
    }
  }]);

  return TopicMenu;
}(_react.Component);

exports.default = TopicMenu;


TopicMenu.propTypes = {
  topics: _react.PropTypes.arrayOf(_shapes.TopicShape).isRequired,
  toTopic: _react.PropTypes.func.isRequired,
  close: _react.PropTypes.func,
  delay: _react.PropTypes.number
};

TopicMenu.defaultProps = {
  delay: 500
};