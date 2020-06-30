/*
 * Name Messages
 *
 * This contains all the text for the Name component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.SettingsContent.Name';

export default defineMessages({
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Enter new last name',
  },
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Last name',
  },
  validationValid: {
    id: `${scope}.validation.valid`,
    defaultMessage: 'The last name entered must be valid.',
  },
});
