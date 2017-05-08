'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ToggleLicenseBox = function (_Component) {
  _inherits(ToggleLicenseBox, _Component);

  function ToggleLicenseBox() {
    _classCallCheck(this, ToggleLicenseBox);

    var _this = _possibleConstructorReturn(this, (ToggleLicenseBox.__proto__ || Object.getPrototypeOf(ToggleLicenseBox)).call(this));

    _this.toogleLicenseBox = _this.toogleLicenseBox.bind(_this);
    _this.state = {
      expanded: false
    };
    return _this;
  }

  _createClass(ToggleLicenseBox, [{
    key: 'toogleLicenseBox',
    value: function toogleLicenseBox() {
      this.setState({
        expanded: !this.state.expanded
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          openTitle = _props.openTitle,
          closeTitle = _props.closeTitle,
          children = _props.children,
          licenseBox = _props.licenseBox;
      var expanded = this.state.expanded;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('license c-licensebox', { 'c-licensebox--expanded': expanded }) },
        _react2.default.createElement(
          _Button2.default,
          { stripped: true, className: 'license-toggler', onClick: this.toogleLicenseBox },
          expanded ? closeTitle : openTitle
        ),
        children,
        expanded ? licenseBox : null
      );
    }
  }]);

  return ToggleLicenseBox;
}(_react.Component);

ToggleLicenseBox.propTypes = {
  openTitle: _propTypes2.default.string.isRequired,
  closeTitle: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node,
  licenseBox: _propTypes2.default.node.isRequired
};

exports.default = ToggleLicenseBox;