import React from 'react';
import registerMessages from 'containers/RegisterPage/messages';
import loginMessages from 'containers/LoginPage/messages';
import dashboardMessages from 'containers/DashboardPage/messages';
import paymentMessages from 'containers/PaymentPage/messages';
import historyMessages from 'containers/HistoryPage/messages';
import settingsMessages from 'containers/SettingsPage/messages';
import privacyMessages from 'containers/PrivacyPage/messages';
import forgetPasswordMessages from 'containers/ForgetPasswordPage/messages';
import resetPasswordMessages from 'containers/ResetPasswordPage/messages';

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
  settings: {
    name: <FormattedMessage {...settingsMessages.settings} />,
    path: '/settings',
  },
  privacy: {
    name: <FormattedMessage {...privacyMessages.privacy} />,
    path: '/privacy',
  },
  forgetPassword: {
    name: <FormattedMessage {...forgetPasswordMessages.forgetPassword} />,
    path: '/password/forget',
  },
  resetPassword: {
    name: <FormattedMessage {...resetPasswordMessages.resetPassword} />,
    path: '/password/reset',
  },
  notFound: { name: '404', path: '/404' },
};
