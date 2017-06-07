/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { Article as UIArticle, LicenseByline, OneColumn } from 'ndla-ui';
import { Article as LicenseByline, Icon, LayoutItem } from 'ndla-ui';
import { Article as UIArticle } from 'ndla-ui';
import {
  initArticleScripts,
  removeEventListenerForResize,
  removeAsideClickListener,
} from 'ndla-article-scripts';
import getLicenseByAbbreviation from '../../../../ndla-licenses';
import { injectT } from '../../../i18n';
import ToggleLicenseBox from './ToggleLicenseBox';
import LicenseBox from '../../../components/license/LicenseBox';
// import SelectionPopover from 'react-selection-popover'
import { SubjectShape, TopicShape } from '../../../shapes';

class Article extends Component {
  componentDidMount() {
    initArticleScripts();
  }

  componentWillUnmount() {
    removeEventListenerForResize();
    removeAsideClickListener();
  }

  renderToggleLicenseBox(showByline = false) {
    const { article, locale, t } = this.props;
    const licenseType = article.copyright.license.license;
    const authorsList = article.copyright.authors
      .map(author => author.name)
      .join(', ');
    const license = getLicenseByAbbreviation(licenseType, locale);

    return (
      <ToggleLicenseBox
        openTitle={t('article.openLicenseBox')}
        closeTitle={t('article.closeLicenseBox')}
        licenseBox={
          <LicenseBox article={article} locale={locale} license={license} />
        }
      >
        {showByline
          ? <LicenseByline license={license}>
            <span className="article_meta">
              {authorsList}. Publisert: {article.created}
            </span>
              .
            </LicenseByline>
          : null}
      </ToggleLicenseBox>
    );
  }

  render() {
    const { article } = this.props;
    const authorsList = article.copyright.authors
      .map(author => author.name)
      .join(', ');

    return (
      <article className="c-article">
        <LayoutItem layout="center">
          <h1 className="c-article__title c-article__title--icon"><Icon.Document />{article.title}</h1>
          <UIArticle.Introduction introduction={article.introduction} />
          <span className="c-article__byline">
            <span className="c-article__authors"><Icon.User /> {authorsList}</span>
            <span className="c-article__date"><Icon.Time /> Publisert: {article.created}</span>
          </span>
          {this.renderToggleLicenseBox()}
        </LayoutItem>
        <LayoutItem layout="center">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </LayoutItem>
        <LayoutItem layout="center">
          <section>
            {article.footNotes
              ? <UIArticle.FootNotes footNotes={article.footNotes} />
            : null}
            {this.renderToggleLicenseBox(false)}
            <a
              className="article-old-ndla-link"
              rel="noopener noreferrer"
              target="_blank"
              href={article.oldNdlaUrl}
            >
              Gå til orginal artikkel
            </a>
          </section>
        </LayoutItem>
      </article>
    );
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    copyright: PropTypes.shape({
      authors: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
  subject: SubjectShape,
  topicPath: PropTypes.arrayOf(TopicShape),
  locale: PropTypes.string.isRequired,
};

export default injectT(Article);
