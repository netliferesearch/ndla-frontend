'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var toggleAside = function toggleAside(event) {
  var button = event.target;
  var aside = button.previousSibling.parentNode;
  aside.classList.toggle('expanded');
};

var Aside = function Aside(_ref) {
  var rest = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    'aside',
    { className: 'c-aside' },
    _react2.default.createElement(
      'div',
      { className: 'c-aside__content' },
      rest.children
    ),
    _react2.default.createElement(_Button2.default, { className: 'c-aside__button', onClick: toggleAside })
  );
};

exports.default = Aside;