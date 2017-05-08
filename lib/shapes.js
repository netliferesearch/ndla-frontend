'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourceShape = exports.ArticleShape = exports.FootNoteShape = exports.TopicShape = exports.SubjectShape = exports.LicenseShape = exports.LicenseRightShape = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LicenseRightShape = exports.LicenseRightShape = _propTypes2.default.shape({
  short: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  userFriendlyTitle: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string.isRequired
});

var LicenseShape = exports.LicenseShape = _propTypes2.default.shape({
  short: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  userFriendlyTitle: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string.isRequired,
  rights: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired
});

var SubjectShape = exports.SubjectShape = _propTypes2.default.shape({
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired
});

var TopicShape = exports.TopicShape = _propTypes2.default.shape({
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  subtopics: _propTypes2.default.array
});

var FootNoteShape = exports.FootNoteShape = _propTypes2.default.shape({
  title: _propTypes2.default.string.isRequired,
  year: _propTypes2.default.string.isRequired,
  authors: _propTypes2.default.array.isRequired,
  edition: _propTypes2.default.string.isRequired,
  publisher: _propTypes2.default.string.isRequired
});

var ArticleShape = exports.ArticleShape = _propTypes2.default.shape({
  title: _propTypes2.default.string.isRequired,
  content: _propTypes2.default.string.isRequired,
  copyright: _propTypes2.default.shape({
    authors: _propTypes2.default.array.isRequired
  }).isRequired,
  created: _propTypes2.default.string.isRequired,
  updated: _propTypes2.default.string.isRequired
});

var ResourceShape = exports.ResourceShape = _propTypes2.default.shape({
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string,
  introduction: _propTypes2.default.string,
  coverPhotoUrl: _propTypes2.default.string,
  contentUri: _propTypes2.default.string.isRequired
});