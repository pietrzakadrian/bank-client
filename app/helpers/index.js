export const formatBill = (bill) => ({
  ...bill,
  amountMoney: bill.amountMoney.replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
  accountBillNumber: bill.accountBillNumber
    .replace(/(^\d{2}|\d{4})+?/g, '$1 ')
    .trim(),
});

export const nameValidation = (name) => {
  const isName = /^[a-z ,.'-]+$/i;
  return isName.test(name);
};
