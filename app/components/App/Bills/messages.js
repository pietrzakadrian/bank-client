import { defineMessages } from 'react-intl';

export const scope = 'app.components.Bills';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Bills',
  },
  action: {
    id: `${scope}.action`,
    defaultMessage: 'Create a new bill',
  },
  personal: {
    id: `${scope}.personal`,
    defaultMessage: 'Personal',
  },
});
