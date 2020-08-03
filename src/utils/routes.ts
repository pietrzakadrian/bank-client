import i18n from 'i18next';
import { translations } from 'locales/i18n';

export default {
  home: { name: 'Home', path: '/' },
  login: { name: i18n.t(translations.login.title), path: '/login' },
  registration: {
    name: i18n.t(translations.registration.title),
    path: '/registration',
  },
  dashboard: { name: i18n.t(translations.dashboard.title), path: '/dashboard' },
  payment: { name: 'Payment', path: '/payment' },
  history: { name: 'History', path: '/history' },
  settings: { name: 'Settings', path: '/settings' },
  privacy: { name: i18n.t(translations.privacy.title), path: '/privacy' },
  notFound: { name: i18n.t(translations.notFound.title), path: '/404' },
};
