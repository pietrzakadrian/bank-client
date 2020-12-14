/*
 * ForgotPasswordRedirect Messages
 *
 * This contains all the text for the ForgotPasswordRedirect component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ForgotPasswordRedirect';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ForgotPasswordRedirect component!',
  },
  forgetPasswordAsk: {
    id: `${scope}.forgetPasswordAsk`,
    defaultMessage: 'Do not you remember the password?',
  },
});
