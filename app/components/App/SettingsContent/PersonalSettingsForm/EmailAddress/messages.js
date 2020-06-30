/*
 * EmailAddress Messages
 *
 * This contains all the text for the EmailAddress component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.SettingsContent.EmailAddress';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'E-Mail Address',
  },
  validationEmailValid: {
    id: `${scope}.validation.email.vaild`,
    defaultMessage: 'E-Mail address must be valid.',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Enter new e-mail address',
  },
  emailExist: {
    id: `${scope}.emailExist`,
    defaultMessage: 'E-Mail address already exists.',
  },
});
