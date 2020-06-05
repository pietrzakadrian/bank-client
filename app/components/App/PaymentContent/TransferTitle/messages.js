/*
 * TransferTitle Messages
 *
 * This contains all the text for the FirstName component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.PaymentForm.PaymentContent.TransferTitle';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Transfer title',
  },
  validation: {
    id: `${scope}.validation`,
    defaultMessage: 'Transfer title is required.',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Enter transfer title',
  },
});
