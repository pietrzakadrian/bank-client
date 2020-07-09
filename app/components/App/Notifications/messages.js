import { defineMessages } from 'react-intl';

export const scope = 'app.components.Notifications';

export default defineMessages({
  noNotifications: {
    id: `${scope}.no.notifications`,
    defaultMessage: 'No new notifications.',
  },
  newNotification: {
    id: `${scope}.new.notification`,
    defaultMessage: 'You have received a new transfer from',
  },
  worth: {
    id: `${scope}.worth`,
    defaultMessage: 'worth',
  },
});
