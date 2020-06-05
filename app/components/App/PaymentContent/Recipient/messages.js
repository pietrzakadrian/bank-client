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
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Search recipient...',
  },
});
