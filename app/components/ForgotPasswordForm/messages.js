/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ForgotPasswordForm';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Password reset link has been sent',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Check your email. A link with the option to reset the password has been sent to the address provided.',
  },
});
