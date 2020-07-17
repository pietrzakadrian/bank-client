/* eslint-disable consistent-return */
export const formatBill = (bill) => ({
  ...bill,
  amountMoney: bill.amountMoney?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  }),
  accountBillNumber: bill.accountBillNumber
    .replace(/(^\d{2}|\d{4})+?/g, '$1 ')
    .trim(),
});

export const numberValidation = (value) => {
  const isNumber = /^[0-9]*$/;
  return isNumber.test(value);
};

export const nameValidation = (name) => {
  const isName = /^[a-z ,.'-]+$/i;
  return isName.test(name);
};

export const emailValidation = (email) => {
  const isEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+(?:[a-z0-9-]*[a-z0-9])?/;
  return isEmail.test(email);
};

export const getRequestName = (actionType) => {
  const matches = /(.*)_(REQUEST|SUCCESS|ERROR|INCORRECT)/.exec(actionType);

  if (!matches) return false;

  const [, requestName] = matches;
  return requestName;
};

export const hasOwnProperties = (inputObject, properties) => {
  if (properties.some(inputObject.hasOwnProperty, inputObject)) {
    return true;
  }

  return false;
};

export const truncateString = (string, maxLength = 190) => {
  if (!string) return null;
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength)}...`;
};

export const disabledSpacesInput = (event) => {
  if (event.which === 32) {
    event.preventDefault();
    return false;
  }
};

export const getAlertCount = (user) => {
  if (+user?.userConfig?.notificationCount + +user?.userConfig?.messageCount) {
    return `(${
      +user?.userConfig?.notificationCount + +user?.userConfig?.messageCount
    })`;
  }

  return '';
};
