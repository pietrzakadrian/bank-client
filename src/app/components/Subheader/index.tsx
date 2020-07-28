/**
 *
 * Subheader
 *
 */
import React from 'react';
import { StyledSubheader, StyledPageHeader } from './styled';
import { LocaleToggle } from '../LocaleToggle';

interface Props {
  pageTitle: string;
}

export function Subheader({ pageTitle }: Props) {
  return (
    <StyledSubheader>
      <StyledPageHeader title={pageTitle} />
      <LocaleToggle />
    </StyledSubheader>
  );
}
