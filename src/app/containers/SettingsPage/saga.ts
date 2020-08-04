import { call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { selectApp } from '../App/selectors';
import { selectSettingsPage } from './selectors';
import api from 'utils/api';
import { request } from 'utils/request';
import { notification } from 'antd';

export function* setUserData() {
  const { token, isCollapsedSidebar } = yield select(selectApp);
  const { newData } = yield select(selectSettingsPage);

  const requestURL = api.users();
  const requestParameters = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.accessToken}`,
    },
    body: JSON.stringify(newData),
  };
  const style = { width: 400, marginLeft: isCollapsedSidebar ? 80 : 250 };
  const placement = 'bottomLeft';

  try {
    const userData = yield call(request, requestURL, requestParameters);
    yield put(actions.setUserDataSuccessAction(userData));

    notification.success({
      message: 'test',
      description: 'test2',
      style,
      placement,
    });
  } catch (error) {
    yield put(actions.setUserDataErrorAction(error));
  }
}

export function* settingsPageSaga() {
  yield takeLatest(actions.setUserDataRequestAction.type, setUserData);
}
