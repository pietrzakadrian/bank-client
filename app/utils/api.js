const API_BASE_URL = 'https://bank2.pietrzakadrian.com/api';
const AUTH = 'Auth';
const USERS = 'Users';
const CURRENCIES = 'Currencies';
const BILLS = 'Bills';
const TRANSACTIONS = 'Transactions';

export default {
  auth: {
    login: `${API_BASE_URL}/${AUTH}/login`,
    register: `${API_BASE_URL}/${AUTH}/register`,
    logout: `${API_BASE_URL}/${AUTH}/logout`,
  },
  users: (path = '') => {
    switch (path) {
      case 'messages':
        return `${API_BASE_URL}/${USERS}/messages`;
      case 'notifications':
        return `${API_BASE_URL}/${USERS}/notifications`;
      case 'checkEmail':
        return (email) => `${API_BASE_URL}/${USERS}/${email}/checkEmail`;
      default:
        return `${API_BASE_URL}/${USERS}`;
    }
  },
  currencies: `${API_BASE_URL}/${CURRENCIES}`,
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
      default:
        return `${API_BASE_URL}/${TRANSACTIONS}`;
    }
  },

  // transactions: {
  //   create: `${API_BASE_URL}/${TRANSACTIONS}/create`,
  //   confirm: `${API_BASE_URL}/${TRANSACTIONS}/confirm`,
  //   authorizationKey: (uuid) =>
  //     `${API_BASE_URL}/${TRANSACTIONS}/${uuid}/authorizationKey`,
  // },
  // users: {
  //   checkEmail: (email) => `${API_BASE_URL}${USERS}/${email}/checkEmail`,
  //   notifications: `${API_BASE_URL}${USERS}/notifications`,
  //   messages: `${API_BASE_URL}${USERS}/messages`,
  // },
  // bills: {
  //   amountMoney: `${API_BASE_URL}/${BILLS}/amountMoney`,
  //   accountBalance: `${API_BASE_URL}/${BILLS}/accountBalance`,
  //   accountBalanceHistory: `${API_BASE_URL}/${BILLS}/accountBalanceHistory`,
  //   search: (accountBillNumber) =>
  //     `${API_BASE_URL}/${BILLS}/${accountBillNumber}/search`,
  // },
};
