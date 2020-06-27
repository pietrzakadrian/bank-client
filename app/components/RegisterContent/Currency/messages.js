/*
 * CurrencyForm Messages
 *
 * This contains all the text for the CurrencyForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.RegisterForm.RegisterContent.Currency';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Currency',
  },
  validation: {
    id: `${scope}.validation`,
    defaultMessage: 'Currency is required.',
  },
});
