/*
 * Confirm Messages
 *
 * This contains all the text for the Confirm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.PaymentForm.PaymentContent.Confirm';

export default defineMessages({
  details: {
    id: `${scope}.details`,
    defaultMessage: 'Bank transfer details',
  },
  amount: {
    id: `${scope}.amount`,
    defaultMessage: 'Amount:',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Transfer title:',
  },
});
