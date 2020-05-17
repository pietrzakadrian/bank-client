import React from 'react';
import {
  EmailAddress,
  Currency,
  Password,
  LastName,
  FirstName,
} from 'components/RegisterContent';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const steps = [
  {
    title: <FormattedMessage {...messages.firstName} />,
    content: <FirstName />,
  },
  {
    title: <FormattedMessage {...messages.lastName} />,
    content: <LastName />,
  },
  {
    title: <FormattedMessage {...messages.password} />,
    content: <Password />,
  },
  {
    title: <FormattedMessage {...messages.currency} />,
    content: <Currency />,
  },
  {
    title: <FormattedMessage {...messages.email} />,
    content: <EmailAddress />,
  },
];

export default steps;
