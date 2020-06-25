import { takeLatest, call, put, select } from 'redux-saga/effects';
import { makeSelectToken } from 'containers/App/selectors';
import { api, request, routes } from 'utils';
import { push } from 'connected-react-router';
import { GET_TRANSACTION_HISTORY_REQUEST } from './constants';
import {
  getTransactionHistorySuccessAction,
  getTransactionHistoryErrorAction,
} from './actions';

export function* getTransactionHistory({ currentPage }) {
  const { accessToken } = yield select(makeSelectToken());
  const requestURL = `${api.transactions()}?page=${currentPage}&order=DESC`;
  const requestParameters = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const transactions = yield call(request, requestURL, requestParameters);
    yield put(getTransactionHistorySuccessAction(transactions));
  } catch (error) {
    yield put(getTransactionHistoryErrorAction(error));
    yield put(push(routes.login.path));
  }
}

export default function* historyPageSaga() {
  yield takeLatest(GET_TRANSACTION_HISTORY_REQUEST, getTransactionHistory);
}
