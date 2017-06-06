/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  initArticleScripts,
  removeEventListenerForResize,
  removeAsideClickListener } from 'ndla-article-scripts';
import getLicenseByAbbreviation from 'ndla-licenses';
import SelectionPopover from 'react-selection-popover'
import { Article as UIArticle, OneColumn } from 'ndla-ui';
import { injectT } from '../../../i18n';
import ToggleLicenseBox from './ToggleLicenseBox';
import LicenseBox from '../../../components/license/LicenseBox';
import { SubjectShape, TopicShape } from '../../../shapes';
import data from '../data.json';

const overlay = {
  position: 'fixed',
  height: '100%',
  width: '100%',
  background: 'rgba(206,221,234,0.5)',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
};

class Article extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showPopover: false,
      explainator: false,
      selectedText: null
    }
  }

  componentDidMount() {
    initArticleScripts();
    //console.log('test')
    document.addEventListener("selectionchange", event => {
      const selection = encodeURI(window.getSelection().toString().split(' ')[0])
      this.setState({ wikiResponse: data })
      // selection.baseNode.textContent.replace('/yrker/i', '<span class="test">yrker</span>')
      /*
      var index = innerHTML.indexOf('yrker');
      console.dir(selection)
      if ( index >= 0 )
      {
        innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        inputText.innerHTML = innerHTML
      }
      */
    });
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

  toggleExplainator() {
    this.setState({
      selectedText: window.getSelection().toString(),
      explainator: !this.state.explainator
    })
  }

  render() {
    const { article } = this.props;

    return (
      <section className="c-article-content">

        <h1 className="c-article__title">{article.title}</h1>
        <UIArticle.Introduction introduction={article.introduction} />
        { article.footNotes ? <UIArticle.FootNotes footNotes={article.footNotes} /> : null }
        <OneColumn cssModifier="narrow">
          {/*this.renderToggleLicenseBox(true) */}
        </OneColumn>
        <div style={{position: 'relative'}}>
          <div data-selectable className="c-article--narrow" dangerouslySetInnerHTML={{ __html: article.content }} />
          <section>
            {/*this.renderToggleLicenseBox()*/}
            <a className="article-old-ndla-link" rel="noopener noreferrer" target="_blank" href={article.oldNdlaUrl}>Gå til orginal artikkel</a>
          </section>
          <SelectionPopover
            showPopover={this.state.showPopover}
            onSelect={() => {this.setState({showPopover: true})}}
            onDeselect={() => {this.setState({showPopover: false})}}
          >
            <button style={{padding: 3, lineHeight: 1}} className='o-button c-button' onClick={() => this.toggleExplainator() }>Forklar begrep(er)</button>
            <button style={{padding: 3, lineHeight: 1}} className='o-button c-button'>Les høyt</button>
            <button style={{padding: 3, lineHeight: 1}} className='o-button c-button'>Lagre utdrag</button>
          </SelectionPopover>
        </div>
        <div>

        </div>
          {this.state.explainator && (
          <div style={overlay}>
            <div style={{padding: '1em',background: '#fff', position: 'relative', maxWidth: 900, minWidth: 200, minHeight: 200, margin: '0 auto'}}>
              <button className='o-button c-button' onClick={() => this.toggleExplainator()}>Lukk</button>
              <ul className='o-list--arrows'>
                Du markerte: {this.state.selectedText.split(' ').map((word, index) => `${word} ${index > 1 ? ', ' : ''}`)}
                <ul>Søketreff fra SNL
                {
                  this.state.wikiResponse && this.state.wikiResponse.map(word => <li style={{ margin: '1em' }}><strong>{word.headword}</strong>: {word['first_two_sentences']}</li>)
                }
                </ul>
              </ul>
            </div>
          </div>
          )
          }
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
