import { takeLatest, select, put, call } from 'redux-saga/effects';
import { api, request, routes } from 'utils';
import {
  makeSelectToken,
  makeSelectIsCollapsedSidebar,
} from 'containers/App/selectors';
import { push } from 'connected-react-router';
import { notification } from 'antd';

import { GET_USER_DATA_REQUEST, SET_USER_DATA_REQUEST } from './constants';
import {
  getUserDataSuccessAction,
  getUserDataErrorAction,
  setUserDataSuccessAction,
  setUserDataIncorrectAction,
} from './actions';
import { makeSelectNewData } from './selectors';

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

export function* setUserData({ snippets }) {
  const { accessToken } = yield select(makeSelectToken());
  const newData = yield select(makeSelectNewData());
  const isCollapsedSidebar = yield select(makeSelectIsCollapsedSidebar());

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
  const style = { width: 400, marginLeft: isCollapsedSidebar ? 80 : 250 };
  const placement = 'bottomLeft';

  try {
    const userData = yield call(request, requestURL, requestParameters);
    yield put(setUserDataSuccessAction(userData));

    notification.success({
      message: snippets.success.title,
      description: snippets.success.description,
      style,
      placement,
    });
  } catch (error) {
    yield put(setUserDataIncorrectAction(error));
  }
}

export default function* settingsPageSaga() {
  yield takeLatest(GET_USER_DATA_REQUEST, getUserData);
  yield takeLatest(SET_USER_DATA_REQUEST, setUserData);
}
