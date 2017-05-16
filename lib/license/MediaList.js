

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.MediaListItemMeta = exports.MediaListItemActions = exports.MediaListItemBody = exports.MediaListItemImage = exports.MediaListItem = exports.MediaList = undefined;

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _propTypes = require('prop-types');

const _propTypes2 = _interopRequireDefault(_propTypes);

const _ndlaLicenses = require('ndla-licenses');

// const _ndlaLicenses = require('../../ndla-licenses');

const _ndlaLicenses2 = _interopRequireDefault(_ndlaLicenses);

const _reactBemHelper = require('react-bem-helper');

const _reactBemHelper2 = _interopRequireDefault(_reactBemHelper);

const _ndlaUtil = require('ndla-util');

const _ClickableLicenseByline = require('./ClickableLicenseByline');

const _ClickableLicenseByline2 = _interopRequireDefault(_ClickableLicenseByline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const oClasses = new _reactBemHelper2.default({
  name: 'media',
  prefix: 'o-',
});

const cClasses = new _reactBemHelper2.default({
  name: 'medialist',
  prefix: 'c-',
});

const MediaList = exports.MediaList = function MediaList(_ref) {
  const children = _ref.children;
  return _react2.default.createElement(
    'ul',
    cClasses(),
    children,
  );
};

MediaList.propTypes = {
  children: _propTypes2.default.node.isRequired,
};

const MediaListItem = exports.MediaListItem = function MediaListItem(_ref2) {
  const children = _ref2.children;
  return _react2.default.createElement(
    'li',
    oClasses(null, null, cClasses('item').className),
    children,
  );
};

MediaListItem.propTypes = {
  children: _propTypes2.default.node.isRequired,
};

const MediaListItemImage = exports.MediaListItemImage = function MediaListItemImage(_ref3) {
  const children = _ref3.children;
  return _react2.default.createElement(
    'div',
    oClasses('img', null, cClasses('img').className),
    children,
  );
};

MediaListItemImage.propTypes = {
  children: _propTypes2.default.node.isRequired,
};

const MediaListItemBody = exports.MediaListItemBody = function MediaListItemBody(_ref4) {
  let children = _ref4.children,
    license = _ref4.license,
    title = _ref4.title,
    locale = _ref4.locale;
  return _react2.default.createElement(
    'div',
    oClasses('body', null, cClasses('body').className),
    title ? _react2.default.createElement(
      'h3',
      { className: 'c-medialist__title' },
      title,
      ' ',
    ) : null,
    _react2.default.createElement(_ClickableLicenseByline2.default, {
      license: (0, _ndlaLicenses2.default)(license, locale),
    }),
    children,
  );
};

MediaListItemBody.propTypes = {
  children: _propTypes2.default.node.isRequired,
  license: _propTypes2.default.string.isRequired,
  locale: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string,
};

const MediaListItemActions = exports.MediaListItemActions = function MediaListItemActions(_ref5) {
  const children = _ref5.children;
  return _react2.default.createElement(
    'div',
    cClasses('actions'),
    children,
  );
};

MediaListItemActions.propTypes = {
  children: _propTypes2.default.node.isRequired,
};

const MediaListItemMeta = exports.MediaListItemMeta = function MediaListItemMeta(_ref6) {
  const items = _ref6.items;
  return _react2.default.createElement(
    'ul',
    cClasses('actions'),
    items.map(item => _react2.default.createElement(
        'li',
        { key: (0, _ndlaUtil.uuid)(), className: 'c-medialist__meta-item' },
        item,
      )),
  );
};

MediaListItemMeta.propTypes = {
//   items: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired)
// };
  items: _react.PropTypes.arrayOf(_react.PropTypes.string.isRequired),
};
