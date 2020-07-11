import { defineMessages } from 'react-intl';

export const scope = 'app.components.Credits';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Credits',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'The credits function is disabled.',
  },
  action: {
    id: `${scope}.action`,
    defaultMessage: 'New credit',
  },
});
