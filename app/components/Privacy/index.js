import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { StyledPrivacyWrapper } from './Privacy.style';
import messages from './messages';

export default function Privacy() {
  return (
    <StyledPrivacyWrapper>
      <FormattedHTMLMessage {...messages.privacy} />
    </StyledPrivacyWrapper>
  );
}
