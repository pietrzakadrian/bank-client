/*
 * RegisterPage Messages
 *
 * This contains all the text for the RegisterPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.RegisterPage';

export default defineMessages({
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Description of RegisterPage',
  },
  registration: {
    id: `${scope}.registration`,
    defaultMessage: 'Registration',
  },
  emailUnique: {
    id: `${scope}.email.unique`,
    defaultMessage: `Email address already exists.`,
  },
  serverError: {
    id: `${scope}.serverError`,
    defaultMessage: `Please try again in a moment.`,
  },
});
