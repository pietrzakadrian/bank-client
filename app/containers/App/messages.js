/*
 * App Messages
 *
 * This contains all the text for the App container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.App';

export default defineMessages({
  serverError: {
    id: `${scope}.serverError`,
    defaultMessage: `Please try again in a moment.`,
  },
});
