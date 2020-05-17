/*
 * EmailAddressForm Messages
 *
 * This contains all the text for the EmailAddressForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.RegisterForm.RegisterContent.EmailAddress';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'E-Mail Address',
  },
  validation_processing_personal_data: {
    id: `${scope}.validation_processing_personal_data`,
    defaultMessage:
      'Confirmation of consent to the processing of personal data is required.',
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
  checkbox_content: {
    id: `${scope}.checkbox_content`,
    defaultMessage: 'I agree to the processing of my personal data.',
  },
  information: {
    id: `${scope}.information`,
    defaultMessage: 'Registration does not require confirmation by the email.',
  },
  emailExist: {
    id: `${scope}.emailExist`,
    defaultMessage: 'E-Mail address already exists.',
  },
});
