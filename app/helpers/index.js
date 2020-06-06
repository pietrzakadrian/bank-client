export const formatBill = (bill) => ({
  ...bill,
  amountMoney: bill.amountMoney?.replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
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
  const matches = /(.*)_(REQUEST|SUCCESS|ERROR)/.exec(actionType);

  if (!matches) return false;

  const [, requestName] = matches;
  return requestName;
};
