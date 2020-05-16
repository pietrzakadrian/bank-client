/*
 * LastName Messages
 *
 * This contains all the text for the LastName component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.RegisterForm.RegisterContent.LastName';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Last name',
  },
  validation_valid: {
    id: `${scope}.validation_valid`,
    defaultMessage: 'The last name entered must be valid.',
  },
  validation_required: {
    id: `${scope}.validation_required`,
    defaultMessage: 'Last name is required.',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Enter last name',
  },
});
