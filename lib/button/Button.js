'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBemHelper = require('react-bem-helper');

var _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                              * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              */

var classes = new _reactBemHelper2.default({
  name: 'button',
  prefix: 'c-'
});

var Button = function Button(_ref) {
  var outline = _ref.outline,
      square = _ref.square,
      stripped = _ref.stripped,
      submit = _ref.submit,
      loading = _ref.loading,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['outline', 'square', 'stripped', 'submit', 'loading', 'className']);

  var modifiers = {
    outline: outline,
    square: square,
    stripped: stripped
  };

  var type = submit ? 'submit' : rest.type || 'button';

  // Unless the disabled state is explicitly set, the button is disabled when loading.
  var disabled = (rest.disabled !== undefined ? rest.disabled : loading) || false;

  return _react2.default.createElement(
    'button',
    _extends({}, classes('', modifiers, className), rest, { type: type, disabled: disabled }),
    rest.children
  );
};

Button.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,

  outline: _react.PropTypes.bool,
  square: _react.PropTypes.bool,
  stripped: _react.PropTypes.bool,
  loading: _react.PropTypes.bool,
  onClick: _react.PropTypes.func,

  /**
  * Applies the submit attribute to the button for use in forms. This overrides the type
  */
  submit: _react.PropTypes.bool,

  /**
  * Defines HTML button type Attribute
  * @type {("button"|"reset"|"submit")}
  * @defaultValue 'button'
  */
  type: _react.PropTypes.oneOf(['button', 'submit', 'reset'])
};

exports.default = Button;