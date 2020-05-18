import {
  makeSelectFirstName,
  makeSelectLastName,
  makeSelectPassword,
  makeSelectCurrency,
  makeSelectEmail,
  makeSelectIsLoading,
  makeSelectPinCode,
  makeSelectCurrencies,
  makeSelectError,
  makeSelectCurrentStep,
  selectRegisterPageDomain,
} from '../selectors';

describe('selectRegisterPageDomain', () => {
  it('should select the home state', () => {
    const registerPageState = {
      firstName: '',
      lastName: '',
      currency: '',
      email: '',
      password: '',
      pinCode: '',
      currencies: [],
      currentStep: 0,
    };
    const mockedState = {
      registerPage: registerPageState,
    };
    expect(selectRegisterPageDomain(mockedState)).toEqual(registerPageState);
  });
});

describe('makeSelectFirstName', () => {
  const firstNameSelector = makeSelectFirstName();
  it('should select the firstname', () => {
    const firstName = 'mxstbr';
    const mockedState = {
      registerPage: {
        firstName,
      },
    };
    expect(firstNameSelector(mockedState)).toEqual(firstName);
  });
});

describe('makeSelectLastName', () => {
  const lastNameSelector = makeSelectLastName();
  it('should select the lastname', () => {
    const lastName = 'mxstbr';
    const mockedState = {
      registerPage: {
        lastName,
      },
    };
    expect(lastNameSelector(mockedState)).toEqual(lastName);
  });
});

describe('makeSelectPassword', () => {
  const passwordSelector = makeSelectPassword();
  it('should select the password', () => {
    const password = '1234567';
    const mockedState = {
      registerPage: {
        password,
      },
    };
    expect(passwordSelector(mockedState)).toEqual(password);
  });
});

describe('makeSelectCurrency', () => {
  const currencySelector = makeSelectCurrency();
  it('should select the currency', () => {
    const currency = '1234567';
    const mockedState = {
      registerPage: {
        currency,
      },
    };
    expect(currencySelector(mockedState)).toEqual(currency);
  });
});

describe('makeSelectEmail', () => {
  const emailSelector = makeSelectEmail();
  it('should select the email', () => {
    const email = 'dada@o2.com';
    const mockedState = {
      registerPage: {
        email,
      },
    };
    expect(emailSelector(mockedState)).toEqual(email);
  });
});

describe('makeSelectIsLoading', () => {
  const isLoadingSelector = makeSelectIsLoading();
  it('should select the isLoading', () => {
    const isLoading = true;
    const mockedState = {
      registerPage: {
        isLoading,
      },
    };
    expect(isLoadingSelector(mockedState)).toEqual(isLoading);
  });
});

describe('makeSelectPinCode', () => {
  const pinCodeSelector = makeSelectPinCode();
  it('should select the password', () => {
    const pinCode = 12313;
    const mockedState = {
      registerPage: {
        pinCode,
      },
    };
    expect(pinCodeSelector(mockedState)).toEqual(pinCode);
  });
});

describe('makeSelectCurrencies', () => {
  const currenciesSelector = makeSelectCurrencies();
  it('should select the currencies', () => {
    const currencies = [{ name: 'USD' }];
    const mockedState = {
      registerPage: {
        currencies,
      },
    };
    expect(currenciesSelector(mockedState)).toEqual(currencies);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 'err';
    const mockedState = {
      registerPage: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectCurrentStep', () => {
  const currentStepSelector = makeSelectCurrentStep();
  it('should select the current step', () => {
    const currentStep = 0;
    const mockedState = {
      registerPage: {
        currentStep,
      },
    };
    expect(currentStepSelector(mockedState)).toEqual(currentStep);
  });
});
