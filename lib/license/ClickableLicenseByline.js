'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LicenseIconList = require('./LicenseIconList');

var _LicenseIconList2 = _interopRequireDefault(_LicenseIconList);

var _shapes = require('../shapes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FRI OG BEGRENSET
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ClickableLicenseByline = function (_Component) {
  _inherits(ClickableLicenseByline, _Component);

  function ClickableLicenseByline(props) {
    _classCallCheck(this, ClickableLicenseByline);

    var _this = _possibleConstructorReturn(this, (ClickableLicenseByline.__proto__ || Object.getPrototypeOf(ClickableLicenseByline)).call(this, props));

    _this.state = { selectedLicenseRight: undefined };
    _this.handleLicenseRightChange = _this.handleLicenseRightChange.bind(_this);
    return _this;
  }

  _createClass(ClickableLicenseByline, [{
    key: 'handleLicenseRightChange',
    value: function handleLicenseRightChange(licenseRight) {
      var selectedLicenseRight = this.state.selectedLicenseRight;

      if (!selectedLicenseRight || selectedLicenseRight.short !== licenseRight.short) {
        this.setState({ selectedLicenseRight: licenseRight });
      } else {
        this.setState({ selectedLicenseRight: undefined });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          license = _props.license,
          stacked = _props.stacked;
      var selectedLicenseRight = this.state.selectedLicenseRight;

      var activeLicenseRight = selectedLicenseRight ? selectedLicenseRight.short : undefined;
      var classList = ['license-byline'];
      if (stacked) {
        classList.push('license-byline--stacked');
      }

      return _react2.default.createElement(
        'div',
        { className: classList.join(' ') },
        _react2.default.createElement(_LicenseIconList2.default, { licenseRights: license.rights, onLicenseIconClick: this.handleLicenseRightChange, activeLicenseRight: activeLicenseRight }),
        selectedLicenseRight ? _react2.default.createElement(
          'div',
          { className: 'license-byline__body license-byline__body--black' },
          _react2.default.createElement(
            'span',
            null,
            selectedLicenseRight.description
          )
        ) : undefined,
        _react2.default.createElement(
          'div',
          { className: 'license-byline__body' },
          _react2.default.createElement(
            'span',
            null,
            license.author
          )
        ),
        children ? _react2.default.createElement(
          'div',
          { className: 'license-byline__body' },
          children
        ) : null
      );
    }
  }]);

  return ClickableLicenseByline;
}(_react.Component);

ClickableLicenseByline.propTypes = {
  license: _shapes.LicenseShape.isRequired,
  children: _react.PropTypes.node,
  stacked: _react.PropTypes.string
};

exports.default = ClickableLicenseByline;