/*
 * PaymentAction Messages
 *
 * This contains all the text for the RegisterAction component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.PaymentForm.PaymentAction';

export default defineMessages({
  next: {
    id: `${scope}.next`,
    defaultMessage: 'Next',
  },
  receive: {
    id: `${scope}.receive`,
    defaultMessage: 'Receive authorization key',
  },
  make: {
    id: `${scope}.make`,
    defaultMessage: 'Make a payment',
  },
  previous: {
    id: `${scope}.previous`,
    defaultMessage: 'Previous',
  },
  dontGetAuthrozationKey: {
    id: `${scope}.dont.get.authrozation.key`,
    defaultMessage: 'I did not receive an email with a code',
  },
  authorizationKeySent: {
    id: `${scope}.authorization.key.sent`,
    defaultMessage: 'The authorization key has been sent',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Authorization key',
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
