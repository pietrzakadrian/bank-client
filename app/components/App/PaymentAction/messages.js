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
});
