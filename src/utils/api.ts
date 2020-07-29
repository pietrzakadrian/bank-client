const API_BASE_URL = 'https://api.pietrzakadrian.com/bank';
const AUTH = 'Auth';
const USERS = 'Users';
const CURRENCIES = 'Currencies';
const BILLS = 'Bills';
const TRANSACTIONS = 'Transactions';
const MESSAGES = 'Messages';
const NOTIFICATIONS = 'Notifications';

export enum EndpointNames {
  'checkEmail' = 'checkEmail',
  'amountMoney' = 'amountMoney',
  'accountBalance' = 'accountBalance',
  'accountBalanceHistory' = 'accountBalanceHistory',
  'search' = 'search',
  'create' = 'create',
  'confirm' = 'confirm',
  'authorizationKey' = 'authorizationKey',
  'confirmationFile' = 'confirmationFile',
}

export default {
  auth: {
    login: `${API_BASE_URL}/${AUTH}/login`,
    register: `${API_BASE_URL}/${AUTH}/register`,
    logout: `${API_BASE_URL}/${AUTH}/logout`,
  },
  users: (path = '') => {
    switch (path) {
      case EndpointNames.checkEmail:
        return email => `${API_BASE_URL}/${USERS}/${email}/checkEmail`;
      default:
        return `${API_BASE_URL}/${USERS}`;
    }
  },
  currencies: `${API_BASE_URL}/${CURRENCIES}`,
  messages: `${API_BASE_URL}/${MESSAGES}`,
  notifications: `${API_BASE_URL}/${NOTIFICATIONS}`,
  bills: (path = '') => {
    switch (path) {
      case EndpointNames.amountMoney:
        return `${API_BASE_URL}/${BILLS}/amountMoney`;
      case EndpointNames.accountBalance:
        return `${API_BASE_URL}/${BILLS}/accountBalance`;
      case EndpointNames.accountBalanceHistory:
        return `${API_BASE_URL}/${BILLS}/accountBalanceHistory`;
      case EndpointNames.search:
        return accountBillNumber =>
          `${API_BASE_URL}/${BILLS}/${accountBillNumber}/search`;
      default:
        return `${API_BASE_URL}/${BILLS}`;
    }
  },
  transactions: (path = '') => {
    switch (path) {
      case EndpointNames.create:
        return `${API_BASE_URL}/${TRANSACTIONS}/create`;
      case EndpointNames.confirm:
        return `${API_BASE_URL}/${TRANSACTIONS}/confirm`;
      case EndpointNames.authorizationKey:
        return uuid =>
          `${API_BASE_URL}/${TRANSACTIONS}/${uuid}/authorizationKey`;
      case EndpointNames.confirmationFile:
        return (uuid, locale) =>
          `${API_BASE_URL}/${TRANSACTIONS}/${uuid}/${locale}/confirmationFile`;
      default:
        return `${API_BASE_URL}/${TRANSACTIONS}`;
    }
  },
};
