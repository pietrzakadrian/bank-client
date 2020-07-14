/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 *
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.NotFoundPage';

export default defineMessages({
  notFoundPage: {
    id: `${scope}.notFoundPage`,
    defaultMessage: 'Not Found Page',
  },
  sorryThisPageIsUnavailable: {
    id: `${scope}.sorryThisPageIsUnavailable`,
    defaultMessage: "We're sorry, this page is unavailable.",
  },
  sorrySubheader: {
    id: `${scope}.sorrySubheader`,
    defaultMessage:
      'The link clicked may have been corrupted or the page may have been deleted.',
  },
  backToApp: {
    id: `${scope}.back.to.app`,
    defaultMessage: 'Go back to the application',
  },
});
