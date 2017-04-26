'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBemHelper = require('react-bem-helper');

var _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

var _SafeLink = require('../common/SafeLink');

var _SafeLink2 = _interopRequireDefault(_SafeLink);

var _shapes = require('../shapes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                              * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              */

var classes = new _reactBemHelper2.default({
  name: 'topic-introduction',
  prefix: 'c-'
});

var TopicIntroduction = function TopicIntroduction(_ref) {
  var toTopic = _ref.toTopic,
      topic = _ref.topic;
  return _react2.default.createElement(
    'li',
    classes('item'),
    _react2.default.createElement(
      'div',
      classes('body'),
      _react2.default.createElement(
        'h3',
        classes('header'),
        _react2.default.createElement(
          _SafeLink2.default,
          { to: toTopic(topic.id) },
          topic.name
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        topic.introduction
      )
    )
  );
};

TopicIntroduction.propTypes = {
  topic: _shapes.TopicShape.isRequired,
  toTopic: _react.PropTypes.func.isRequired
};

var TopicIntroductionList = function TopicIntroductionList(_ref2) {
  var topics = _ref2.topics,
      rest = _objectWithoutProperties(_ref2, ['topics']);

  return _react2.default.createElement(
    'ul',
    classes('list'),
    topics.map(function (topic) {
      return _react2.default.createElement(TopicIntroduction, _extends({ key: topic.id }, rest, { topic: topic }));
    })
  );
};

TopicIntroductionList.propTypes = {
  toTopic: _react.PropTypes.func.isRequired,
  topics: _react.PropTypes.arrayOf(_shapes.TopicShape).isRequired
};

exports.default = TopicIntroductionList;