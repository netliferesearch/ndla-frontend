"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Document = function Document(_ref) {
  var className = _ref.className;
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 50 50", className: className },
    _react2.default.createElement("path", { d: "M30.4,2H7v46h36V14.6L30.4,2z M15,28h16v2H15V28z M35,36H15v-2h20V36z M35,24H15v-2h20V24z M30,15V4.4L40.6,15H30z" })
  );
}; /**
    * Copyright (c) 2016-present, NDLA.
    *
    * This source code is licensed under the GPLv3 license found in the
    * LICENSE file in the root directory of this source tree.
    *
    */

Document.propTypes = {
  className: _react.PropTypes.string.isRequired
};

exports.default = Document;