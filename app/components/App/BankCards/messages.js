import { defineMessages } from 'react-intl';

export const scope = 'app.components.BankCards';

export default defineMessages({
  description: {
    id: `${scope}.description`,
    defaultMessage: 'The cards function is disabled.',
  },
  action: {
    id: `${scope}.action`,
    defaultMessage: 'New card',
  },
});
