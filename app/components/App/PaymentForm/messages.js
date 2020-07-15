/*
 * PaymentForm Messages
 *
 * This contains all the text for the Steps component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.PaymentForm';

export default defineMessages({
  bill: {
    id: `${scope}.bill`,
    defaultMessage: 'Bill',
  },
  recipient: {
    id: `${scope}.recipient`,
    defaultMessage: 'Recipient',
  },
  amountMoney: {
    id: `${scope}.amount.money`,
    defaultMessage: 'Amount of money',
  },
  transferTitle: {
    id: `${scope}.transfer.title`,
    defaultMessage: 'Transfer title',
  },
  confirmData: {
    id: `${scope}.confirm.data`,
    defaultMessage: 'Confirm data',
  },
});
