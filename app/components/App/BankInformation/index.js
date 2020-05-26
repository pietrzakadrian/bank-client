import React from 'react';
import Widget from 'components/App/Widget';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function BankInformation() {
  return (
    <FormattedMessage {...messages.description}>
      {(description) => <Widget description={description} />}
    </FormattedMessage>
  );
}
