import { defineMessages } from 'react-intl';

export const scope = 'app.components.Credits';

export default defineMessages({
  description: {
    id: `${scope}.description`,
    defaultMessage: 'The credits function is disabled.',
  },
  action: {
    id: `${scope}.action`,
    defaultMessage: 'New credit',
  },
});
