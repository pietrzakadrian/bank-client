/*
 * DashboardPage Messages
 *
 * This contains all the text for the DashboardPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.DashboardPage';

export default defineMessages({
  dashboard: {
    id: `${scope}.dashboard`,
    defaultMessage: 'Dashboard',
  },
  serverError: {
    id: `${scope}.server.error`,
    defaultMessage: 'Server error',
  },
  serverErrorDescription: {
    id: `${scope}.server.error.description`,
    defaultMessage:
      'Work on the bank application is underway. Please try again in a moment.',
  },
});
