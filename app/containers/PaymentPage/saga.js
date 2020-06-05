import { takeLatest, call, put, select } from 'redux-saga/effects';
import { api, request, routes } from 'utils';
import { push } from 'connected-react-router';
import { makeSelectToken } from 'containers/App/selectors';
import { GET_BILLS_REQUEST, SEARCH_RECIPIENT_REQUEST } from './constants';
import {
  getBillsSuccessAction,
  getBillsErrorAction,
  searchRecipientSuccessAction,
  searchRecipientErrorAction,
} from './actions';

export function* getBills() {
  const { accessToken } = yield select(makeSelectToken());
  const requestURL = api.bills();
  const requestParameters = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const { data } = yield call(request, requestURL, requestParameters);
    yield put(getBillsSuccessAction(data));
  } catch (error) {
    yield put(getBillsErrorAction(error));

    switch (error.statusCode) {
      case 401:
        yield put(push(routes.login.path));
        break;
      default:
        yield put(push(routes.login.path));
        break;
    }
  }
}

export function* searchRecipient({ value }) {
  const { accessToken } = yield select(makeSelectToken());
  const requestURL = api.bills('search')(value);
  const requestParameters = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const { data } = yield call(request, requestURL, requestParameters);
    yield put(searchRecipientSuccessAction(data));
  } catch (error) {
    yield put(searchRecipientErrorAction(error));

    switch (error.statusCode) {
      case 401:
        yield put(push(routes.login.path));
        break;
      default:
        yield put(push(routes.login.path));
        break;
    }
  }
}

export default function* paymentPageSaga() {
  yield takeLatest(GET_BILLS_REQUEST, getBills);
  yield takeLatest(SEARCH_RECIPIENT_REQUEST, searchRecipient);
}
