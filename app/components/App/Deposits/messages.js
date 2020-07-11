import { defineMessages } from 'react-intl';

export const scope = 'app.components.Deposits';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Deposits',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'The deposits function is disabled.',
  },
  action: {
    id: `${scope}.action`,
    defaultMessage: 'New deposit',
  },
});
