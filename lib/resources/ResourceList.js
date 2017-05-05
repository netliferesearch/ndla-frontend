'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBemHelper = require('react-bem-helper');

var _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

var _SafeLink = require('../common/SafeLink');

var _SafeLink2 = _interopRequireDefault(_SafeLink);

var _shapes = require('../shapes');

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var classes = new _reactBemHelper2.default({
  name: 'topic-resource',
  prefix: 'c-'
});

var Resource = function Resource(_ref) {
  var resource = _ref.resource,
      resourceToLinkProps = _ref.resourceToLinkProps;
  return _react2.default.createElement(
    'li',
    classes('item o-flag o-flag--top'),
    _react2.default.createElement(
      'div',
      classes('icon o-flag__img'),
      resource.icon === 'Document' ? _react2.default.createElement(_.Icon.Document, null) : null,
      resource.icon === 'Path' ? _react2.default.createElement(_.Icon.Path, null) : null,
      resource.icon === 'Pencil' ? _react2.default.createElement(_.Icon.Pencil, null) : null
    ),
    _react2.default.createElement(
      'div',
      classes('body o-flag__body'),
      _react2.default.createElement(
        'h1',
        classes('title'),
        _react2.default.createElement(
          _SafeLink2.default,
          resourceToLinkProps(resource),
          resource.name
        )
      ),
      resource.tag ? _react2.default.createElement(
        _SafeLink2.default,
        _extends({}, classes('tag'), resourceToLinkProps(resource)),
        resource.tag
      ) : null
    )
  );
};

Resource.propTypes = {
  resource: _shapes.ResourceShape.isRequired,
  resourceToLinkProps: _react.PropTypes.func.isRequired
};

var ResourceList = function ResourceList(_ref2) {
  var resources = _ref2.resources,
      rest = _objectWithoutProperties(_ref2, ['resources']);

  return _react2.default.createElement(
    'ul',
    classes('list'),
    resources.map(function (resource) {
      return _react2.default.createElement(Resource, _extends({ key: resource.id }, rest, { resource: resource }));
    })
  );
};

ResourceList.propTypes = {
  resources: _react.PropTypes.arrayOf(_shapes.ResourceShape).isRequired,
  resourceToLinkProps: _react.PropTypes.func.isRequired
};

exports.default = ResourceList;