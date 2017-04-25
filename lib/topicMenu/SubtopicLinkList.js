'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SafeLink = require('../common/SafeLink');

var _SafeLink2 = _interopRequireDefault(_SafeLink);

var _shapes = require('../shapes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubtopicLink = function SubtopicLink(_ref) {
  var classes = _ref.classes,
      closeMenu = _ref.closeMenu,
      to = _ref.to,
      subtopic = _ref.subtopic;
  return _react2.default.createElement(
    'li',
    _extends({}, classes('subtopic-item'), { key: subtopic.id }),
    _react2.default.createElement(
      _SafeLink2.default,
      _extends({}, classes('link', 'underline'), { onClick: closeMenu, to: to }),
      subtopic.name
    )
  );
};

SubtopicLink.propTypes = {
  classes: _react.PropTypes.func.isRequired,
  closeMenu: _react.PropTypes.func,
  subtopic: _shapes.TopicShape.isRequired,
  to: _react.PropTypes.string.isRequired
};

var SubtopicLinkList = function SubtopicLinkList(_ref2) {
  var className = _ref2.className,
      classes = _ref2.classes,
      closeMenu = _ref2.closeMenu,
      topic = _ref2.topic,
      toTopic = _ref2.toTopic;
  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      _SafeLink2.default,
      _extends({}, classes('link', ['underline', 'big']), { onClick: closeMenu, to: toTopic(topic.id) }),
      topic.name,
      ' ',
      '›'
    ),
    _react2.default.createElement(
      'ul',
      classes('list'),
      topic.subtopics.map(function (subtopic) {
        return _react2.default.createElement(SubtopicLink, {
          classes: classes,
          closeMenu: closeMenu,
          key: subtopic.id,
          to: toTopic(topic.id, subtopic.id),
          subtopic: subtopic
        });
      })
    )
  );
};

SubtopicLinkList.propTypes = {
  classes: _react.PropTypes.func.isRequired,
  className: _react.PropTypes.string,
  closeMenu: _react.PropTypes.func.isRequired,
  topic: _shapes.TopicShape.isRequired,
  toTopic: _react.PropTypes.func.isRequired
};

exports.default = SubtopicLinkList;