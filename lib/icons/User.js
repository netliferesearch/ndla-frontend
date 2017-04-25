"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = function User(_ref) {
  var className = _ref.className;
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", version: "1", viewBox: "0 0 24 24", className: className },
    _react2.default.createElement("path", { d: "M 12 4 C 9.790861 4 8 5.790861 8 8 C 8 10.209139 9.790861 12 12 12 C 14.209139 12 16 10.209139 16 8 C 16 5.790861 14.209139 4 12 4 z M 12 14 C 5.9 14 4 18 4 18 L 4 20 L 20 20 L 20 18 C 20 18 18.1 14 12 14 z" })
  );
}; /**
    * Copyright (c) 2016-present, NDLA.
    *
    * This source code is licensed under the GPLv3 license found in the
    * LICENSE file in the root directory of this source tree.
    *
    */

User.propTypes = {
  className: _react.PropTypes.string.isRequired
};

exports.default = User;