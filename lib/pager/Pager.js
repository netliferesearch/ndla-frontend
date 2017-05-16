'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   */

exports.default = Pager;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _reactRouterDom = require('react-router-dom');

var _SafeLink = require('../common/SafeLink');

var _SafeLink2 = _interopRequireDefault(_SafeLink);

var _pagerHelpers = require('./pagerHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var createQueryString = function createQueryString(obj) {
  return Object.keys(obj).map(function (key) {
    return key + '=' + obj[key];
  }).join('&');
};

var PageItem = exports.PageItem = function PageItem(_ref) {
  var children = _ref.children,
      page = _ref.page,
      currentQuery = _ref.query,
      pathname = _ref.pathname,
      onClick = _ref.onClick,
      modifier = _ref.modifier,
      Component = _ref.pageItemComponentClass;

  var modifierClass = modifier ? 'pager_step--' + modifier : '';
  var classes = (0, _classnames2.default)('pager_step', modifierClass);

  var query = _extends({}, currentQuery, { page: page });
  var linkToPage = {
    pathname: pathname,
    search: createQueryString(query)
  };

  var handleClick = function handleClick() {
    return onClick(query);
  };

  if (Component === _SafeLink2.default || Component === _reactRouterDom.Link) {
    return _react2.default.createElement(
      _SafeLink2.default,
      { className: classes, onClick: handleClick, to: linkToPage },
      children
    );
  }
  return _react2.default.createElement(
    Component,
    { className: classes, onClick: handleClick },
    children
  );
};

PageItem.propTypes = {
  pageItemComponentClass: _elementType2.default.isRequired,
  children: _propTypes2.default.node.isRequired,
  page: _propTypes2.default.number.isRequired,
  query: _propTypes2.default.object.isRequired, // eslint-disable-line
  pathname: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  modifier: _propTypes2.default.string
};

function Pager(props) {
  var page = props.page,
      lastPage = props.lastPage,
      rest = _objectWithoutProperties(props, ['page', 'lastPage']);

  var steps = (0, _pagerHelpers.stepNumbers)(page, lastPage);

  var PageItems = steps.map(function (n) {
    if (n === page) {
      return _react2.default.createElement(
        'span',
        { key: n, className: 'pager_step pager_step--active' },
        n
      );
    }
    return _react2.default.createElement(
      PageItem,
      _extends({ key: n, page: n }, rest),
      n
    );
  });

  var prevPageItem = steps[0] < page ? _react2.default.createElement(
    PageItem,
    _extends({ modifier: 'back', page: page - 1 }, rest),
    ' ',
    '<',
    ' '
  ) : null;
  var nextPageItem = page < lastPage ? _react2.default.createElement(
    PageItem,
    _extends({ modifier: 'forward', page: page + 1 }, rest),
    ' ',
    '>',
    ' '
  ) : null;

  return _react2.default.createElement(
    'div',
    { className: 'pager' },
    prevPageItem,
    PageItems,
    nextPageItem
  );
}

Pager.propTypes = {
  pageItemComponentClass: _elementType2.default,
  page: _propTypes2.default.number.isRequired,
  pathname: _propTypes2.default.string.isRequired,
  lastPage: _propTypes2.default.number.isRequired,
  query: _propTypes2.default.object.isRequired, // eslint-disable-line
  onClick: _propTypes2.default.func
};

Pager.defaultProps = {
  onClick: function onClick() {},
  pageItemComponentClass: _SafeLink2.default
};