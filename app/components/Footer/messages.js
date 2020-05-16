/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Footer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Remember the basic safety rules.',
  },
  subheader: {
    id: `${scope}.subheader`,
    defaultMessage:
      'Before you enter your ID number and access password on your website, make sure',
  },
  ul_li1: {
    id: `${scope}.ul_li1`,
    defaultMessage:
      'Your password is secure. It contains at least 8 characters and consists of uppercase and lowercase letters',
  },
  ul_li2: {
    id: `${scope}.ul_li2`,
    defaultMessage:
      'in the address bar or status bar, a padlock is visible at the bottom of the browser screen',
  },
  warning: {
    id: `${scope}.warning`,
    defaultMessage:
      'Remember: The bank does not require confirmation of any data, correct login or reading of the Banks messages by means of SMS, TAN and / or e-mail, or installation of any applications on the users phones or computers.',
  },
  footer: {
    id: `${scope}.footer`,
    defaultMessage:
      'This site uses cookies to provide services at the highest level. By clicking or navigating the site, you agree to allow our collection of information on through cookies. For more information on security, please visit:',
  },
  buttonContent: {
    id: `${scope}.buttonContent`,
    defaultMessage: 'Privacy rules',
  },
});
