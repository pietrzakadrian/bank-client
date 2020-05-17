/*
 * Password Messages
 *
 * This contains all the text for the Password component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.LoginForm.LoginContent.Password';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Password',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Enter password',
  },
  validation: {
    id: `${scope}.validation`,
    defaultMessage: 'Password is required.',
  },
});
