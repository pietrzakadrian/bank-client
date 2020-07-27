/**
 *
 * Information
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import StyledInformation from './styles';

export default function Information() {
  return (
    <StyledInformation>
      <FormattedMessage {...messages.content} />
    </StyledInformation>
  );
}
