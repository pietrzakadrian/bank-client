/**
 *
 * Subheader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import LocaleToggle from 'components/LocaleToggle';
import { StyledSubheader, StyledPageHeader } from './styles';

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
