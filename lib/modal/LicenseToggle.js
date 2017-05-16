'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ndlaLicenses = require('ndla-licenses');

var _Icon = require('../icons/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _ = require('../');

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

var LicenseToggle = function (_Component) {
  _inherits(LicenseToggle, _Component);

  function LicenseToggle() {
    var _ret;

    _classCallCheck(this, LicenseToggle);

    var _this = _possibleConstructorReturn(this, (LicenseToggle.__proto__ || Object.getPrototypeOf(LicenseToggle)).call(this));

    _this.state = {
      condition: false
    };

    _this.handleClick = _this.handleClick.bind(_this);
    return _ret = false, _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LicenseToggle, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ condition: !this.state.condition });
      document.getElementById('figureExample').classList.toggle('c-figure--active');

      // Show/hide content
      if (this.state.condition === true) {
        document.getElementById('toggle').classList.remove('u-hidden');
      } else {
        document.getElementById('toggle').classList.add('u-hidden');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'figure',
        { className: 'c-figure', id: 'figureExample' },
        _react2.default.createElement(
          'button',
          { onClick: this.handleClick, className: 'c-figure__close' },
          'X'
        ),
        _react2.default.createElement(
          'div',
          { className: 'c-figure__img' },
          _react2.default.createElement(
            'a',
            { onClick: this.handleClick, href: '' },
            this.props.children
          )
        ),
        _react2.default.createElement(
          'figcaption',
          { className: '', id: 'toggle' },
          _react2.default.createElement(
            'div',
            { className: 'c-figcaption__info' },
            'I v\xE6rmeldingene til NRK p\xE5 1980-tallet var symbolet for str\xE5lende solskinn en hvit sirkel. Ved skiftende v\xE6r var sirkelen delt i to med en hvit og en svart halvdel.'
          ),
          _react2.default.createElement(
            'div',
            { className: 'c-figure__byline' },
            _react2.default.createElement(
              'div',
              { className: 'c-figure__byline-licenselist' },
              _react2.default.createElement(
                _.ClickableLicenseByline,
                {
                  license: (0, _ndlaLicenses.getLicenseByAbbreviation)('by-nc-nd')
                },
                'Forfatter, dato'
              ),
              _react2.default.createElement(
                'button',
                { onClick: this.handleClick, className: 'c-button c-button--outline c-figure__captionbtn' },
                'Bruk bildet'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'c-figure__license', id: 'figmeta' },
          _react2.default.createElement(
            'div',
            { className: 'u-expanded' },
            _react2.default.createElement(
              'div',
              { className: 'c-licenseToggle__details' },
              _react2.default.createElement(_.ClickableLicenseByline, {
                license: (0, _ndlaLicenses.getLicenseByAbbreviation)('by-nc-nd')
              }),
              _react2.default.createElement(
                'ul',
                { className: 'c-figure__list' },
                _react2.default.createElement(
                  'li',
                  { className: 'o-list__item' },
                  '12. desember 2014'
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'o-list__item' },
                  'Opphavsperson: Ola Nordmann'
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'o-list__item' },
                  'Rettighetshaver: Kari Nordmann'
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'o-list__item' },
                  'Remikser:: '
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'c-licenseToggle__ctablock' },
              _react2.default.createElement(
                'button',
                { className: 'c-button c-button--small c-button--transparent c-licenseToggle__button', type: 'button' },
                _react2.default.createElement(_Icon2.default.Copy, null),
                ' Kopier referanse'
              ),
              _react2.default.createElement(
                'button',
                { className: 'c-button c-licenseToggle__button', type: 'button' },
                _react2.default.createElement(_Icon2.default.OpenWindow, null),
                ' Last ned bilde'
              )
            )
          )
        )
      );
    }
  }]);

  return LicenseToggle;
}(_react.Component);

LicenseToggle.propTypes = {
  children: _react.PropTypes.node
};

exports.default = LicenseToggle;