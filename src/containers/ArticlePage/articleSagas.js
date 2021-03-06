/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { take, call, put, select } from 'redux-saga/effects';
import { getLocale } from '../Locale/localeSelectors';
import { getArticle } from './articleSelectors';
import * as constants from './articleConstants';
import * as actions from './articleActions';
import * as api from './articleApi';

export function* fetchArticle(id) {
  try {
    const locale = yield select(getLocale);
    const article = yield call(api.fetchArticle, id, locale);
    yield put(actions.setArticle(article));
  } catch (error) {
    // TODO: better error handling
    if (error.json && error.json.status === 404) {
      // tmp hack
      yield put(
        actions.setArticle({
          id,
          status: 404,
          content: '',
        }),
      );
    }
    console.error(error); //eslint-disable-line
  }
}

export function* watchFetchArticle() {
  while (true) {
    const { payload: id } = yield take(constants.FETCH_ARTICLE);
    const currentArticle = yield select(getArticle(id));
    if (!currentArticle || currentArticle.id !== id) {
      yield call(fetchArticle, id);
    }
  }
}

export default [watchFetchArticle];
