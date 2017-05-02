/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const environment = {
  development: {
    isProduction: false,
  },
  production: {
    isProduction: true,
  },
}[process.env.NODE_ENV || 'development'];


const domain = () => {
  if (!process.env.NDLA_ENVIRONMENT) {
    return 'http://ndla-frontend.herokuapp.com/'; // Defaults to test if undefined
  }

  switch (process.env.NDLA_ENVIRONMENT) {
    case 'local':
      return 'http://proxy.ndla-local';
    case 'prod':
      return 'https://api.ndla.no';
    default:
      return 'http://ndla-frontend.herokuapp.com/';
  }
};

const ndlaFrontendDomain = 'http://ndla-frontend.herokuapp.com/';

module.exports = Object.assign({
  host: process.env.ARTICLE_CONVERTER_HOST || 'localhost',
  port: process.env.ARTICLE_CONVERTER_PORT || '3100',
  ndlaFrontendUrl: process.env.NDLA_FRONTEND_URL || ndlaFrontendDomain(),
  ndlaApiUrl: process.env.NDLA_API_URL || domain(),
  ndlaApiKey: process.env.NDLA_API_KEY || 'ndlalearningpathfrontend',

  app: {
    title: 'NDLA Content frontend',
  },

}, environment);
