/*
 * SettingsForm Messages
 *
 * This contains all the text for the SettingsForm container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.SettingsForm';

export default defineMessages({
  saveDataTitle: {
    id: `${scope}.save.data.title`,
    defaultMessage: 'New data has been saved',
  },
  saveDataDescription: {
    id: `${scope}.save.data.description`,
    defaultMessage: 'The data has been refreshed automatically',
  },
});
