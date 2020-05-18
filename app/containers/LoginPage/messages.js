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
});
