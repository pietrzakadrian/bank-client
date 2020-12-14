/*
 * ForgetPasswordPage Messages
 *
 * This contains all the text for the ForgetPasswordPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ForgetPasswordPage';

export default defineMessages({
  forgetPassword: {
    id: `${scope}.forgetPassword`,
    defaultMessage: 'Forget Password',
  },
  serverError: {
    id: `${scope}.serverError`,
    defaultMessage: 'Please try again in a moment.',
  },
  notFound: {
    id: `${scope}.notFound`,
    defaultMessage: 'Email address not found.',
  },
});
