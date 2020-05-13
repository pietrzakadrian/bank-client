import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_CURRENCIES, REGISTER, CHECK_EMAIL } from './constants';
import {
  getCurrenciesSuccessAction,
  getCurrenciesErrorAction,
  registerSuccessAction,
  registerErrorAction,
  checkEmailSuccessAction,
  checkEmailErrorAction,
  checkEmailInvalidAction,
} from './actions';
import makeSelectRegisterPage from './selectors';

export function* getCurrencies() {
  const requestURL = `https://bank2.pietrzakadrian.com/api/currencies`;

  try {
    const { data } = yield call(request, requestURL);
    yield put(getCurrenciesSuccessAction(data));
  } catch (error) {
    yield put(getCurrenciesErrorAction(error));
  }
}

export function* register() {
  const { firstName, lastName, email, password, currency } = yield select(
    makeSelectRegisterPage(),
  );
  const requestURL = `https://bank2.pietrzakadrian.com/api/Auth/register`;
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
  const requestURL = `https://bank2.pietrzakadrian.com/api/Users/${value}/checkEmail`;
  const isEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+(?:[a-z0-9-]*[a-z0-9])?/;

  if (!value) {
    yield call(resolve);
  }

  if (isEmail.test(value)) {
    try {
      yield delay(500);
      const { exist } = yield call(request, requestURL);
      yield put(checkEmailSuccessAction(exist));

      if (exist) {
        yield call(reject, 'E-Mail address already exists.');
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
  yield takeLatest(GET_CURRENCIES, getCurrencies);
  yield takeLatest(REGISTER, register);
  yield takeLatest(CHECK_EMAIL, checkEmail);
}
