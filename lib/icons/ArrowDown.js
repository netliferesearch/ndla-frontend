"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowDown = function ArrowDown(_ref) {
  var className = _ref.className;
  return _react2.default.createElement(
    "svg",
    { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 26 26", className: className },
    _react2.default.createElement("path", {
      d: "M13.8,14.6l8.8-8.6c0.4-0.4,1-0.4,1.4,0l1.5,1.5c0.4,0.4,0.4,1,0,1.4l-11,10.9c-0.2,0.2-0.5,0.3-0.7,0.3s-0.5-0.1-0.7-0.3 L2.1,9c-0.4-0.4-0.4-1,0-1.4l1.5-1.5c0.4-0.4,1-0.4,1.4,0L13.8,14.6z"
    })
  );
}; /**
    * Copyright (c) 2016-present, NDLA.
    *
    * This source code is licensed under the GPLv3 license found in the
    * LICENSE file in the root directory of this source tree.
    *
    */

ArrowDown.propTypes = {
  className: _react.PropTypes.string.isRequired
};

exports.default = ArrowDown;