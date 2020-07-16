/*
 * TransactionHistory Messages
 *
 * This contains all the text for the TransactionHistory component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.TransactionHistory';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the TransactionHistory component!',
  },
  sender: {
    id: `${scope}.sender`,
    defaultMessage: 'Sender',
  },
  recipient: {
    id: `${scope}.recipient`,
    defaultMessage: 'Recipient',
  },
  date: {
    id: `${scope}.date`,
    defaultMessage: 'Date',
  },
  amountMoney: {
    id: `${scope}.amountMoney`,
    defaultMessage: 'Amount Money',
  },
  transferTitle: {
    id: `${scope}.transferTitle`,
    defaultMessage: 'Transfer Title',
  },
  confirmation: {
    id: `${scope}.confirmation`,
    defaultMessage: 'Confirmation',
  },
  downloadPdf: {
    id: `${scope}.download.pdf`,
    defaultMessage: 'Download PDF',
  },
});
