import { takeLatest, put } from 'redux-saga/effects';
import registerPageSaga, { getCurrencies, register, checkEmail } from '../saga';
import { GET_CURRENCIES, REGISTER, CHECK_EMAIL } from '../constants';
import {
  getCurrenciesSuccessAction,
  getCurrenciesErrorAction,
} from '../actions';

describe('getCurrencies Saga', () => {
  let getCurrenciesGenerator;

  beforeEach(() => {
    getCurrenciesGenerator = getCurrencies();

    const selectDescriptor = getCurrenciesGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the getCurrenciesSuccess action if it requests the data successfully', () => {
    const response = {
      data: [
        {
          uuid: 'f464c93d-d9cd-4240-9d39-f524d559df83',
          name: 'EUR',
          currentExchangeRate: 0.218981299,
        },
        {
          uuid: '0880acd7-f04b-49d6-8022-ec9b61a722e8',
          name: 'USD',
          currentExchangeRate: 0.2363246179,
        },
        {
          uuid: '0d3c9ec3-4cad-4952-b3d1-53da66faefa5',
          name: 'PLN',
          currentExchangeRate: 1,
        },
      ],
    };
    const putDescriptor = getCurrenciesGenerator.next(response).value;
    expect(putDescriptor).toEqual(
      put(getCurrenciesSuccessAction(response.data)),
    );
  });

  it('should call the getCurrenciesError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getCurrenciesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(getCurrenciesErrorAction(response)));
  });
});

const value = 'adrian@test.com';
const reject = {};
const resolve = {};

describe('checkEmail Saga', () => {
  let checkEmailGenerator;

  beforeEach(() => {
    checkEmailGenerator = checkEmail();

    const selectDescriptor = checkEmailGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = checkEmailGenerator.next({ value, reject, resolve })
      .value;
    expect(callDescriptor).toMatchSnapshot();
  });
});

describe('register Saga', () => {
  let registerGenerator;

  beforeEach(() => {
    registerGenerator = register();

    const selectDescriptor = registerGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = registerGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });
});

describe('registerPageSaga Saga', () => {
  const registerPage = registerPageSaga();

  it('should start task to watch for GET_CURRENCIES action', () => {
    const takeLatestDescriptor = registerPage.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(GET_CURRENCIES, getCurrencies),
    );
  });

  it('should start task to watch for REGISTER action', () => {
    const takeLatestDescriptor = registerPage.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(REGISTER, register));
  });

  it('should start task to watch for CHECK_EMAIL action', () => {
    const takeLatestDescriptor = registerPage.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(CHECK_EMAIL, checkEmail));
  });
});
