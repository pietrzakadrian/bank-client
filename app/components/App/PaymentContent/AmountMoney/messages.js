/*
 * AmountMoney Messages
 *
 * This contains all the text for the FirstName component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.PaymentForm.PaymentContent.AmountMoney';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Amount money',
  },
  validation: {
    id: `${scope}.validation`,
    defaultMessage: 'Amount money is required.',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Enter amount money',
  },
});
