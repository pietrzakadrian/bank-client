import { takeLatest, call, put, select } from 'redux-saga/effects';
import { makeSelectToken } from 'containers/App/selectors';
import { api, request, routes } from 'utils';
import { push } from 'connected-react-router';
import { GET_TRANSFER_HISTORY_REQUEST } from './constants';
import {
  getTransferHistorySuccessAction,
  getTransferHistoryErrorAction,
} from './actions';

export function* getTransferHistory() {
  const { accessToken } = yield select(makeSelectToken());
  const requestURL = api.bills('transactions');
  const requestParameters = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const { data } = yield call(request, requestURL, requestParameters);
    yield put(getTransferHistorySuccessAction(data));
  } catch (error) {
    yield put(getTransferHistoryErrorAction(error));
    yield put(push(routes.login.path));
  }
}

export default function* historyPageSaga() {
  yield takeLatest(GET_TRANSFER_HISTORY_REQUEST, getTransferHistory);
}
