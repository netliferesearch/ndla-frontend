/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes, Component } from 'react';

import {
  initArticleScripts,
  removeEventListenerForResize,
  removeAsideClickListener } from 'ndla-article-scripts';
import getLicenseByAbbreviation from 'ndla-licenses';
import { Article as UIArticle, OneColumn } from '../../../../lib';
import { injectT } from '../../../i18n';
import ToggleLicenseBox from './ToggleLicenseBox';
import LicenseBox from '../../../components/license/LicenseBox';
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
    const authorsList = article.copyright.authors.map(author => author.name).join(', ');
    const license = getLicenseByAbbreviation(licenseType, locale);

    return (
      <ToggleLicenseBox
        openTitle={t('article.openLicenseBox', { contentType: article.contentType.toLowerCase() })}
        closeTitle={t('article.closeLicenseBox')}
        licenseBox={<LicenseBox article={article} locale={locale} license={license} />}
      >
        { showByline ?
          <div className="c-article-meta">
            <span className="c-article__metatext">{authorsList}. Publisert: {article.created}</span>.
          </div>
          : null
        }
      </ToggleLicenseBox>
    );
  }

  render() {
    const { article } = this.props;

    return (
      <section className="c-article-content">

        <h1 className="c-article__title">{article.title}</h1>
        <UIArticle.Introduction introduction={article.introduction} />
        { article.footNotes ? <UIArticle.FootNotes footNotes={article.footNotes} /> : null }
        <OneColumn cssModifier="narrow">
          {this.renderToggleLicenseBox(true)}
        </OneColumn>
        <div className="c-article--narrow" dangerouslySetInnerHTML={{ __html: article.content }} />
        <section>
          {this.renderToggleLicenseBox()}
          <a className="article-old-ndla-link" rel="noopener noreferrer" target="_blank" href={article.oldNdlaUrl}>Gå til orginal artikkel</a>
        </section>
      </section>
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
