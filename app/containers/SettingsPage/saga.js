import { takeLatest, select, put, call } from 'redux-saga/effects';
import { api, request, routes } from 'utils';
import { makeSelectToken } from 'containers/App/selectors';
import { push } from 'connected-react-router';
import { GET_USER_DATA_REQUEST } from './constants';
import { getUserDataSuccessAction, getUserDataErrorAction } from './actions';

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

export default function* settingsPageSaga() {
  yield takeLatest(GET_USER_DATA_REQUEST, getUserData);
}
