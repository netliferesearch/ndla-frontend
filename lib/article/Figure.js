'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Figure = exports.FigureCaption = exports.FigureDetails = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B These component is used to render static markup serverside
// Any interactivty is added by scripts located in the ndla-article-scripts package

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ndlaUtil = require('ndla-util');

var _ndlaLicenses = require('ndla-licenses');

var _reactBemHelper = require('react-bem-helper');

var _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

var _LicenseByline = require('../license/LicenseByline');

var _LicenseByline2 = _interopRequireDefault(_LicenseByline);

var _Icon = require('../icons/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var classes = new _reactBemHelper2.default({
  name: 'figure',
  prefix: 'c-'
});

var FigureDetails = exports.FigureDetails = function FigureDetails(_ref) {
  var children = _ref.children,
      authors = _ref.authors,
      licenseAbbreviation = _ref.licenseAbbreviation;
  return _react2.default.createElement(
    'div',
    _extends({}, classes('license'), { id: 'figmeta' }),
    _react2.default.createElement(
      'div',
      { className: 'u-expanded' },
      _react2.default.createElement(
        'div',
        { className: 'c-licenseToggle__details' },
        _react2.default.createElement(_LicenseByline2.default, { license: (0, _ndlaLicenses.getLicenseByAbbreviation)(licenseAbbreviation) }),
        _react2.default.createElement(
          'ul',
          classes('list'),
          authors.map(function (author) {
            return _react2.default.createElement(
              'li',
              { key: (0, _ndlaUtil.uuid)(), className: 'o-list__item' },
              author.type + ': ' + author.name
            );
          })
        )
      ),
      children ? _react2.default.createElement(
        'div',
        { className: 'c-licenseToggle__ctablock' },
        ' ',
        children,
        ' '
      ) : null
    )
  );
};

FigureDetails.propTypes = {
  children: _propTypes2.default.node,
  licenseAbbreviation: _propTypes2.default.string.isRequired,
  authors: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    type: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired
  }))
};

var FigureCaption = exports.FigureCaption = function FigureCaption(_ref2) {
  var caption = _ref2.caption,
      authors = _ref2.authors,
      reuseLabel = _ref2.reuseLabel,
      licenseAbbreviation = _ref2.licenseAbbreviation;
  return _react2.default.createElement(
    'figcaption',
    classes('caption'),
    caption ? _react2.default.createElement(
      'div',
      { className: 'c-figcaption__info' },
      '$',
      caption
    ) : null,
    _react2.default.createElement(
      'div',
      classes('byline'),
      _react2.default.createElement(
        'div',
        classes('byline-licenselist'),
        _react2.default.createElement(
          _LicenseByline2.default,
          { license: (0, _ndlaLicenses.getLicenseByAbbreviation)(licenseAbbreviation) },
          _react2.default.createElement(
            'span',
            { className: 'article_meta' },
            authors.map(function (author) {
              return author.name;
            }).join(', ')
          )
        )
      ),
      _react2.default.createElement(
        'button',
        { className: 'c-button c-button--outline c-figure__captionbtn' },
        _react2.default.createElement(_Icon2.default.OpenWindow, null),
        ' ',
        reuseLabel
      )
    )
  );
};

FigureCaption.propTypes = {
  caption: _propTypes2.default.string,
  reuseLabel: _propTypes2.default.string.isRequired,
  licenseAbbreviation: _propTypes2.default.string.isRequired,
  authors: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  }))
};

var Figure = function Figure(_ref3) {
  var children = _ref3.children,
      rest = _objectWithoutProperties(_ref3, ['children']);

  return _react2.default.createElement(
    'figure',
    _extends({}, classes(), rest),
    _react2.default.createElement(
      'button',
      classes('close'),
      'X'
    ),
    children
  );
};

exports.Figure = Figure;
Figure.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = Figure;