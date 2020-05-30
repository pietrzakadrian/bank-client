import { defineMessages } from 'react-intl';

export const scope = 'app.components.BankCards';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Cards',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'The cards function is disabled.',
  },
  action: {
    id: `${scope}.action`,
    defaultMessage: 'New card',
  },
});
