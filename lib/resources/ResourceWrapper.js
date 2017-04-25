'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OneColumn = require('../layout/OneColumn');

var _OneColumn2 = _interopRequireDefault(_OneColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var ResourceContainer = function ResourceContainer(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'c-resources' },
    _react2.default.createElement(
      _OneColumn2.default,
      { cssModifier: 'narrow' },
      _react2.default.createElement(
        'section',
        null,
        children
      )
    )
  );
};

ResourceContainer.propTypes = {
  children: _react.PropTypes.node
};

exports.default = ResourceContainer;