"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = exports.FooterEditor = exports.FooterRuler = exports.FooterText = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterText = exports.FooterText = function FooterText(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "p",
    { className: "footer_text" },
    children
  );
}; /**
    * Copyright (c) 2016-present, NDLA.
    *
    * This source code is licensed under the GPLv3 license found in the
    * LICENSE file in the root directory of this source tree.
    *
    */

FooterText.propTypes = {
  children: _react.PropTypes.node.isRequired
};

var FooterRuler = exports.FooterRuler = function FooterRuler() {
  return _react2.default.createElement("div", { className: "footer_ruler" });
};

var FooterEditor = exports.FooterEditor = function FooterEditor(_ref2) {
  var title = _ref2.title,
      name = _ref2.name;
  return _react2.default.createElement(
    "span",
    { className: "footer_editor" },
    title,
    _react2.default.createElement(
      "strong",
      null,
      name
    )
  );
};

FooterEditor.propTypes = {
  title: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired
};

var Footer = exports.Footer = function Footer(_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement(
    "footer",
    { className: "footer" },
    children
  );
};

Footer.propTypes = {
  children: _react.PropTypes.node.isRequired
};