'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COPY = exports.CC = exports.CC0 = exports.PD = exports.ND = exports.NC = exports.SA = exports.BY = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   */

/* eslint max-len: 0 */

exports.getLicenseRightByAbbreviation = getLicenseRightByAbbreviation;

var _defined = require('defined');

var _defined2 = _interopRequireDefault(_defined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// License rights
var BY = exports.BY = 'by'; // Attribution
var SA = exports.SA = 'sa'; // Share-alike
var NC = exports.NC = 'nc'; // Non-commercial
var ND = exports.ND = 'nd'; // No derivative work
var PD = exports.PD = 'pd'; // Public Domain
var CC0 = exports.CC0 = 'cc0'; // Public Domain Dedication
var CC = exports.CC = 'cc'; // Creative Commons
var COPY = exports.COPY = 'copy'; // Copyright


var by = {
  short: BY,
  nb: {
    title: 'Navngivelse',
    userFriendlyTitle: 'Navngivelse',
    description: 'Du må oppgi hvem som har laget bildet.'
  },
  en: {
    title: 'Attribution',
    userFriendlyTitle: 'Refer to name',
    description: 'The work&CloseCurlyQuote;s creator have to be named'
  }
};

var sa = {
  short: SA,
  nb: {
    title: 'Share Alike',
    userFriendlyTitle: 'Del på samme vilkår',
    description: 'Dersom du remixer, bearbeider eller bygger på materialet, må du dele dine bidrag under samme lisens som originalen.'
  },
  en: {
    short: 'SA',
    title: 'Del likt',
    userFriendlyTitle: 'Share with same license',
    description: 'You should share only under a license identical ("not more restrictive") to the license that governs the original work.'
  }
};

var nc = {
  short: NC,
  nb: {
    title: 'Ikke-kommersiell',
    userFriendlyTitle: 'Ikke-kommersiell',
    description: 'Du kan ikke bruke bildet i noe som skal selges.'
  },
  en: {
    title: 'Non Commercial',
    userFriendlyTitle: 'Non Commercial',
    description: 'The work can not be used commercially.'
  }
};

var nd = {
  short: ND,
  nb: {
    title: 'Ingen bearbeiding',
    userFriendlyTitle: 'Ingen bearbeiding',
    description: 'Verket kan bare brukes i uendret tilstand.'
  },
  en: {
    title: 'NO DERIVES',
    userFriendlyTitle: 'NO DERIVES',
    description: 'The work can only be used as is.'
  }
};

var pd = {
  short: PD,
  nb: {
    title: 'Offentlig eiendom',
    userFriendlyTitle: 'Offentlig eiendom',
    description: 'Verket er identifisert som fritt for kjente opphavsrettsbegrensninger.'
  },
  en: {
    title: 'Public Domain',
    userFriendlyTitle: 'Public Domain',
    description: 'The work is free of all known.'
  }
};

var cc0 = {
  short: CC0,
  nb: {
    title: 'Gitt det offentlige',
    userFriendlyTitle: 'Gitt det offentlige',
    description: 'Verket er gitt til fellesskapet og Opphavspersonen frasier seg alle rettigheter, også navngivelse.'
  },
  en: {
    title: 'Public Domain Dedication',
    userFriendlyTitle: 'Public Domain Dedication',
    description: 'The work is given the public and the Creator has given up all rights, also attribution.'
  }
};

var copy = {
  short: COPY,
  nb: {
    title: 'Opphavsrett',
    userFriendlyTitle: 'Opphavsrett',
    description: 'Bare opphavspersonen kan bearbeide, publisere og gi bruksrett. Verket kan ikke deles.'
  },
  en: {
    title: 'Copyright',
    userFriendlyTitle: 'Copyright',
    description: 'Only the creator can derive, publish, or license the work. It can not be shared without permission.'
  }
};

var cc = {
  short: CC,
  nb: {
    title: 'Creative Commons',
    userFriendlyTitle: 'Opphavsrett',
    description: 'Du kan bruke dette bildet og dele det'
  },
  en: {
    title: 'Creative Commons',
    userFriendlyTitle: 'Creative Commons',
    description: 'Rights for reuse and sharing of content.'
  }
};

function licenseRightByLocale(license, locale) {
  var texts = (0, _defined2.default)(license[locale], license.nb);
  return _extends({
    short: license.short
  }, texts);
}

function getLicenseRightByAbbreviation(abbreviation, locale) {
  switch (abbreviation) {
    case BY:
      return licenseRightByLocale(by, locale);
    case SA:
      return licenseRightByLocale(sa, locale);
    case NC:
      return licenseRightByLocale(nc, locale);
    case ND:
      return licenseRightByLocale(nd, locale);
    case PD:
      return licenseRightByLocale(pd, locale);
    case CC:
      return licenseRightByLocale(cc, locale);
    case CC0:
      return licenseRightByLocale(cc0, locale);
    case COPY:
      return licenseRightByLocale(copy, locale);
    default:
      return {
        short: abbreviation,
        title: abbreviation,
        userFriendlyTitle: abbreviation,
        description: abbreviation };
  }
}