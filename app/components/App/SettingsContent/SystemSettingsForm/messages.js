import { defineMessages } from 'react-intl';

export const scope = 'app.components.SystemSettingsForm';

export default defineMessages({
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Cancel',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Change the default currency',
  },
  confirm: {
    id: `${scope}.confirm`,
    defaultMessage: 'Confirm',
  },
  tryingChangeDefaultCurrencyPartOne: {
    id: `${scope}.trying.change.default.currency.part.one`,
    defaultMessage: 'You are trying to change your default currency to',
  },
  tryingChangeDefaultCurrencyPartTwo: {
    id: `${scope}.trying.change.default.currency.part.two`,
    defaultMessage: '? This will convert the available funds in the dashboard.',
  },
  tryingChangeDefaultCurrencyConfirm: {
    id: `${scope}.trying.change.default.currency.confirm`,
    defaultMessage: 'Do you confirm the change approval?',
  },
  currencyLabel: {
    id: `${scope}.currency.label`,
    defaultMessage: 'Default currency',
  },
  languageLabel: {
    id: `${scope}.language.label`,
    defaultMessage: 'Language',
  },
});
