export const API_BASE_URL = 'https://bank2.pietrzakadrian.com/api';
export const AUTH = '/Auth';
export const USERS = '/Users';
export const CURRENCIES = '/Currencies';
export const BILLS = '/Bills';
export const TRANSACTIONS = '/Transactions';

export default {
  auth: {
    login: `${API_BASE_URL}${AUTH}/login`,
    register: `${API_BASE_URL}${AUTH}/register`,
    logout: `${API_BASE_URL}${AUTH}/logout`,
  },
  users: {
    users: `${API_BASE_URL}${USERS}`,
    checkEmail: (email) => `${API_BASE_URL}${USERS}/${email}/checkEmail`,
    notifications: `${API_BASE_URL}${USERS}/notifications`,
    messages: `${API_BASE_URL}${USERS}/messages`,
  },
  currencies: `${API_BASE_URL}${CURRENCIES}`,
  bills: {
    bills: `${API_BASE_URL}${BILLS}`,
    amountMoney: `${API_BASE_URL}${BILLS}/amountMoney`,
    accountBalance: `${API_BASE_URL}${BILLS}/accountBalance`,
    accountBalanceHistory: `${API_BASE_URL}${BILLS}/accountBalanceHistory`,
    search: (accountBillNumber) =>
      `${API_BASE_URL}${BILLS}/${accountBillNumber}/search`,
  },
  transactions: {
    create: `${API_BASE_URL}${TRANSACTIONS}/create`,
    confirm: `${API_BASE_URL}${TRANSACTIONS}/confirm`,
    authorizationKey: (uuid) =>
      `${API_BASE_URL}${TRANSACTIONS}/${uuid}/authorizationKey`,
  },
};
