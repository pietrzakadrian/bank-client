/*
 * RedirectToggle Messages
 *
 * This contains all the text for the RedirectToggle component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.RedirectToggle';

export default defineMessages({
  register: {
    id: `${scope}.register`,
    defaultMessage: 'Registration',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Log In',
  },
  registerContent: {
    id: `${scope}.registerContent`,
    defaultMessage:
      'If you do not have an account in our bank, you can create now by clicking on',
  },
  loginContent: {
    id: `${scope}.loginContent`,
    defaultMessage:
      'If you already have a bank account, you can log in by clicking on',
  },
});
