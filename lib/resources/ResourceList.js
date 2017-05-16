'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBemHelper = require('react-bem-helper');

var _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

var _SafeLink = require('../common/SafeLink');

var _SafeLink2 = _interopRequireDefault(_SafeLink);

var _shapes = require('../shapes');

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                              * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              */

var classes = new _reactBemHelper2.default({
  name: 'topic-resource',
  prefix: 'c-'
});

var Resource = function Resource(_ref) {
  var resource = _ref.resource,
      resourceToLinkProps = _ref.resourceToLinkProps;

  var linkProps = resourceToLinkProps(resource);

  return _react2.default.createElement(
    'li',
    classes('item o-flag o-flag--top'),
    _react2.default.createElement(
      'div',
      classes('icon o-flag__img'),
      resource.icon === 'Lærestoff' ? _react2.default.createElement(_.Icon.Document, null) : null,
      resource.icon === 'Læringsstier' ? _react2.default.createElement(_.Icon.Path, null) : null,
      resource.icon === 'Oppgaver og aktiviteter' ? _react2.default.createElement(_.Icon.Pencil, null) : null
    ),
    _react2.default.createElement(
      'div',
      classes('body o-flag__body'),
      _react2.default.createElement(
        'h1',
        classes('title'),
        linkProps.href ? _react2.default.createElement(
          'a',
          linkProps,
          resource.name
        ) : _react2.default.createElement(
          _SafeLink2.default,
          resourceToLinkProps(resource),
          resource.name
        )
      )
    )
  );
};

Resource.propTypes = {
  resource: _shapes.ResourceShape.isRequired,
  resourceToLinkProps: _propTypes2.default.func.isRequired
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
  resources: _propTypes2.default.arrayOf(_shapes.ResourceShape).isRequired,
  resourceToLinkProps: _propTypes2.default.func.isRequired
};

exports.default = ResourceList;