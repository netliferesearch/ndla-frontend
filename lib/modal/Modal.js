

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _reactModal = require('react-modal');

const _reactModal2 = _interopRequireDefault(_reactModal);

const _Icon = require('../icons/Icon');

const _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError(`Super expression must either be null or a function, not ${typeof superClass}`); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FRI OG BEGRENSET
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import * as basicLightbox from 'basiclightbox';

const Modal = (function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    const _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

    _this.state = {
      showModal: false,
    };

    _this.handleOpenModal = _this.handleOpenModal.bind(_this);
    _this.handleCloseModal = _this.handleCloseModal.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'handleOpenModal',
    value: function handleOpenModal() {
      this.setState({ showModal: true });
    },
  }, {
    key: 'handleCloseModal',
    value: function handleCloseModal() {
      this.setState({ showModal: false });
    },
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: this.handleOpenModal, 'data-show-id': '1', className: 'c-button--transparent u-float-right u-z-top' },
          _react2.default.createElement(_Icon2.default.OpenWindow, null),
          ' Bruk bildet',
        ),
        _react2.default.createElement(
          _reactModal2.default,
          {
            isOpen: this.state.showModal,
            closeTimeoutMS: '300',
            onRequestClose: this.handleCloseModal,
            className: 'c-modal__wrapper',
            portalClassName: 'c-modal__overlay',
          },
          _react2.default.createElement(
            'button',
            { className: 'c-button c-button--transparent', onClick: this.handleCloseModal },
            'Lukk',
          ),
          _react2.default.createElement(
            'div',
            { className: 'c-modal' },
            this.props.children,
          ),
        ),
      );
    },
  }]);

  return Modal;
}(_react.Component));

Modal.propTypes = {
  children: _react.PropTypes.node,
};

exports.default = Modal;
