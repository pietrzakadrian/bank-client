/*
 * SettingsPage Messages
 *
 * This contains all the text for the SettingsPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SettingsPage';

export default defineMessages({
  settings: {
    id: `${scope}.settings`,
    defaultMessage: 'Settings',
  },
  saveDataTitle: {
    id: `${scope}.save.data.title`,
    defaultMessage: 'New data has been saved',
  },
  saveDataDescription: {
    id: `${scope}.save.data.description`,
    defaultMessage: 'The data has been refreshed automatically',
  },
});
