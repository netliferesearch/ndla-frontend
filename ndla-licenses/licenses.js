'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   * Copyright (c) 2016-present, NDLA.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the GPLv3 license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   */

/* eslint max-len: 0 */

exports.getLicenseByAbbreviation = getLicenseByAbbreviation;

var _defined = require('defined');

var _defined2 = _interopRequireDefault(_defined);

var _licenseRights = require('./licenseRights');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var freeUseNB = 'Fri gjenbruk';
var freeUseEN = 'Free reuse';
var restrictedUseNB = 'Begrenset bruk';
var restrictedUseEN = 'Restricted use';

var byncnd = {
  nb: {
    short: restrictedUseNB,
    title: 'Navngivelse-IkkeKommersiell-IngenBearbeidelser',
    userFriendlyTitle: '',
    description: 'Denne lisensen er den mest restriktive av våre seks kjernelisenser. Den tillater andre å laste ned ditt verk og dele dem med andre så lenge du er navngitt som opphavspersonen, men de kan ikke endre dem på noen måte, eller bruke dem kommersielt.'
  },

  en: {
    short: restrictedUseEN,
    title: 'Attribution-NonCommercial-NoDerivs',
    userFriendlyTitle: '',
    description: 'This license is the most restrictive of our six main licenses, only allowing others to download your works and share them with others as long as they credit you, but they can’t change them in any way or use them commercially.'
  },
  rights: [_licenseRights.BY, _licenseRights.NC, _licenseRights.ND]
};

var byncsa = {
  nb: {
    short: restrictedUseNB,
    title: 'Navngivelse-IkkeKommersiell-DelPåSammeVilkår',
    userFriendlyTitle: '',
    description: 'Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk for ikke-kommersielle formål. Deres verk må navngi deg som den opprinnelige opphavspersonen og avledete verk må bære en tilsvarende lisens.'
  },

  en: {
    short: restrictedUseEN,
    title: 'Attribution-NonCommercial-ShareAlike',
    userFriendlyTitle: '',
    description: 'This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms.'
  },
  rights: [_licenseRights.BY, _licenseRights.NC, _licenseRights.SA]
};

var bync = {
  nb: {
    short: freeUseNB,
    title: 'Navngivelse-IkkeKommersiell',
    userFriendlyTitle: '',
    description: 'Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk for ikke-kommersielle formål. Deres verk må navngi deg som opphavsperson og også være ikke-kommersielle, men de behøver ikke kreve at verk avledet fra deres bærer de samme vilkårene.'
  },

  en: {
    short: freeUseEN,
    title: 'Attribution-NonCommercial',
    userFriendlyTitle: '',
    description: 'This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms.'
  },
  rights: [_licenseRights.BY, _licenseRights.NC]
};

var bynd = {
  nb: {
    short: freeUseNB,
    title: 'Navngivelse-IngenBearbeidelse',
    userFriendlyTitle: '',
    description: 'Denne lisensen gir mulighet for å videredistribuere verket, både for kommersielle og for ikke-kommersielle formål, så lenge det gis videre uendret og sin helhet, og at du navngis som den som har skapt verket.'
  },

  en: {
    short: freeUseEN,
    title: 'Attribution-NoDerivs',
    userFriendlyTitle: '',
    description: 'This license allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to you.'
  },
  rights: [_licenseRights.BY, _licenseRights.ND]
};

var bysa = {
  nb: {
    short: freeUseNB,
    title: 'Navngivelse-DelPåSammeVilkår',
    userFriendlyTitle: '',
    description: 'Fri gjenbruk ved navngivelse. Navngivelse vil si at du oppgir navnet til opphavspersonen(e). Hvis du deler, må andre også få lov til å dele videre på samme vilkår. Dette sikrer videre gjenbruk og bidrar til delingskultur.'
  },

  en: {
    short: freeUseEN,
    title: 'Attribution ShareAlike',
    userFriendlyTitle: '',
    description: 'This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms. This license is often compared to “copyleft” free and open source software licenses. All new works based on yours will carry the same license, so any derivatives will also allow commercial use. This is the license used by Wikipedia, and is recommended for materials that would benefit from incorporating content from Wikipedia and similarly licensed projects.'
  },
  rights: [_licenseRights.BY, _licenseRights.SA]
};

var by = {
  nb: {
    short: freeUseNB,
    title: 'Navngivelse',
    userFriendlyTitle: '',
    description: 'Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, så lenge de navngir deg som den opprinnelige opphavspersonen. Dette er den mest fleksible og åpne av de lisendene vi tilbyr. Den anbefales dersom du ønsker maksimal spredning og bruk av materiale under en CC lisens.'
  },

  en: {
    short: freeUseEN,
    title: 'Attribution',
    userFriendlyTitle: '',
    description: 'This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials.'
  },
  rights: [_licenseRights.BY]
};

function licenseByLocale(license, locale) {
  var texts = (0, _defined2.default)(license[locale], license.nb);
  return _extends({}, texts, {
    rights: license.rights
  });
}

function getLicenseByAbbreviation(abbreviation, locale) {
  switch (abbreviation) {
    case 'by-nc-nd':
      return licenseByLocale(byncnd, locale);
    case 'by-nc-sa':
      return licenseByLocale(byncsa, locale);
    case 'by-nc':
      return licenseByLocale(bync, locale);
    case 'by-nd':
      return licenseByLocale(bynd, locale);
    case 'by-sa':
      return licenseByLocale(bysa, locale);
    case 'by':
      return licenseByLocale(by, locale);
    default:
      return {
        short: abbreviation,
        title: abbreviation,
        userFriendlyTitle: abbreviation,
        rights: [],
        description: abbreviation };
  }
}