'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Fallback to normal link if app is missing RouterContext
var SafeLink = function SafeLink(props, context) {
  if (!context.router) {
    var to = props.to,
        onClick = props.onClick,
        className = props.className;

    var href = typeof to === 'string' ? to : '#';
    return _react2.default.createElement(
      'a',
      { href: href, onClick: onClick, className: className },
      props.children
    );
  }

  return _react2.default.createElement(
    _reactRouterDom.Link,
    props,
    props.children
  );
}; /**
    * Copyright (c) 2016-present, NDLA.
    *
    * This source code is licensed under the GPLv3 license found in the
    * LICENSE file in the root directory of this source tree.
    *
    */

SafeLink.propTypes = _reactRouterDom.Link.propTypes;

SafeLink.defaultProps = _reactRouterDom.Link.defaultProps;

SafeLink.contextTypes = {
  router: _propTypes2.default.object
};

exports.default = SafeLink;