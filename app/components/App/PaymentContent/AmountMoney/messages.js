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
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Enter amount money',
  },
  requiredValidation: {
    id: `${scope}.required.validation`,
    defaultMessage: 'Amout money is required.',
  },
  valueValidation: {
    id: `${scope}.value.validation`,
    defaultMessage: `You don't have that amount of money.`,
  },
  zeroLessValidation: {
    id: `${scope}.zero.less.validation`,
    defaultMessage: 'You cannot transfer an amount less than or equal to 0.',
  },
});
