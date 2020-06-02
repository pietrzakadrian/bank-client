import { defineMessages } from 'react-intl';

export const scope = 'app.components.HeaderAction';

export default defineMessages({
  messages: {
    id: `${scope}.messages`,
    defaultMessage: 'Messages',
  },
  notifications: {
    id: `${scope}.notifications`,
    defaultMessage: 'Notifications',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
  popConfirmTitle: {
    id: `${scope}.pop.confirm.title`,
    defaultMessage: 'Are you sure you want to log out?',
  },
  popConfirmOk: {
    id: `${scope}.pop.confirm.ok`,
    defaultMessage: 'Yes',
  },
  popConfirmCancel: {
    id: `${scope}.pop.confirm.cancel`,
    defaultMessage: 'Cancel',
  },
});
