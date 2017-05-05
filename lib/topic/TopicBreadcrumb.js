'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBemHelper = require('react-bem-helper');

var _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

var _ndlaUtil = require('ndla-util');

var _SafeLink = require('../common/SafeLink');

var _SafeLink2 = _interopRequireDefault(_SafeLink);

var _shapes = require('../shapes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                     *
                                                                                                                                                                                                     * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                     * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                     *
                                                                                                                                                                                                     */

var classes = new _reactBemHelper2.default({
  name: 'breadcrumb',
  prefix: 'c-'
});

var TopicBreadcrumbItem = function TopicBreadcrumbItem(_ref) {
  var to = _ref.to,
      children = _ref.children;
  return _react2.default.createElement(
    'li',
    classes('item'),
    _react2.default.createElement(
      _SafeLink2.default,
      { to: to },
      children
    )
  );
};

TopicBreadcrumbItem.propTypes = {
  children: _propTypes2.default.node.isRequired,
  to: _propTypes2.default.string.isRequired
};

var TopicBreadcrumb = function TopicBreadcrumb(_ref2) {
  var children = _ref2.children,
      subject = _ref2.subject,
      topicPath = _ref2.topicPath,
      toTopic = _ref2.toTopic,
      toSubjects = _ref2.toSubjects,
      subjectsTitle = _ref2.subjectsTitle;

  var topicIds = topicPath.map(function (topic) {
    return topic.id;
  });
  return _react2.default.createElement(
    'div',
    classes('', ''),
    children,
    _react2.default.createElement(
      'ol',
      classes('list'),
      _react2.default.createElement(
        TopicBreadcrumbItem,
        { key: (0, _ndlaUtil.uuid)(), topicIds: [], to: toSubjects() },
        subjectsTitle
      ),
      _react2.default.createElement(
        TopicBreadcrumbItem,
        { key: subject.id, topicIds: [], to: toTopic(subject.id) },
        subject.name
      ),
      topicPath.map(function (topic, i) {
        return _react2.default.createElement(
          TopicBreadcrumbItem,
          { key: topic.id, topicIds: topicIds.slice(0, 1 + i), to: toTopic.apply(undefined, [subject.id].concat(_toConsumableArray(topicIds.slice(0, 1 + i)))) },
          topic.name
        );
      })
    )
  );
};

TopicBreadcrumb.propTypes = {
  children: _propTypes2.default.node,
  subject: _shapes.SubjectShape.isRequired,
  topicPath: _propTypes2.default.arrayOf(_shapes.TopicShape),
  toTopic: _propTypes2.default.func.isRequired,
  toSubjects: _propTypes2.default.func.isRequired,
  subjectsTitle: _propTypes2.default.string.isRequired
};

exports.default = TopicBreadcrumb;