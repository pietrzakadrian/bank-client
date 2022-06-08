const API_BASE_URL = 'http:///localhost:4000/bank';
const AUTH = 'Auth';
const USERS = 'Users';
const CURRENCIES = 'Currencies';
const BILLS = 'Bills';
const TRANSACTIONS = 'Transactions';
const MESSAGES = 'Messages';
const NOTIFICATIONS = 'Notifications';

export default {
  auth: {
    login: `${API_BASE_URL}/${AUTH}/login`,
    register: `${API_BASE_URL}/${AUTH}/register`,
    logout: `${API_BASE_URL}/${AUTH}/logout`,
    forgetPassword: `${API_BASE_URL}/${AUTH}/password/forget`,
    resetPassword: `${API_BASE_URL}/${AUTH}/password/reset`,
  },
  users: (path = '') => {
    switch (path) {
      case 'checkEmail':
        return (email) => `${API_BASE_URL}/${USERS}/${email}/checkEmail`;
      default:
        return `${API_BASE_URL}/${USERS}`;
    }
  },
  currencies: `${API_BASE_URL}/${CURRENCIES}`,
  messages: `${API_BASE_URL}/${MESSAGES}`,
  notifications: `${API_BASE_URL}/${NOTIFICATIONS}`,
  bills: (path = '') => {
    switch (path) {
      case 'amountMoney':
        return `${API_BASE_URL}/${BILLS}/amountMoney`;
      case 'accountBalance':
        return `${API_BASE_URL}/${BILLS}/accountBalance`;
      case 'accountBalanceHistory':
        return `${API_BASE_URL}/${BILLS}/accountBalanceHistory`;
      case 'search':
        return (accountBillNumber) =>
          `${API_BASE_URL}/${BILLS}/${accountBillNumber}/search`;
      default:
        return `${API_BASE_URL}/${BILLS}`;
    }
  },
  transactions: (path = '') => {
    switch (path) {
      case 'create':
        return `${API_BASE_URL}/${TRANSACTIONS}/create`;
      case 'confirm':
        return `${API_BASE_URL}/${TRANSACTIONS}/confirm`;
      case 'authorizationKey':
        return (uuid) =>
          `${API_BASE_URL}/${TRANSACTIONS}/${uuid}/authorizationKey`;
      case 'confirmationFile':
        return (uuid, locale) =>
          `${API_BASE_URL}/${TRANSACTIONS}/${uuid}/${locale}/confirmationFile`;
      default:
        return `${API_BASE_URL}/${TRANSACTIONS}`;
    }
  },
};
