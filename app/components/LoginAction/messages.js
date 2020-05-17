/*
 * LoginAction Messages
 *
 * This contains all the text for the LoginAction component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.LoginForm.LoginAction';

export default defineMessages({
  next: {
    id: `${scope}.next`,
    defaultMessage: 'Next',
  },
  create: {
    id: `${scope}.login`,
    defaultMessage: 'Log In',
  },
  previous: {
    id: `${scope}.previous`,
    defaultMessage: 'Previous',
  },
});
