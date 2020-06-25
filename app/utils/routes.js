import React from 'react';
import registerMessages from 'containers/RegisterPage/messages';
import loginMessages from 'containers/LoginPage/messages';
import dashboardMessages from 'containers/DashboardPage/messages';
import paymentMessages from 'containers/PaymentPage/messages';
import historyMessages from 'containers/HistoryPage/messages';

import { FormattedMessage } from 'react-intl';

export default {
  home: {
    name: 'Home',
    path: '/',
  },
  login: {
    name: <FormattedMessage {...loginMessages.login} />,
    path: '/login',
  },
  register: {
    name: <FormattedMessage {...registerMessages.registration} />,
    path: '/register',
  },
  dashboard: {
    name: <FormattedMessage {...dashboardMessages.dashboard} />,
    path: '/dashboard',
  },
  payment: {
    name: <FormattedMessage {...paymentMessages.payment} />,
    path: '/payment',
  },
  history: {
    name: <FormattedMessage {...historyMessages.history} />,
    path: '/history',
  },
  privacy: {
    name: 'Privacy',
    path: '/privacy',
  },
};
