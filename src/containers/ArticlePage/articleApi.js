/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  resolveJsonOrRejectWithError,
  apiResourceUrl,
  fetchWithAccessToken,
} from '../../util/apiHelpers';

const converterBaseUrl =
  process.env.ARTICLE_CONVERTER_URL ||
  'https://ndla-article-converter.herokuapp.com/article-converter/raw';

const baseUrl = apiResourceUrl('/article-api/v1/articles');

export const fetchArticle = (id, locale) =>
  fetchWithAccessToken(`${converterBaseUrl}/${locale}/${id}`).then(
    resolveJsonOrRejectWithError,
  );

export const fetchArticles = ids =>
  fetchWithAccessToken(`${baseUrl}?ids=${ids.join(',')}`).then(
    resolveJsonOrRejectWithError,
  );
