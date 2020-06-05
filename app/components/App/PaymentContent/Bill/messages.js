/*
 * Bill Messages
 *
 * This contains all the text for the FirstName component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.PaymentForm.PaymentContent.Bill';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Bill',
  },
  validation: {
    id: `${scope}.validation`,
    defaultMessage: 'Bill is required.',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Select bill',
  },
});
