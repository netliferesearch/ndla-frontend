/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import BEMHelper from 'react-bem-helper';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { ResourceList } from '../../../lib';
import { ResourceTypeShape } from '../../shapes';
import { getResourceTypesByTopicId } from './resourceSelectors';
import { resourceToLinkProps as resourceToLinkPropsHelper } from './resourceHelpers';

const classes = new BEMHelper({
  name: 'resource-group',
  prefix: 'c-',
});

class Resources extends Component {
  componentWillMount() {
  }

  componentWillReceiveProps() {
  }

  render() {
    const { router, topicResourcesByType } = this.props;
    /**
     * Horrible hack to concat interaktiviteter with oppgaver og aktiviteter
     */
    let newTopicResourcesByType = []
    let interaktiviteter = []
    topicResourcesByType.forEach((type, index) => {
      if (type.id === 'urn:resource-type:e42462d3-0b18-40f1-a65f-48c182378823') {
        type.resources.forEach(resource => resource.resourceTypes)
        interaktiviteter = type.resources
      } else {
        newTopicResourcesByType.push(type)
      }
    })
    newTopicResourcesByType.forEach(type => {
      if(type.id === 'urn:resource-type:622364e0-8cea-4083-9ce1-74e33e14e0b4') {
        type.resources = type.resources.concat(interaktiviteter)
      }
    })

    const { params } = router;

    const resourceToLinkProps = resource => resourceToLinkPropsHelper(resource, params.subjectId, params.topicId);

    return (
      <div>
        {newTopicResourcesByType
          .filter(type => type.id !== 'urn:resource-type:e42462d3-0b18-40f1-a65f-48c182378823')
          .map(type => (
          <div key={type.id} {...classes('', type.name.replace(/æ/g, ''))}>
            <h1 {...classes('title')}>{type.name}</h1>
            <ResourceList resourceToLinkProps={resourceToLinkProps} resources={type.resources.map(resource => ({ ...resource, icon: type.name }))} />
          </div>),
        )
        }
      </div>
    );
  }
}

Resources.propTypes = {
  topicResourcesByType: PropTypes.arrayOf(ResourceTypeShape),
  router: PropTypes.shape({
    params: PropTypes.shape({
      subjectId: PropTypes.string.isRequired,
      topicId: PropTypes.string,
    }).isRequired,
  }),
};

const mapStateToProps = (state, ownProps) => {
  const { topicId } = ownProps;
  return ({
    topicResourcesByType: getResourceTypesByTopicId(topicId)(state),
  });
};

export default compose(
  connect(mapStateToProps),
  withRouter,
)(Resources);
