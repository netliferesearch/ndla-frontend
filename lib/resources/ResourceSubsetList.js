'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBemHelper = require('react-bem-helper');

var _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

var _ndlaUtil = require('ndla-util');

var _ResourceList = require('./ResourceList');

var _ResourceList2 = _interopRequireDefault(_ResourceList);

var _SafeLink = require('../common/SafeLink');

var _SafeLink2 = _interopRequireDefault(_SafeLink);

var _shapes = require('../shapes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var classes = new _reactBemHelper2.default({
  name: 'topic-resource-subset',
  prefix: 'c-'
});

var ResourceSubsetList = function (_Component) {
  _inherits(ResourceSubsetList, _Component);

  function ResourceSubsetList(props) {
    _classCallCheck(this, ResourceSubsetList);

    var _this = _possibleConstructorReturn(this, (ResourceSubsetList.__proto__ || Object.getPrototypeOf(ResourceSubsetList)).call(this, props));

    _this.state = { focusTitle: '' };
    return _this;
  }

  _createClass(ResourceSubsetList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          resourceGroups = _props.resourceGroups,
          toResourceTab = _props.toResourceTab,
          resourceToLinkProps = _props.resourceToLinkProps;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          classes(''),
          resourceGroups.map(function (group, i) {
            return _react2.default.createElement(
              'div',
              _extends({ id: group.title, key: (0, _ndlaUtil.uuid)() }, classes('', [group.color, _this2.state.focusTitle === group.title ? 'focus' : ''])),
              _react2.default.createElement(
                'h1',
                classes('heading'),
                group.title
              ),
              _react2.default.createElement(
                'p',
                classes('lead'),
                group.description
              ),
              group.tags ? group.tags.map(function (tags) {
                return _react2.default.createElement(
                  _SafeLink2.default,
                  _extends({ key: (0, _ndlaUtil.uuid)() }, classes('tag'), { to: toResourceTab(i) }),
                  tags
                );
              }) : null,
              _react2.default.createElement(_ResourceList2.default, { resourceToLinkProps: resourceToLinkProps, resources: group.resources }),
              _react2.default.createElement(
                _SafeLink2.default,
                _extends({}, classes('readmore'), { to: toResourceTab(i) }),
                group.viewAllLinkTitle
              )
            );
          })
        )
      );
    }
  }]);

  return ResourceSubsetList;
}(_react.Component);

ResourceSubsetList.propTypes = {
  resourceToLinkProps: _propTypes2.default.func.isRequired,
  toResourceTab: _propTypes2.default.func.isRequired,
  resourceGroups: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    description: _propTypes2.default.string.isRequired,
    viewAllLinkTitle: _propTypes2.default.string.isRequired,
    resources: _propTypes2.default.arrayOf(_shapes.ResourceShape).isRequired
  }))
};

exports.default = ResourceSubsetList;