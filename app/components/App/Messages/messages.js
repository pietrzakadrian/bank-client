import { defineMessages } from 'react-intl';

export const scope = 'app.components.Messages';

export default defineMessages({
  noMessages: {
    id: `${scope}.no.messages`,
    defaultMessage: 'No new messages.',
  },
  readed: {
    id: `${scope}.readed`,
    defaultMessage: 'Mark everything as read',
  },
  newMessages: {
    id: `${scope}.new.messages`,
    defaultMessage: 'New messages:',
  },
});
