/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import WelcomePage from './containers/WelcomePage/WelcomePage';
import App from './containers/App/App';
import ArticlePage from './containers/ArticlePage/ArticlePage';
import SearchPage from './containers/SearchPage/SearchPage';
import SubjectsPage from './containers/SubjectsPage/SubjectsPage';
import SubjectPage from './containers/SubjectPage/SubjectPage';
import TopicPage from './containers/TopicPage/TopicPage';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
import config from './config';

const searchEnabled = __SERVER__ || process.env.NODE_ENV === 'unittest'
  ? config.searchEnabled
  : window.config.searchEnabled;

class ScrollToTop extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

export default (
  <App>
    <ScrollToTop />
    <Switch>
      <Route
        path="/"
        exact
        render={() => <WelcomePage searchEnabled={searchEnabled} />}
      />

      <Route
        path="/article/:subjectId/:topicId/:articleId"
        component={ArticlePage}
      />
      <Route path="/article/:articleId" component={ArticlePage} />

      {searchEnabled ? <Route path="/search" component={SearchPage} /> : null}

      <Route path="/subjects/:subjectId/(.*)/:topicId" component={TopicPage} />
      <Route path="/subjects/:subjectId/:topicId" component={TopicPage} />
      <Route path="/subjects/:subjectId/" component={SubjectPage} />
      <Route path="/subjects" component={SubjectsPage} />

      <Route component={NotFoundPage} />
    </Switch>
  </App>
);
