'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLicenseRightByAbbreviation = exports.getLicenseByAbbreviation = exports.COPY = exports.CC = exports.CC0 = exports.PD = exports.ND = exports.NC = exports.SA = exports.BY = undefined;

var _licenses = require('./licenses');

var _licenseRights = require('./licenseRights');

/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

exports.BY = _licenseRights.BY;
exports.SA = _licenseRights.SA;
exports.NC = _licenseRights.NC;
exports.ND = _licenseRights.ND;
exports.PD = _licenseRights.PD;
exports.CC0 = _licenseRights.CC0;
exports.CC = _licenseRights.CC;
exports.COPY = _licenseRights.COPY;
exports.getLicenseByAbbreviation = _licenses.getLicenseByAbbreviation;
exports.getLicenseRightByAbbreviation = _licenseRights.getLicenseRightByAbbreviation;
exports.default = _licenses.getLicenseByAbbreviation;