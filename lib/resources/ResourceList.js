

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _reactBemHelper = require('react-bem-helper');

const _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

const _SafeLink = require('../common/SafeLink');

const _SafeLink2 = _interopRequireDefault(_SafeLink);

const _shapes = require('../shapes');

const _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { const target = {}; for (const i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                              * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              */

const classes = new _reactBemHelper2.default({
  name: 'topic-resource',
  prefix: 'c-',
});

const Resource = function Resource(_ref) {
  let resource = _ref.resource,
    resourceToLinkProps = _ref.resourceToLinkProps;
  return _react2.default.createElement(
    'li',
    classes('item o-flag o-flag--top'),
    _react2.default.createElement(
      'div',
      classes('icon o-flag__img'),
      resource.icon === 'Fagstoff' && _react2.default.createElement(_.Icon.Document, null),
      resource.icon === 'Læringsstier' && _react2.default.createElement(_.Icon.Path, null),
      resource.icon === 'Oppgaver og aktiviteter' && _react2.default.createElement(_.Icon.Pencil, null),
      resource.icon === 'Interaktivitet' && _react2.default.createElement(_.Icon.Pencil, null),
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
          resource.name,
        ),
      ),
    ),
  );
};

Resource.propTypes = {
  resource: _shapes.ResourceShape.isRequired,
  resourceToLinkProps: _react.PropTypes.func.isRequired,
};

const ResourceList = function ResourceList(_ref2) {
  let resources = _ref2.resources,
    rest = _objectWithoutProperties(_ref2, ['resources']);

  return _react2.default.createElement(
    'ul',
    classes('list'),
    resources.map(resource => _react2.default.createElement(Resource, _extends({ key: resource.id }, rest, { resource }))),
  );
};

ResourceList.propTypes = {
  resources: _react.PropTypes.arrayOf(_shapes.ResourceShape).isRequired,
  resourceToLinkProps: _react.PropTypes.func.isRequired,
};

exports.default = ResourceList;
