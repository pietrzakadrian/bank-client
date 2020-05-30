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
  billHasBeenCreated: {
    id: `${scope}.bill.has.been.created`,
    defaultMessage: 'Bill has been created',
  },
  billHasBeenCreatedDescription: {
    id: `${scope}.bill.has.been.created.description`,
    defaultMessage:
      'New bill has been assigned to your account and appeared in your bills widget.',
  },
  billHasNotBeenCreated: {
    id: `${scope}.bill.has.not.been.created`,
    defaultMessage: 'Bill has not been created',
  },
  billHasNotBeenCreatedDescription: {
    id: `${scope}.bill.has.not.been.created.description`,
    defaultMessage:
      'You cannot create a new account because the maximum number of accounts has been exceeded.',
  },
});
