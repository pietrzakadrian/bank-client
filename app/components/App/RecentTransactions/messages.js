import { defineMessages } from 'react-intl';

export const scope = 'app.components.RecentTransaction';

export default defineMessages({
  to: {
    id: `${scope}.to`,
    defaultMessage: 'to',
  },
  from: {
    id: `${scope}.from`,
    defaultMessage: 'from',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Recent Transactions',
  },
});
