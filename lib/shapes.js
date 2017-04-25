'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourceShape = exports.ArticleShape = exports.FootNoteShape = exports.TopicShape = exports.SubjectShape = exports.LicenseShape = exports.LicenseRightShape = undefined;

var _react = require('react');

var LicenseRightShape = exports.LicenseRightShape = _react.PropTypes.shape({
  short: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string.isRequired,
  userFriendlyTitle: _react.PropTypes.string.isRequired,
  description: _react.PropTypes.string.isRequired
}); /**
     * Copyright (c) 2016-present, NDLA.
     *
     * This source code is licensed under the GPLv3 license found in the
     * LICENSE file in the root directory of this source tree.
     *
     */

var LicenseShape = exports.LicenseShape = _react.PropTypes.shape({
  short: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string.isRequired,
  userFriendlyTitle: _react.PropTypes.string.isRequired,
  description: _react.PropTypes.string.isRequired,
  rights: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired
});

var SubjectShape = exports.SubjectShape = _react.PropTypes.shape({
  id: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired
});

var TopicShape = exports.TopicShape = _react.PropTypes.shape({
  id: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  subtopics: _react.PropTypes.array
});

var FootNoteShape = exports.FootNoteShape = _react.PropTypes.shape({
  title: _react.PropTypes.string.isRequired,
  year: _react.PropTypes.string.isRequired,
  authors: _react.PropTypes.array.isRequired,
  edition: _react.PropTypes.string.isRequired,
  publisher: _react.PropTypes.string.isRequired
});

var ArticleShape = exports.ArticleShape = _react.PropTypes.shape({
  title: _react.PropTypes.string.isRequired,
  content: _react.PropTypes.string.isRequired,
  copyright: _react.PropTypes.shape({
    authors: _react.PropTypes.array.isRequired
  }).isRequired,
  created: _react.PropTypes.string.isRequired,
  updated: _react.PropTypes.string.isRequired
});

var ResourceShape = exports.ResourceShape = _react.PropTypes.shape({
  id: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string,
  introduction: _react.PropTypes.string,
  coverPhotoUrl: _react.PropTypes.string,
  contentUri: _react.PropTypes.string.isRequired
});