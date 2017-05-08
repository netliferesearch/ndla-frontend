'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shapes = require('../shapes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*
                                                                                                                                                                                                                              * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                              * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              */

var FootNote = function FootNote(_ref) {
  var footNote = _ref.footNote,
      editionTitle = _ref.editionTitle,
      publisherTitle = _ref.publisherTitle;
  return _react2.default.createElement(
    'li',
    { className: 'article_foot-note' },
    _react2.default.createElement(
      'cite',
      null,
      footNote.title + ' (' + footNote.year + '), ' + footNote.authors.join(' ') + ' ' + editionTitle + ': ' + footNote.edition + ', ' + publisherTitle + ': ' + footNote.publisher
    )
  );
};

FootNote.propTypes = {
  refNr: _propTypes2.default.string.isRequired,
  footNote: _shapes.FootNoteShape.isRequired,
  editionTitle: _propTypes2.default.string.isRequired,
  publisherTitle: _propTypes2.default.string.isRequired
};

var ArticleFootNotes = function ArticleFootNotes(_ref2) {
  var footNotes = _ref2.footNotes,
      rest = _objectWithoutProperties(_ref2, ['footNotes']);

  return _react2.default.createElement(
    'ol',
    { className: 'article_foot-notes' },
    Object.keys(footNotes).map(function (key) {
      return _react2.default.createElement(FootNote, _extends({ key: key, refNr: key.replace('ref_', ''), footNote: footNotes[key] }, rest));
    })
  );
};

ArticleFootNotes.propTypes = {
  footNotes: _propTypes2.default.object,
  editionTitle: _propTypes2.default.string.isRequired,
  publisherTitle: _propTypes2.default.string.isRequired
};

ArticleFootNotes.defaultProps = {
  editionTitle: 'Edition',
  publisherTitle: 'Publisher'
};

exports.default = ArticleFootNotes;