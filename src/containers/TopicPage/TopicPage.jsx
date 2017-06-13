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
import { compose } from 'redux';
import { Hero, OneColumn, TopicBreadcrumb, LayoutItem, Article } from 'ndla-ui';
// import Helmet from 'react-helmet';

import * as actions from './topicActions';
import * as subjectActions from '../SubjectPage/subjectActions';
import { getTopicArticle, getTopic, getTopicPath } from './topicSelectors';
import { getSubjectById } from '../SubjectPage/subjectSelectors';
import TopicResources from './TopicResources';
import SubTopics from './SubTopics';
import { SubjectShape, ArticleShape, TopicShape } from '../../shapes';
import { injectT } from '../../i18n';
import { toTopic } from '../../routes';

const TopicArticle = ({ article }) =>
  <div>
    <h1>{article.title}</h1>
    <Article.Introduction introduction={article.introduction} />
    {/* <ArticleByline article={article} />*/}
    <Article.Content content={article.content} />
    {article.footNotes
      ? <Article.FootNotes footNotes={article.footNotes} />
      : null}
  </div>;

TopicArticle.propTypes = {
  article: ArticleShape.isRequired,
};

class TopicPage extends Component {
  componentWillMount() {
    const { match: { params }, fetchTopics, fetchSubjects } = this.props;
    const { subjectId, topicId } = params;
    fetchTopics({ subjectId, topicId });
    fetchSubjects();
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params }, fetchTopics } = this.props;
    const { subjectId, topicId } = params;

    if (nextProps.match.params.topicId !== topicId) {
      fetchTopics({ subjectId, topicId: nextProps.match.params.topicId });
    }
  }

  render() {
    const {
      match: { params },
      topic,
      article,
      t,
      topicPath,
      subject,
    } = this.props;
    const { subjectId } = params;
    if (!topic) {
      return null;
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Hero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                {subject
                  ? <TopicBreadcrumb
                      toSubjects={() => '/'}
                      subjectsTitle={t('breadcrumb.subjectsLinkText')}
                      subject={subject}
                      topicPath={topicPath}
                      currentTopic={topic}
                      toTopic={toTopic}>
                      {/* {t('breadcrumb.label')}*/}
                    </TopicBreadcrumb>
                  : null}
              </section>
            </div>
          </OneColumn>
        </Hero>
        <OneColumn>
          <article className="c-article">
            <LayoutItem layout="center">
              {article
                ? <TopicArticle
                  article={article}
                />
                : null}
            </LayoutItem>
            <LayoutItem layout="extend">
              <SubTopics
                subjectId={subjectId}
                topic={topic}
                topicPath={topicPath}
              />
              <TopicResources
                showResources
                subjectId={subjectId}
                topic={topic}
                topicPath={topicPath}
              />
            </LayoutItem>
          </article>
        </OneColumn>
      </div>
    );
  }
}

TopicPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      subjectId: PropTypes.string.isRequired,
      topicId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  fetchSubjects: PropTypes.func.isRequired,
  fetchTopics: PropTypes.func.isRequired,
  topic: TopicShape,
  subject: SubjectShape,
  topicPath: PropTypes.arrayOf(TopicShape),
  article: ArticleShape,
};

const mapDispatchToProps = {
  fetchSubjects: subjectActions.fetchSubjects,
  fetchTopics: actions.fetchTopics,
};

const mapStateToProps = (state, ownProps) => {
  const { subjectId, topicId } = ownProps.match.params;
  const getTopicSelector = getTopic(subjectId, topicId);
  const getTopicArticleSelector = getTopicArticle(subjectId, topicId);
  const getTopicPathSelector = getTopicPath(subjectId, topicId);
  const getSubjectByIdSelector = getSubjectById(subjectId);
  return {
    topic: getTopicSelector(state),
    article: getTopicArticleSelector(state),
    topicPath: getTopicPathSelector(state),
    subject: getSubjectByIdSelector(state),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), injectT)(
  TopicPage,
);
