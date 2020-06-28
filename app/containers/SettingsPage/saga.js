import { takeLatest, select, put, call } from 'redux-saga/effects';
import { api, request, routes } from 'utils';
import { makeSelectToken } from 'containers/App/selectors';
import { push } from 'connected-react-router';
import { GET_USER_DATA_REQUEST, SET_USER_DATA_REQUEST } from './constants';
import {
  getUserDataSuccessAction,
  getUserDataErrorAction,
  setUserDataSuccessAction,
} from './actions';
import { makeSelectUser } from './selectors';

export function* getUserData() {
  const { accessToken } = yield select(makeSelectToken());
  const requestURL = api.users();
  const requestParameters = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const userData = yield call(request, requestURL, requestParameters);
    yield put(getUserDataSuccessAction(userData));
  } catch (error) {
    yield put(getUserDataErrorAction(error));
    yield put(push(routes.login.path));
  }
}

export function* setUserData() {
  const { accessToken } = yield select(makeSelectToken());
  const newData = yield select(makeSelectUser());
  const requestURL = api.users();
  const requestParameters = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(newData),
  };

  try {
    const userData = yield call(request, requestURL, requestParameters);
    yield put(setUserDataSuccessAction(userData));
  } catch (error) {
    // yield setUserDataErrorAction(error);
  }
}

export default function* settingsPageSaga() {
  yield takeLatest(GET_USER_DATA_REQUEST, getUserData);
  yield takeLatest(SET_USER_DATA_REQUEST, setUserData);
}
