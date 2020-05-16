/*
 * Information Messages
 *
 * This contains all the text for the Information component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Information';

export default defineMessages({
  content: {
    id: `${scope}.content`,
    defaultMessage:
      'If you take advantage of our promotion and register your account by the end of this year, you will receive 10,00 USD from us. Accounts already created will also receive this from us.',
  },
});
