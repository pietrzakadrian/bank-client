import React from 'react';
import { intlShape, injectIntl } from 'react-intl';
import CurrencyToggle from 'components/CurrencyToggle';
import messages from './messages';
/*
  This should be wrapped in Form.Item, but then validation of this field does not work.
  That's why Form.Item has been added to CurrencyToggle.
  This component was created because I wanted to keep the component structure.
  */

function Currency({ intl }) {
  return <CurrencyToggle label={intl.formatMessage(messages.label)} />;
}

Currency.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Currency);
