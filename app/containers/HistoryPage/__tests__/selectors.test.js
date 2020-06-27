import {
  selectHistoryPageDomain,
  makeSelectTransactions,
} from 'containers/HistoryPage/selectors';

describe('selectHistoryPageDomain', () => {
  it('should select the home state', () => {
    const historyPageState = {
      transations: [],
    };
    const mockedState = {
      historyPage: historyPageState,
    };
    expect(selectHistoryPageDomain(mockedState)).toEqual(historyPageState);
  });
});

describe('makeSelectTransactions', () => {
  const transactionsSelector = makeSelectTransactions();
  it('should select the pin code', () => {
    const transactions = ['transactions'];
    const mockedState = {
      historyPage: {
        transactions,
      },
    };
    expect(transactionsSelector(mockedState)).toEqual(transactions);
  });
});
