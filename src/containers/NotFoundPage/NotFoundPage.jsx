/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { OneColumn } from '../../../lib';
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <OneColumn cssModifier="narrow">
      <h2>404 - Det er oss, ikke deg.</h2>
      <p>Vi fant ikke det du forsøkte å finne. Det er ikke alt som er helt på plass ennå. Kanskje prøv et <Link to='/search'>søk</Link>?</p>
    </OneColumn>
  );
}
