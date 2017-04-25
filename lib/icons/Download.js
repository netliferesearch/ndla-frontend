"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Download = function Download(_ref) {
  var className = _ref.className;
  return _react2.default.createElement(
    "svg",
    { version: "1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", className: className },
    _react2.default.createElement("path", { className: "path1", d: "M28 16h-5l-7 7-7-7h-5l-4 8v2h32v-2l-4-8zM0 28h32v2h-32v-2zM18 10v-8h-4v8h-7l9 9 9-9h-7z" })
  );
}; /**
    * Copyright (c) 2016-present, NDLA.
    *
    * This source code is licensed under the GPLv3 license found in the
    * LICENSE file in the root directory of this source tree.
    *
    */

Download.propTypes = {
  className: _react.PropTypes.string.isRequired
};

exports.default = Download;