import { defineMessages } from 'react-intl';

export const scope = 'app.components.Modal';

export default defineMessages({
  create: {
    id: `${scope}.create`,
    defaultMessage: 'Create',
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Cancel',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Create a new bill',
  },
  descriptionTop: {
    id: `${scope}.description.top`,
    defaultMessage:
      'You are currently trying to create a new bill. Creating a new bill is free.',
  },
  currencyRequired: {
    id: `${scope}.currency.required`,
    defaultMessage: 'Currency is required.',
  },
  placeholder: {
    id: `${scope}.select.placeholder`,
    defaultMessage: 'Select currency',
  },
  descriptionBottom: {
    id: `${scope}.description.bottom`,
    defaultMessage: 'Remember that the number of bills you have is limited.',
  },
});
