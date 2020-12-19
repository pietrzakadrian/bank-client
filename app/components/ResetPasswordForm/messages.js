/*
 * ResetPasswordForm Messages
 *
 * This contains all the text for the ResetPasswordForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ResetPasswordForm';

export default defineMessages({
  passwordNotMatching: {
    id: `${scope}.passwordNotMatching`,
    defaultMessage: 'Password not matching',
  },
});
