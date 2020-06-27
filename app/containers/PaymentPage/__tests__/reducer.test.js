import paymentPageReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('paymentPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
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
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(paymentPageReducer(undefined, {})).toEqual(expectedResult);
  });
});
