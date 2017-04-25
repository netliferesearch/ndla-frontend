"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Path = function Path(_ref) {
  var className = _ref.className;
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", width: "50", height: "50", viewBox: "0 0 50 50", className: className },
    _react2.default.createElement("path", { d: "M 46.5 0 C 44.567003 0 43 1.5670034 43 3.5 C 43 4.0084075 43.117551 4.5015811 43.3125 4.9375 L 38.9375 11.5 C 38.148037 11.513809 37.422889 11.796264 36.84375 12.25 L 23.34375 7.96875 C 22.906496 6.5343139 21.577464 5.5 20 5.5 C 18.067003 5.5 16.5 7.0670034 16.5 9 C 16.5 10.529139 17.477065 11.804742 18.84375 12.28125 L 23.28125 27.8125 C 23.185287 27.931833 23.111133 28.056061 23.03125 28.1875 L 11.75 28.84375 C 11.10932 28.025999 10.119385 27.5 9 27.5 C 7.0670034 27.5 5.5 29.067003 5.5 31 C 5.5 31.740911 5.7321955 32.434262 6.125 33 L 2.28125 43.21875 C 0.94349881 43.710704 0 44.991572 0 46.5 C 0 48.432997 1.5670034 50 3.5 50 C 5.4329966 50 7 48.432997 7 46.5 C 7 45.638277 6.6726816 44.859848 6.15625 44.25 L 9.875 34.375 C 10.762399 34.14803 11.499142 33.602773 11.96875 32.84375 L 23.28125 32.15625 C 23.922364 32.964642 24.888099 33.5 26 33.5 C 27.932997 33.5 29.5 31.932997 29.5 30 C 29.5 28.470861 28.522935 27.195258 27.15625 26.71875 L 22.96875 12.03125 L 35.65625 16.03125 C 36.093504 17.465686 37.422536 18.5 39 18.5 C 40.932997 18.5 42.5 16.932997 42.5 15 C 42.5 14.551269 42.403868 14.113009 42.25 13.71875 L 46.75 6.96875 C 48.565955 6.8401904 50 5.3486773 50 3.5 C 50 1.5670034 48.432997 0 46.5 0 z" })
  );
}; /**
    * Copyright (c) 2016-present, NDLA.
    *
    * This source code is licensed under the GPLv3 license found in the
    * LICENSE file in the root directory of this source tree.
    *
    */

Path.propTypes = {
  className: _react.PropTypes.string.isRequired
};

exports.default = Path;