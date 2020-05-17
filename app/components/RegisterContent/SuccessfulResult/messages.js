/*
 * SuccesfulResult Messages
 *
 * This contains all the text for the SuccesfulResult component.
 */

import { defineMessages } from 'react-intl';

export const scope =
  'app.components.RegisterForm.RegisterContent.SuccesfulResult';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'The account has been successfully registered!',
  },
  subtitle: {
    id: `${scope}.subtitle`,
    defaultMessage: `Your PIN code is: {pinCode}. Remember it or save it in a safe place, because you must enter the PIN code when you want to log into the banking system.`,
  },
  action: {
    id: `${scope}.action`,
    defaultMessage: 'Log in to the banking system',
  },
});
