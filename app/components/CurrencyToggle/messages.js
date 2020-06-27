/*
 * CurrencyToggle Messages
 *
 * This contains all the text for the CurrencyToggle component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CurrencyToggle';

export default defineMessages({
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Select currency',
  },
  validation: {
    id: `${scope}.validation`,
    defaultMessage: 'Currency is required.',
  },
});
