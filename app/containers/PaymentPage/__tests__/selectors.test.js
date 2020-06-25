import {
  selectPaymentPageDomain,
  makeSelectBills,
  makeSelectRecipients,
  makeSelectSenderBill,
  makeSelectRecipientBill,
  makeSelectAmountMoney,
  makeSelectTransferTitle,
  makeSelectAuthorizationKey,
  makeSelectCurrentStep,
  makeSelectHasCreatedTransaction,
  makeSelectHasConfirmedTransaction,
  makeSelectTransaction,
} from 'containers/PaymentPage/selectors';

describe('selectPaymentPageDomain', () => {
  it('should select the paymeny state', () => {
    const paymentPageState = {
      transaction: '',
      bills: [],
      recipients: [],
      senderBill: {},
      recipientBill: {},
      amountMoney: '',
      transferTitle: '',
      authorizationKey: '',
      currentStep: 0,
      hasCreatedTransaction: false,
      hasConfirmedTransaction: false,
    };
    const mockedState = {
      paymentPage: paymentPageState,
    };
    expect(selectPaymentPageDomain(mockedState)).toEqual(paymentPageState);
  });
});

describe('makeSelectBills', () => {
  const billsSelector = makeSelectBills();
  it('should select the bills', () => {
    const bills = [{ test: 'lol' }];
    const mockedState = {
      paymentPage: {
        bills,
      },
    };
    expect(billsSelector(mockedState)).toEqual(bills);
  });
});

describe('makeSelectRecipients', () => {
  const recipientsSelector = makeSelectRecipients();
  it('should select the recipients', () => {
    const recipients = [{ test: 'lol' }];
    const mockedState = {
      paymentPage: {
        recipients,
      },
    };
    expect(recipientsSelector(mockedState)).toEqual(recipients);
  });
});

describe('makeSelectRecipients', () => {
  const recipientsSelector = makeSelectRecipients();
  it('should select the bill', () => {
    const recipients = [{ test: 'lol' }];
    const mockedState = {
      paymentPage: {
        recipients,
      },
    };
    expect(recipientsSelector(mockedState)).toEqual(recipients);
  });
});

describe('makeSelectSenderBill', () => {
  const senderBillSelector = makeSelectSenderBill();
  it('should select the senderBill', () => {
    const senderBill = [{ test: 'lol' }];
    const mockedState = {
      paymentPage: {
        senderBill,
      },
    };
    expect(senderBillSelector(mockedState)).toEqual(senderBill);
  });
});

describe('makeSelectRecipientBill', () => {
  const recipientBillSelector = makeSelectRecipientBill();
  it('should select the recipientBill', () => {
    const recipientBill = [{ test: 'lol' }];
    const mockedState = {
      paymentPage: {
        recipientBill,
      },
    };
    expect(recipientBillSelector(mockedState)).toEqual(recipientBill);
  });
});

describe('makeSelectAmountMoney', () => {
  const amountMoneySelector = makeSelectAmountMoney();
  it('should select the amountMoney', () => {
    const amountMoney = 'test';
    const mockedState = {
      paymentPage: {
        amountMoney,
      },
    };
    expect(amountMoneySelector(mockedState)).toEqual(amountMoney);
  });
});

describe('makeSelectTransferTitle', () => {
  const transferTitleSelector = makeSelectTransferTitle();
  it('should select the transferTitle', () => {
    const transferTitle = 'test';
    const mockedState = {
      paymentPage: {
        transferTitle,
      },
    };
    expect(transferTitleSelector(mockedState)).toEqual(transferTitle);
  });
});

describe('makeSelectAuthorizationKey', () => {
  const authorizationKeySelector = makeSelectAuthorizationKey();
  it('should select the authorizationKey', () => {
    const authorizationKey = 'test';
    const mockedState = {
      paymentPage: {
        authorizationKey,
      },
    };
    expect(authorizationKeySelector(mockedState)).toEqual(authorizationKey);
  });
});

describe('makeSelectCurrentStep', () => {
  const currentStepSelector = makeSelectCurrentStep();
  it('should select the currentStep', () => {
    const currentStep = 1;
    const mockedState = {
      paymentPage: {
        currentStep,
      },
    };
    expect(currentStepSelector(mockedState)).toEqual(currentStep);
  });
});

describe('makeSelectHasCreatedTransaction', () => {
  const hasCreatedTransactionSelector = makeSelectHasCreatedTransaction();
  it('should select the hasCreatedTransaction', () => {
    const hasCreatedTransaction = true;
    const mockedState = {
      paymentPage: {
        hasCreatedTransaction,
      },
    };
    expect(hasCreatedTransactionSelector(mockedState)).toEqual(
      hasCreatedTransaction,
    );
  });
});

describe('makeSelectHasConfirmedTransaction', () => {
  const hasConfirmedTransactionSelector = makeSelectHasConfirmedTransaction();
  it('should select the hasConfirmedTransaction', () => {
    const hasConfirmedTransaction = true;
    const mockedState = {
      paymentPage: {
        hasConfirmedTransaction,
      },
    };
    expect(hasConfirmedTransactionSelector(mockedState)).toEqual(
      hasConfirmedTransaction,
    );
  });
});

describe('makeSelectTransaction', () => {
  const transactionSelector = makeSelectTransaction();
  it('should select the transaction', () => {
    const transaction = 'elo';
    const mockedState = {
      paymentPage: {
        transaction,
      },
    };
    expect(transactionSelector(mockedState)).toEqual(transaction);
  });
});
