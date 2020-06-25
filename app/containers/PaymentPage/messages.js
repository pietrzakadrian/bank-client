/*
 * PaymentPage Messages
 *
 * This contains all the text for the PaymentPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.PaymentPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the PaymentPage container!',
  },
  payment: {
    id: `${scope}.payment`,
    defaultMessage: 'Payment',
  },
  billNotValid: {
    id: `${scope}.bill.not.valid`,
    defaultMessage: 'The bill number entered is not valid.',
  },
  transferConfirmedTitle: {
    id: `${scope}.transfer.confirmed.title`,
    defaultMessage: 'The transfer has been made',
  },
  transferConfirmedDescription: {
    id: `${scope}.transfer.confirmed.description`,
    defaultMessage:
      'Your balance has been updated. Check your transfer history in the History tab.',
  },
});
