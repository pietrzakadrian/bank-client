/*
 * CurrencyToggle Messages
 *
 * This contains all the text for the CurrencyToggle component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CurrencyToggle';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Currency',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Select currency',
  },
});
