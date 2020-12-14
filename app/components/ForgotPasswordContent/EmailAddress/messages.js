/*
 * EmailAddressForm Messages
 *
 * This contains all the text for the EmailAddressForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ForgetPassword.ForgetPasswordContent.EmailAddress';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'E-Mail Address',
  },
  validation_email_valid: {
    id: `${scope}.validation_email_valid`,
    defaultMessage: 'E-Mail address must be valid.',
  },
  validation_email_required: {
    id: `${scope}.validation_email_required`,
    defaultMessage: 'E-Mail address is required.',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Enter e-mail address',
  },
});
