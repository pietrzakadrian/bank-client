/*
 * RegisterAction Messages
 *
 * This contains all the text for the RegisterAction component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.RegisterForm.RegisterAction';

export default defineMessages({
  next: {
    id: `${scope}.next`,
    defaultMessage: 'Next',
  },
  create: {
    id: `${scope}.create`,
    defaultMessage: 'Create an account',
  },
  previous: {
    id: `${scope}.previous`,
    defaultMessage: 'Previous',
  },
});
