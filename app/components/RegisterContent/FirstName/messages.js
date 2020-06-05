/*
 * FirstName Messages
 *
 * This contains all the text for the FirstName component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.RegisterForm.RegisterContent.FirstName';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'First name',
  },
  validationValid: {
    id: `${scope}.validation.valid`,
    defaultMessage: 'The first name entered must be valid.',
  },
  validationRequired: {
    id: `${scope}.validation.required`,
    defaultMessage: 'First name is required.',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Enter first name',
  },
});
