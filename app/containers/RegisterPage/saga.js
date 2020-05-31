import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { api, request } from 'utils';
import { emailValidation } from 'helpers';
import {
  GET_CURRENCIES_REQUEST,
  REGISTER_REQUEST,
  CHECK_EMAIL_REQUEST,
} from './constants';
import {
  getCurrenciesSuccessAction,
  getCurrenciesErrorAction,
  registerSuccessAction,
  registerErrorAction,
  checkEmailSuccessAction,
  checkEmailErrorAction,
  checkEmailInvalidAction,
} from './actions';
import {
  makeSelectFirstName,
  makeSelectEmail,
  makeSelectLastName,
  makeSelectPassword,
  makeSelectCurrency,
} from './selectors';

export function* getCurrencies() {
  const requestURL = api.currencies;

  try {
    const { data } = yield call(request, requestURL);
    yield put(getCurrenciesSuccessAction(data));
  } catch (error) {
    yield put(getCurrenciesErrorAction(error));
  }
}

export function* register() {
  const firstName = yield select(makeSelectFirstName());
  const lastName = yield select(makeSelectLastName());
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const currency = yield select(makeSelectCurrency());

  const requestURL = api.auth.register;
  const requestParameters = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, email, password, currency }),
  };

  try {
    const {
      userAuth: { pinCode },
    } = yield call(request, requestURL, requestParameters);
    yield put(registerSuccessAction(pinCode));
  } catch (error) {
    yield put(registerErrorAction(error));
  }
}

export function* checkEmail({ value, reject, resolve }) {
  const requestURL = api.users('checkEmail')(value);

  if (!value) {
    yield call(resolve);
  }

  if (emailValidation(value)) {
    try {
      yield delay(400);
      const { exist } = yield call(request, requestURL);
      yield put(checkEmailSuccessAction(exist));

      if (exist) {
        yield call(reject);
      } else {
        yield call(resolve);
      }
    } catch (error) {
      yield put(checkEmailErrorAction(error));
    }
  } else {
    yield put(checkEmailInvalidAction());
    yield call(resolve);
  }
}

export default function* registerPageSaga() {
  yield takeLatest(GET_CURRENCIES_REQUEST, getCurrencies);
  yield takeLatest(REGISTER_REQUEST, register);
  yield takeLatest(CHECK_EMAIL_REQUEST, checkEmail);
}
