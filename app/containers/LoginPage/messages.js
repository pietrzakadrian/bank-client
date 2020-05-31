/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Description of LoginPage',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Log In',
  },
  accountNotFound: {
    id: `${scope}.accountNotFound`,
    defaultMessage: `Account with pin number {pinCode} does not exist.`,
  },
  passwordInvalid: {
    id: `${scope}.passwordInvalid`,
    defaultMessage: `The password you entered is incorrect.`,
  },
  serverError: {
    id: `${scope}.serverError`,
    defaultMessage: `Please try again in a moment.`,
  },
});
