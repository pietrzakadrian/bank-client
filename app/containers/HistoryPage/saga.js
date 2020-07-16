import { takeLatest, call, put, select } from 'redux-saga/effects';
import { makeSelectToken } from 'containers/App/selectors';
import { api, request, routes } from 'utils';
import { push } from 'connected-react-router';
import { saveAs } from 'file-saver';
import { makeSelectLocale } from 'providers/LanguageProvider/selectors';
import {
  GET_TRANSACTION_HISTORY_REQUEST,
  GET_CONFIRMATION_FILE_REQUEST,
} from './constants';
import {
  getTransactionHistorySuccessAction,
  getTransactionHistoryErrorAction,
  getConfirmationFileSuccessAction,
  getConfirmationFileErrorAction,
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

export function* getConfirmationFile({ uuid }) {
  const locale = yield select(makeSelectLocale());
  const { accessToken } = yield select(makeSelectToken());
  const requestURL = `${api.transactions('confirmationFile')(uuid, locale)}`;
  const requestParameters = {
    responseType: 'blob',
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const response = yield call(request, requestURL, requestParameters, false);
    const pdfBlob = new Blob([response], { type: 'application/pdf' });
    saveAs(pdfBlob, `${uuid}.pdf`);

    yield put(getConfirmationFileSuccessAction());
  } catch (error) {
    yield put(getConfirmationFileErrorAction(error));
    yield put(push(routes.login.path));
  }
}

export default function* historyPageSaga() {
  yield takeLatest(GET_TRANSACTION_HISTORY_REQUEST, getTransactionHistory);
  yield takeLatest(GET_CONFIRMATION_FILE_REQUEST, getConfirmationFile);
}
