import { defineMessages } from 'react-intl';

export const scope = 'app.components.RecentTransaction';

export default defineMessages({
  to: {
    id: `${scope}.to`,
    defaultMessage: 'To',
  },
  from: {
    id: `${scope}.from`,
    defaultMessage: 'From',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Recent Transactions',
  },
});
