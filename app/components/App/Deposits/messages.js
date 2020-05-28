import { defineMessages } from 'react-intl';

export const scope = 'app.components.Deposits';

export default defineMessages({
  description: {
    id: `${scope}.description`,
    defaultMessage: 'The deposits function is disabled.',
  },
  action: {
    id: `${scope}.action`,
    defaultMessage: 'New deposit',
  },
});
