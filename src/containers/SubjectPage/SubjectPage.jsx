/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { ResourceWrapper } from 'ndla-ui';
import { Link } from 'react-router-dom';
import defined from 'defined';
import { OneColumn, Hero, TopicIntroductionList, ResourceWrapper } from '../../../lib';
import { injectT } from '../../i18n';
import * as actions from './subjectActions';
import * as topicActions from '../TopicPage/topicActions';
import { getSubjectById } from './subjectSelectors';
import { getTopicsBySubjectIdWithIntroduction, getTopic } from '../TopicPage/topicSelectors';
import { SubjectShape, TopicShape } from '../../shapes';
import { toTopicPartial } from '../../routes';


const toTopic = subjectId => toTopicPartial(subjectId);

class SubjectPage extends Component {
  componentWillMount() {
    const { match: { params: { subjectId } }, fetchTopics, fetchSubjects } = this.props;
    fetchSubjects();
    fetchTopics({ subjectId });
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params: { subjectId } }, fetchTopics } = this.props;

    if (nextProps.match.params.subjectId !== subjectId) {
      fetchTopics({ subjectId: nextProps.match.params.subjectId });
    }
  }

  render() {
    const { subjectTopics, subject, t, topic } = this.props;
    if (!subject) {
      return null;
    }

    const topics = topic ? defined(topic.subtopics, []) : subjectTopics;
    return (
      <div>
        <Hero>
          <OneColumn cssModifier="narrow">
            <div className="c-hero__content">
              <section>
                <div className="c-breadcrumb">
                  <ol className="c-breadcrumb__list">
                    <li className="c-breadcrumb__item">
                      <Link to="/">{t('breadcrumb.subjectsLinkText')}</Link> &#x203A;
                    </li>
                  </ol>
                </div>
              </section>
            </div>
          </OneColumn>
        </Hero>
        <OneColumn cssModifier="narrow">
          <section className="c-article-content">
            <ResourceWrapper>
              <h1>{t('subjectPage.tabs.topics')}</h1>
              <TopicIntroductionList toTopic={toTopic(subject.id)} topics={topics} />
            </ResourceWrapper>
          </section>
        </OneColumn>
      </div>
    );
  }
}

SubjectPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      subjectId: PropTypes.string.isRequired,
      topicId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  fetchTopics: PropTypes.func.isRequired,
  fetchSubjects: PropTypes.func.isRequired,
  subjectTopics: PropTypes.arrayOf(TopicShape).isRequired,
  subject: SubjectShape,
  topic: TopicShape,
};

const mapDispatchToProps = {
  fetchSubjects: actions.fetchSubjects,
  fetchTopics: topicActions.fetchTopics,
};

const mapStateToProps = (state, ownProps) => {
  const { subjectId, topicId } = ownProps.match.params;
  return {
    topic: topicId ? getTopic(subjectId, topicId)(state) : undefined,
    subjectTopics: getTopicsBySubjectIdWithIntroduction(subjectId)(state),
    subject: getSubjectById(subjectId)(state),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectT,
)(SubjectPage);
