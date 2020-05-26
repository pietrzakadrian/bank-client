import {
  selectDashboardPageDomain,
  makeSelectAmountMoney,
  makeSelectSavings,
  makeSelectSavingsData,
  makeSelectSavingsColors,
  makeSelectCurrencyName,
  makeSelectBills,
  makeSelectAccountBalanceHistory,
} from 'containers/DashboardPage/selectors';

describe('selectDashboardPageDomain', () => {
  it('should select the home state', () => {
    const dashboardPageState = {
      amountMoney: '',
      currencyName: '',
      savings: '',
      savingsData: [],
      savingsColors: [],
      bills: [],
      accountBalanceHistory: [],
    };
    const mockedState = {
      dashboardPage: dashboardPageState,
    };
    expect(selectDashboardPageDomain(mockedState)).toEqual(dashboardPageState);
  });
});

describe('makeSelectAmountMoney', () => {
  const amountMoneySelector = makeSelectAmountMoney();
  it('should select the pin code', () => {
    const amountMoney = '12';
    const mockedState = {
      dashboardPage: {
        amountMoney,
      },
    };
    expect(amountMoneySelector(mockedState)).toEqual(amountMoney);
  });
});

describe('makeSelectSavings', () => {
  const savingsSelector = makeSelectSavings();
  it('should select the pin code', () => {
    const savings = '12';
    const mockedState = {
      dashboardPage: {
        savings,
      },
    };
    expect(savingsSelector(mockedState)).toEqual(savings);
  });
});

describe('makeSelectSavingsData', () => {
  const savingsDataSelector = makeSelectSavingsData();
  it('should select the pin code', () => {
    const savingsData = [];
    const mockedState = {
      dashboardPage: {
        savingsData,
      },
    };
    expect(savingsDataSelector(mockedState)).toEqual(savingsData);
  });
});

describe('makeSelectSavingsColors', () => {
  const savingsColorsSelector = makeSelectSavingsColors();
  it('should select the pin code', () => {
    const savingsColors = [];
    const mockedState = {
      dashboardPage: {
        savingsColors,
      },
    };
    expect(savingsColorsSelector(mockedState)).toEqual(savingsColors);
  });
});

describe('makeSelectCurrencyName', () => {
  const currencyNameSelector = makeSelectCurrencyName();
  it('should select the pin code', () => {
    const currencyName = 'PLN';
    const mockedState = {
      dashboardPage: {
        currencyName,
      },
    };
    expect(currencyNameSelector(mockedState)).toEqual(currencyName);
  });
});

describe('makeSelectBills', () => {
  const billsSelector = makeSelectBills();
  it('should select the pin code', () => {
    const bills = [];
    const mockedState = {
      dashboardPage: {
        bills,
      },
    };
    expect(billsSelector(mockedState)).toEqual(bills);
  });
});

describe('makeSelectAccountBalanceHistory', () => {
  const accountBalanceHistorySelector = makeSelectAccountBalanceHistory();
  it('should select the pin code', () => {
    const accountBalanceHistory = [];
    const mockedState = {
      dashboardPage: {
        accountBalanceHistory,
      },
    };
    expect(accountBalanceHistorySelector(mockedState)).toEqual(
      accountBalanceHistory,
    );
  });
});
