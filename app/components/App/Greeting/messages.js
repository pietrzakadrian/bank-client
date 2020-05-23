import { defineMessages } from 'react-intl';

export const scope = 'app.components.Greeting';

export default defineMessages({
  goodMorning: {
    id: `${scope}.good.morning`,
    defaultMessage: 'Good morning',
  },
  goodEvening: {
    id: `${scope}.good.evening`,
    defaultMessage: 'Good evening',
  },
  lastSuccessfulLogin: {
    id: `${scope}.last.successful.login`,
    defaultMessage: 'Last successful login:',
  },
  lastFailedLogin: {
    id: `${scope}.last.failed.login`,
    defaultMessage: 'Last failed login:',
  },
});
