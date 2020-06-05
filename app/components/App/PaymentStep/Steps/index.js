import React from 'react';
import {
  Bill,
  Recipient,
  AmountMoney,
  TransferTitle,
} from 'components/App/PaymentContent';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const steps = [
  {
    title: `Bill`,
    content: <Bill />,
  },
  {
    title: `Recipient`,
    content: <Recipient />,
  },
  {
    title: 'Amount money',
    content: <AmountMoney />,
  },
  {
    title: 'Transfer title',
    content: <TransferTitle />,
  },
  {
    title: 'Confirm data',
    // content: <ConfirmData />,
  },
];

export default steps;
