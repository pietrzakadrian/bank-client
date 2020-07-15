/*
 * RegisterForm Messages
 *
 * This contains all the text for the Steps component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.RegisterForm';

export default defineMessages({
  firstName: {
    id: `${scope}.firstName`,
    defaultMessage: 'First name',
  },
  lastName: {
    id: `${scope}.lastName`,
    defaultMessage: 'Last name',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  currency: {
    id: `${scope}.currency`,
    defaultMessage: 'Currency',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'E-Mail Address',
  },
});
