'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageLink = undefined;

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _SafeLink = require('../common/SafeLink');

var _SafeLink2 = _interopRequireDefault(_SafeLink);

var _pagerHelpers = require('./pagerHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PageLink = exports.PageLink = function PageLink(_ref) {
  var children = _ref.children,
      page = _ref.page,
      currentQuery = _ref.query,
      pathname = _ref.pathname,
      onClick = _ref.onClick,
      modifier = _ref.modifier;

  var modifierClass = modifier ? 'pager_step--' + modifier : '';
  var classes = (0, _classnames2.default)('pager_step', modifierClass);

  var query = _extends({}, currentQuery, { page: page });
  var linkToPage = {
    pathname: pathname,
    query: query
  };

  var handleClick = function handleClick() {
    return onClick(query);
  };

  return _react2.default.createElement(
    _SafeLink2.default,
    { className: classes, onClick: handleClick, to: linkToPage },
    children
  );
};

PageLink.propTypes = {
  children: _react.PropTypes.node.isRequired,
  page: _react.PropTypes.number.isRequired,
  query: _react.PropTypes.object.isRequired,
  pathname: _react.PropTypes.string.isRequired,
  onClick: _react.PropTypes.func.isRequired,
  modifier: _react.PropTypes.string
};

function Pager(props) {
  var page = props.page,
      lastPage = props.lastPage,
      rest = _objectWithoutProperties(props, ['page', 'lastPage']);

  var steps = (0, _pagerHelpers.stepNumbers)(page, lastPage);

  var pageLinks = steps.map(function (n) {
    if (n === page) {
      return _react2.default.createElement(
        'span',
        { key: n, className: 'pager_step pager_step--active' },
        n
      );
    }
    return _react2.default.createElement(
      PageLink,
      _extends({ key: n, page: n }, rest),
      n
    );
  });

  var prevPageLink = steps[0] < page ? _react2.default.createElement(
    PageLink,
    _extends({ modifier: 'back', page: page - 1 }, rest),
    ' ',
    '<',
    ' '
  ) : null;
  var nextPageLink = page < lastPage ? _react2.default.createElement(
    PageLink,
    _extends({ modifier: 'forward', page: page + 1 }, rest),
    ' ',
    '>',
    ' '
  ) : null;

  return _react2.default.createElement(
    'div',
    { className: 'pager' },
    prevPageLink,
    pageLinks,
    nextPageLink
  );
}

Pager.propTypes = {
  page: _react.PropTypes.number.isRequired,
  pathname: _react.PropTypes.string.isRequired,
  lastPage: _react.PropTypes.number.isRequired,
  query: _react.PropTypes.object.isRequired,
  onClick: _react.PropTypes.func
};

Pager.defaultProps = {
  onClick: function onClick() {}
};