'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('react-router/lib/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Fallback to normal link if app is missing RouterContext
/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

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
    _Link2.default,
    props,
    props.children
  );
};

SafeLink.propTypes = _Link2.default.propTypes;

SafeLink.defaultProps = _Link2.default.defaultProps;

SafeLink.contextTypes = {
  router: _react.PropTypes.object
};

exports.default = SafeLink;