/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Hero, OneColumn, TopicBreadcrumb, LayoutItem } from 'ndla-ui';
import * as actions from './articleActions';
import * as topicActions from '../TopicPage/topicActions';
import { getTopicPath } from '../TopicPage/topicSelectors';
import { getSubjectById } from '../SubjectPage/subjectSelectors';
import * as subjectActions from '../SubjectPage/subjectActions';
import { getArticle } from './articleSelectors';
import { getLocale } from '../Locale/localeSelectors';
import { ArticleShape, SubjectShape, TopicShape } from '../../shapes';
import { toTopic } from '../../routes';
import TopicResources from '../TopicPage/TopicResources';
import Article from './components/Article';
import config from '../../config';

const assets = __CLIENT__ // eslint-disable-line no-nested-ternary
  ? window.assets
  : config.isProduction
      ? require('../../../htdocs/assets/assets') // eslint-disable-line import/no-unresolved
      : require('../../../server/developmentAssets');

class ArticlePage extends Component {
  componentWillMount() {
    const {
      fetchArticle,
      fetchTopics,
      fetchSubjects,
      match: { params },
    } = this.props;
    const { articleId, subjectId } = params;
    fetchArticle(articleId);
    if (subjectId) {
      fetchSubjects();
      fetchTopics({ subjectId });
    }
  }

  componentDidMount() {
    if (window.MathJax) {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    }
  }

  componentDidUpdate() {
    if (window.MathJax) {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    }
  }

  render() {
    const { article, subject, topicPath, locale } = this.props;
    if (!article) {
      return null;
    }
    const scripts = article.requiredLibraries
      ? article.requiredLibraries.map(lib => ({
        src: lib.url,
        type: lib.mediaType,
      }))
      : [];
    if (article.content.indexOf('<math') > -1) {
      scripts.push({
        async: true,
        src: `https://cdn.mathjax.org/mathjax/2.7-latest/MathJax.js?config=/assets/${assets['mathjaxConfig.js']}`,
        type: 'text/javascript',
      });
    }

    const metaDescription = article.metaDescription
      ? { name: 'description', content: article.metaDescription }
      : {};

    return (
      <div>
        <Hero red>
          <OneColumn cssModifier="narrow">
            <div className="c-hero__content">
              { subject ? <TopicBreadcrumb toSubjects={() => '/'} subjectsTitle="Fag" subject={subject} topicPath={topicPath} toTopic={toTopic} /> : null }
            </div>
          </OneColumn>
        </Hero>
        <Helmet
          title={`NDLA | ${article.title}`}
          meta={[metaDescription]}
          script={scripts}
        />
        <OneColumn cssModifier="narrow">
          <Article article={article} subject={subject} topicPath={topicPath} locale={locale} />
        </OneColumn>
      </div>
    );
  }
}

ArticlePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      articleId: PropTypes.string.isRequired,
      subjectId: PropTypes.string,
      topicId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  article: ArticleShape,
  locale: PropTypes.string.isRequired,
  fetchArticle: PropTypes.func.isRequired,
  fetchSubjects: PropTypes.func.isRequired,
  fetchTopics: PropTypes.func.isRequired,
  subject: SubjectShape,
  topicPath: PropTypes.arrayOf(TopicShape),
};

const mapDispatchToProps = {
  fetchArticle: actions.fetchArticle,
  fetchSubjects: subjectActions.fetchSubjects,
  fetchTopics: topicActions.fetchTopicArticle,
};

const makeMapStateToProps = (_, ownProps) => {
  const { articleId, subjectId, topicId } = ownProps.match.params;
  const getArticleSelector = getArticle(articleId);
  const getTopicPathSelector = subjectId && topicId
    ? getTopicPath(subjectId, topicId)
    : () => undefined;
  const getSubjectByIdSelector = subjectId
    ? getSubjectById(subjectId)
    : () => undefined;
  return state => ({
    article: getArticleSelector(state),
    topicPath: getTopicPathSelector(state),
    subject: getSubjectByIdSelector(state),
    locale: getLocale(state),
  });
};

export default connect(makeMapStateToProps, mapDispatchToProps)(ArticlePage);
