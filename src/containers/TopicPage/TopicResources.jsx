/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BEMHelper from 'react-bem-helper';
import { compose } from 'redux';
import { TopicIntroductionList, ResourceWrapper } from 'ndla-ui';
import { getSubtopicsWithIntroduction } from './topicSelectors';
import * as resourceActions from '../Resources/resourceActions';
import { injectT } from '../../i18n';
import { TopicShape } from '../../shapes';
import Resources from '../Resources/Resources';
import { getResourcesByTopicId } from '../Resources/resourceSelectors';
import { toTopicPartial } from '../../routes';

const toTopic = (subjectId, topicPath) => {
  const topicIds = topicPath.map(topic => topic.id);
  return toTopicPartial(subjectId, ...topicIds);
};

const classes = new BEMHelper({
  name: 'resources',
  prefix: 'c-',
});

class TopicResources extends Component {
  componentWillMount() {
    const {
      subjectId,
      topic: { id: topicId },
      fetchTopicResources,
    } = this.props;
    fetchTopicResources({ subjectId, topicId });
  }

  componentWillReceiveProps(nextProps) {
    const { topic, subjectId, fetchTopicResources } = this.props;
    if (nextProps.topic.id !== topic.id) {
      fetchTopicResources({ subjectId, topicId: nextProps.topic.id });
    }
  }

  render() {
    const {
      subtopics,
      topic: { id: topicId },
      subjectId,
      topicPath,
      t,
      showResources,
    } = this.props;
    return (
      <ResourceWrapper>
        {subtopics.length > 0 &&
          <h1 {...classes('title')}>{t('topicPage.topics')}</h1>}
        {subtopics.length > 0 &&
          <TopicIntroductionList
            toTopic={toTopic(subjectId, topicPath)}
            topics={subtopics}
          />}
        {showResources && <Resources topicId={topicId} />}
      </ResourceWrapper>
    );
  }
}

TopicResources.propTypes = {
  subjectId: PropTypes.string.isRequired,
  fetchTopicResources: PropTypes.func.isRequired,
  topic: TopicShape.isRequired,
  topicPath: PropTypes.arrayOf(TopicShape).isRequired,
  subtopics: PropTypes.arrayOf(TopicShape).isRequired,
  showResources: PropTypes.bool,
};

const mapDispatchToProps = {
  fetchTopicResources: resourceActions.fetchTopicResources,
};

const mapStateToProps = (state, ownProps) => {
  const { subjectId, topic: { id: topicId } } = ownProps;
  return {
    subtopics: getSubtopicsWithIntroduction(subjectId, topicId)(state),
    resources: getResourcesByTopicId(topicId)(state),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), injectT)(
  TopicResources,
);
