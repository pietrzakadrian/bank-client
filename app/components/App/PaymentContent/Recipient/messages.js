/*
 * Recipient Messages
 *
 * This contains all the text for the FirstName component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.PaymentForm.PaymentContent.Recipient';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Recipient',
  },
  validation: {
    id: `${scope}.validation`,
    defaultMessage: 'Recipient is required.',
  },
  validationNumber: {
    id: `${scope}.validation.number`,
    defaultMessage: 'Search using only numbers.',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Search recipient...',
  },
  tooltip: {
    id: `${scope}.tooltip`,
    defaultMessage: 'Search for the recipient by entering the bill numbers',
  },
  notFoundContent: {
    id: `${scope}.not.found.content`,
    defaultMessage:
      'To find the recipient, enter the starting digit of his account number.',
  },
});
