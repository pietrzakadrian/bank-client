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
  validation_valid: {
    id: `${scope}.validation_valid`,
    defaultMessage: 'The first name entered must be valid.',
  },
  validation_required: {
    id: `${scope}.validation_required`,
    defaultMessage: 'First name is required.',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Enter first name',
  },
});
