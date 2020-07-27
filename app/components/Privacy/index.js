import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { StyledPrivacyWrapper } from './styles';
import messages from './messages';

export default function Privacy() {
  return (
    <StyledPrivacyWrapper>
      <FormattedHTMLMessage {...messages.privacy} />
    </StyledPrivacyWrapper>
  );
}
