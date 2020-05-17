/*
 * Password Messages
 *
 * This contains all the text for the Password component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.RegisterForm.RegisterContent.Password';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Password',
  },
  validation_valid: {
    id: `${scope}.validation_valid`,
    defaultMessage: 'Password must be at least 6 characters long.',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Enter password',
  },
});
