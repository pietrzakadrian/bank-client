/*
 * ResetPasswordPage Messages
 *
 * This contains all the text for the ResetPasswordPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ResetPasswordPage';

export default defineMessages({
  resetPassword: {
    id: `${scope}.resetPassword`,
    defaultMessage: 'Reset Password',
  },
  serverError: {
    id: `${scope}.serverError`,
    defaultMessage: 'Please try again in a moment',
  },
  tokenError: {
    id: `${scope}.tokenError`,
    defaultMessage: 'The token has expired',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'All right!',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Your password has been changed.',
  },
});
