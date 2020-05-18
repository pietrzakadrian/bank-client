import {
  selectLoginPageDomain,
  makeSelectPinCode,
  makeSelectPassword,
  makeSelectCurrentStep,
} from 'containers/LoginPage/selectors';

describe('selectLoginPageDomain', () => {
  it('should select the home state', () => {
    const loginPageState = {
      pinCode: '',
      password: '',
      currentStep: 0,
    };
    const mockedState = {
      loginPage: loginPageState,
    };
    expect(selectLoginPageDomain(mockedState)).toEqual(loginPageState);
  });
});

describe('makeSelectPinCode', () => {
  const pinCodeSelector = makeSelectPinCode();
  it('should select the pin code', () => {
    const pinCode = 12313;
    const mockedState = {
      loginPage: {
        pinCode,
      },
    };
    expect(pinCodeSelector(mockedState)).toEqual(pinCode);
  });
});

describe('makeSelectPassword', () => {
  const passwordSelector = makeSelectPassword();
  it('should select the pin code', () => {
    const password = 12313;
    const mockedState = {
      loginPage: {
        password,
      },
    };
    expect(passwordSelector(mockedState)).toEqual(password);
  });
});

describe('makeSelectCurrentStep', () => {
  const currentStepSelector = makeSelectCurrentStep();
  it('should select the current step', () => {
    const currentStep = 0;
    const mockedState = {
      loginPage: {
        currentStep,
      },
    };
    expect(currentStepSelector(mockedState)).toEqual(currentStep);
  });
});
