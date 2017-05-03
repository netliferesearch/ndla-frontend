/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import cx from 'classnames'
import { PageContainer } from '../../../lib';
import ReactStickyHeader from 'react-sticky-header';
import { MessageShape } from '../../shapes';
import Masthead from '../Masthead';
import Footer from './components/Footer';
import { getLocale } from '../Locale/localeSelectors';
import { getMessages } from '../Messages/messagesSelectors';
import { getSticky } from '../Masthead/mastheadSelectors'
import Alerts from '../Messages/Alerts';
import { injectT } from '../../i18n';

export class App extends React.Component {
  getChildContext() {
    return {
      locale: this.props.locale,
    };
  }

  render() {
    const { dispatch, children, messages, t, params, sticky } = this.props;
    return (
      <PageContainer>
        <Helmet
          title="NDLA"
          meta={[
            { name: 'description', content: t('meta.description') },
          ]}
        />
         <ReactStickyHeader
          // This will be the sticky strip.
          header={
            <div style={{backgroundColor: 'rgba(255,255,255,0.8)'}} className={('Header_root', { sticky })}>
              <Masthead t={t} params={params} />
            </div>
          }
        >
      <Masthead t={t} params={params} />
  </ReactStickyHeader>

        {children}
        <Footer t={t} />
        <Alerts dispatch={dispatch} messages={messages} />
      </PageContainer>
    );
  }
}

App.propTypes = {
  params: PropTypes.shape({
    subjectId: PropTypes.string,
    topicId: PropTypes.string,
  }).isRequired,
  locale: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(MessageShape).isRequired,
  dispatch: PropTypes.func.isRequired,
};

App.childContextTypes = {
  locale: PropTypes.string,
};

const mapStateToProps = state => ({
  locale: getLocale(state),
  messages: getMessages(state),
  sticky: getSticky(state)
});

export default connect(mapStateToProps)(injectT(App));
