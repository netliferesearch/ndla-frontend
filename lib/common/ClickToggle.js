'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _Button = require('../button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ClickToggle = function (_React$Component) {
  _inherits(ClickToggle, _React$Component);

  function ClickToggle(props) {
    _classCallCheck(this, ClickToggle);

    var _this = _possibleConstructorReturn(this, (ClickToggle.__proto__ || Object.getPrototypeOf(ClickToggle)).call(this, props));

    _this.state = {
      isOpen: false
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.close = _this.close.bind(_this);
    return _this;
  }

  _createClass(ClickToggle, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          buttonClassName = _props.buttonClassName,
          Component = _props.containerClass,
          rest = _objectWithoutProperties(_props, ['title', 'buttonClassName', 'containerClass']);

      var isOpen = this.state.isOpen;


      var children = _react2.default.cloneElement(this.props.children, { close: this.close });
      return _react2.default.createElement(
        Component,
        rest,
        isOpen ? _react2.default.createElement(_Button2.default, { className: 'o-overlay', onClick: function onClick() {
            return _this2.setState({ isOpen: false });
          } }) : null,
        _react2.default.createElement(
          _Button2.default,
          { className: isOpen ? buttonClassName + ' c-topic-menu-toggle-button--active' : '' + buttonClassName, onClick: this.handleClick },
          title
        ),
        isOpen ? children : null
      );
    }
  }]);

  return ClickToggle;
}(_react2.default.Component);

exports.default = ClickToggle;


ClickToggle.propTypes = {
  containerClass: _elementType2.default,
  title: _react.PropTypes.node.isRequired,
  buttonClassName: _react.PropTypes.string,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node
};

ClickToggle.defaultProps = {
  containerClass: 'div'
};