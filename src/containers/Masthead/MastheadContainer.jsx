/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Masthead, MastheadItem, Logo, ClickToggle, TopicMenu } from '../../../lib';
import { toSubject, toTopic } from '../../routes';
import { getSubjectById } from '../SubjectPage/subjectSelectors';
import { getSubjectMenu } from '../TopicPage/topicSelectors';
import { SubjectShape, TopicShape } from '../../shapes';

function toTopicWithSubjectIdBound(subjectId) {
  return toTopic.bind(undefined, subjectId);
}

const MastheadContainer = ({ subject, topics }) => (
  <Masthead>
    <MastheadItem left>
      { subject ?
        <ClickToggle title="Meny" className="c-topic-menu-container" buttonClassName="c-btn c-button--outline c-topic-menu-toggle-button">
          <TopicMenu subjectId={subject.id} toSubject={toSubject(subject.id)} subject={subject.name} toTopic={toTopicWithSubjectIdBound(subject.id)} topics={topics} />
        </ClickToggle>
            : null
      }
    </MastheadItem>
    <MastheadItem right>
      <Logo to="/" altText="Nasjonal digital læringsarena" />
    </MastheadItem>
  </Masthead>
);

MastheadContainer.propTypes = {
  params: PropTypes.shape({
    subjectId: PropTypes.string,
    topicId: PropTypes.string,
  }).isRequired,
  t: PropTypes.func.isRequired,
  subject: SubjectShape,
  topics: PropTypes.arrayOf(TopicShape).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { subjectId } = ownProps.params;
  return {
    subject: getSubjectById(subjectId)(state),
    topics: getSubjectMenu(subjectId)(state),
  };
};

export default compose(
  connect(mapStateToProps),
)(MastheadContainer);
