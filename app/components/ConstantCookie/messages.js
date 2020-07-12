/*
 * ConstantCookie Messages
 *
 * This contains all the text for the Footer component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ConstantCookie';

export default defineMessages({
  description: {
    id: `${scope}.description`,
    defaultMessage:
      'This site uses cookies to provide services at the highest level. By continuing to use the site, you agree to their use.',
  },
  accept: {
    id: `${scope}.accept`,
    defaultMessage: 'Accept',
  },
  decline: {
    id: `${scope}.decline`,
    defaultMessage: 'Decline',
  },
});
