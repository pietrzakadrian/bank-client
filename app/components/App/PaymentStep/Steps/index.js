import React from 'react';
import {
  Bill,
  Recipient,
  AmountMoney,
  TransferTitle,
  Confirm,
} from 'components/App/PaymentContent';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const steps = [
  {
    id: 1,
    title: <FormattedMessage {...messages.bill} />,
    content: <Bill />,
  },
  {
    id: 2,
    title: <FormattedMessage {...messages.recipient} />,
    content: <Recipient />,
  },
  {
    id: 3,
    title: <FormattedMessage {...messages.amountMoney} />,
    content: <AmountMoney />,
  },
  {
    id: 4,
    title: <FormattedMessage {...messages.transferTitle} />,
    content: <TransferTitle />,
  },
  {
    id: 5,
    title: <FormattedMessage {...messages.confirmData} />,
    content: <Confirm />,
  },
];

export default steps;
