export const formatBill = (bill) => ({
  ...bill,
  amountMoney: bill.amountMoney?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  }),
  accountBillNumber: bill.accountBillNumber
    .replace(/(^\d{2}|\d{4})+?/g, '$1 ')
    .trim(),
});

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

export const dateFormat = (type = '') => {
  switch (type) {
    case 12: {
      return `dd.MM.yyyy, hh:mm aa`;
    }
    case 24: {
      return `dd.MM.yyyy, HH:mm`;
    }
    default:
      return `dd.MM.yyyy`;
  }
};

export const hasOwnProperties = (inputObject, properties) => {
  if (properties.some(inputObject.hasOwnProperty, inputObject)) {
    return true;
  }

  return false;
};
