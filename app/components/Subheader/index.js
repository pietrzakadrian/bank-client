/**
 *
 * Subheader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledSubheader, StyledPageHeader } from './Subheader.style';
import LocaleToggle from '../LocaleToggle';

export default function Subheader({ pageTitle }) {
  return (
    <StyledSubheader>
      <StyledPageHeader title={pageTitle} />
      <LocaleToggle />
    </StyledSubheader>
  );
}

Subheader.propTypes = {
  pageTitle: PropTypes.object.isRequired,
};
