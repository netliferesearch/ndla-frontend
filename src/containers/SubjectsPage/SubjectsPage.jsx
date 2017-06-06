/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { OneColumn, LayoutItem } from 'ndla-ui';
import { SubjectLinkList } from '../../components';
import { injectSubjects } from '../SubjectPage/subjectHOCs';
import { SubjectShape } from '../../shapes';
import { injectT } from '../../i18n';

const SubjectsPage = ({ t, subjects }) => (
  <OneColumn>
    <article className="c-article">
      <LayoutItem layout="center">
        <h2>{t('subjectsPage.chooseSubject')}</h2>
        <SubjectLinkList subjects={subjects} />
      </LayoutItem>
    </article>
  </OneColumn>
);

SubjectsPage.propTypes = {
  subjects: PropTypes.arrayOf(SubjectShape).isRequired,
};

export default compose(injectT, injectSubjects)(SubjectsPage);
