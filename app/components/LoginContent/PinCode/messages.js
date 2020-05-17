/*
 * PinCode Messages
 *
 * This contains all the text for the Password component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.LoginForm.LoginContent.PinCode';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Pin code',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Enter pin code',
  },
  validation: {
    id: `${scope}.validation`,
    defaultMessage: 'Pin code is required.',
  },
});
