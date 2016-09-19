/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { getLocale } from '../Locale/localeSelectors';
import { getMessages } from '../Messages/messagesSelectors';
import Alerts from '../Messages/Alerts';
import { injectT } from '../../i18n';
import { Masthead, Footer } from '../../components';

export class App extends React.Component {
  getChildContext() {
    return {
      locale: this.props.locale,
    };
  }

  render() {
    const { dispatch, children, messages, t } = this.props;
    return (
      <div className="page-container">
        <Helmet
          title="NDLA"
          meta={[
                { name: 'description', content: t('meta.description') },
          ]}
        />

        <Masthead />
        {children}
        <Footer />
        <Alerts dispatch={dispatch} messages={messages} />
      </div>
    );
  }
}

App.propTypes = {
  locale: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

App.childContextTypes = {
  locale: PropTypes.string,
};

const mapStateToProps = (state) => ({
  locale: getLocale(state),
  messages: getMessages(state),
});

export default connect(mapStateToProps)(injectT(App));