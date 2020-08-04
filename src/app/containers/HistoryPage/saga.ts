import { call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import api, { EndpointNames } from 'utils/api';
import { request } from 'utils/request';
import { selectApp } from '../App/selectors';
import { selectLanguage } from 'app/providers/LanguageProvider/selectors';
import { saveAs } from 'file-saver';

export function* getTransactionHistory({
  payload,
}: ReturnType<typeof actions.getTransactionHistoryRequestAction>) {
  const { token } = yield select(selectApp);
  const requestURL = `${api.transactions()}?page=${
    payload.currentPage
  }&order=DESC`;
  const requestParameters = {
    headers: { Authorization: `Bearer ${token.accessToken}` },
  };

  try {
    const transactions = yield call(request, requestURL, requestParameters);
    yield put(actions.getTransactionHistorySuccessAction(transactions));
  } catch (error) {
    yield put(actions.getTransactionHistoryErrorAction(error));
  }
}

export function* getConfirmationFile({
  payload,
}: ReturnType<typeof actions.getConfirmationFileRequestAction>) {
  const { locale } = yield select(selectLanguage);
  const { token } = yield select(selectApp);
  const requestURL = api.transactions(
    EndpointNames.confirmationFile,
    payload.uuid,
    locale,
  );
  const requestParameters = {
    responseType: 'blob',
    headers: { Authorization: `Bearer ${token.accessToken}` },
  };

  try {
    const response = yield call(request, requestURL, requestParameters, false);
    const pdfBlob = new Blob([response], { type: 'application/pdf' });
    saveAs(pdfBlob, `${payload.uuid}.pdf`);

    yield put(actions.getConfirmationFileSuccessAction());
  } catch (error) {
    yield put(actions.getConfirmationFileErrorAction(error));
  }
}

export function* historyPageSaga() {
  yield takeLatest(
    actions.getTransactionHistoryRequestAction.type,
    getTransactionHistory,
  );
  yield takeLatest(
    actions.getConfirmationFileRequestAction.type,
    getConfirmationFile,
  );
}
