import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { selectPaymentPage } from './selectors';
import { selectApp } from '../App/selectors';
import api, { EndpointNames } from 'utils/api';
import { request } from 'utils/request';
import { notification } from 'antd';
import { push } from 'connected-react-router';
import routes from 'utils/routes';
import { numberValidation } from 'utils/helpers';

export function* searchRecipient({
  payload,
}: ReturnType<typeof actions.searchRecipientRequestAction>) {
  const { token } = yield select(selectApp);

  const requestURL = api.bills(EndpointNames.search, payload);
  const requestParameters = {
    headers: { Authorization: `Bearer ${token.accessToken}` },
  };

  if (!numberValidation(payload)) {
    return;
  }

  if (payload.length > 1) {
    yield delay(300);
  }

  try {
    const response = yield call(request, requestURL, requestParameters);
    yield put(actions.searchRecipientSuccessAction(response));
  } catch (error) {
    yield put(actions.searchRecipientErrorAction(error));
  }
}

export function* checkRecipient() {
  const { recipients, recipientBill } = yield select(selectPaymentPage);
  const isExist = recipients?.data?.find(
    ({ uuid }) => uuid === recipientBill.uuid,
  );

  if (isExist) {
    yield put(actions.checkRecipientCorrectAction());
  } else {
    yield put(actions.checkRecipientIncorrectAction('oops'));
  }
}

export function* createTransaction() {
  const { token } = yield select(selectApp);
  const {
    senderBill,
    recipientBill,
    amountMoney,
    transferTitle,
  } = yield select(selectPaymentPage);

  const requestURL = api.transactions(EndpointNames.create);
  const requestParameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.accessToken}`,
    },
    body: JSON.stringify({
      amountMoney,
      transferTitle,
      senderBill,
      recipientBill,
      locale: 'en',
    }),
  };

  try {
    const { uuid } = yield call(request, requestURL, requestParameters);
    yield put(actions.createTransactionSuccessAction(uuid));
  } catch (error) {
    yield put(actions.createTransactionErrorAction(error));
  }
}

export function* getAuthorizationKey() {
  const { token } = yield select(selectApp);
  const { transaction } = yield select(selectPaymentPage);

  const requestURL = api.transactions(
    EndpointNames.authorizationKey,
    transaction,
  );
  const requestParameters = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.accessToken}`,
    },
  };

  try {
    const { authorizationKey } = yield call(
      request,
      requestURL,
      requestParameters,
    );
    yield put(actions.getAuthorizationKeySuccessAction(authorizationKey));
  } catch (error) {
    yield put(actions.getAuthorizationKeyErrorAction(error));
  }
}

export function* confirmTransaction() {
  const { token, isCollapsedSidebar } = yield select(selectApp);
  const { authorizationKey } = yield select(selectPaymentPage);

  const requestURL = api.transactions(EndpointNames.confirm);
  const requestParameters = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.accessToken}`,
    },
    body: JSON.stringify({ authorizationKey }),
  };
  const style = { width: 400, marginLeft: isCollapsedSidebar ? 80 : 250 };
  const placement = 'bottomLeft';

  try {
    yield call(request, requestURL, requestParameters);
    yield put(actions.confirmTransactionSuccessAction());

    notification.success({
      message: 'test',
      description: 'test2',
      style,
      placement,
    });

    yield put(push(routes.dashboard.path));
  } catch (error) {
    yield put(actions.confirmTransactionErrorAction('oops'));
  }
}

export function* paymentPageSaga() {
  yield takeLatest(actions.searchRecipientRequestAction.type, searchRecipient);
  yield takeLatest(actions.checkRecipientAction.type, checkRecipient);
  yield takeLatest(
    actions.createTransactionRequestAction.type,
    createTransaction,
  );
  yield takeLatest(
    actions.getAuthorizationKeyRequestAction.type,
    getAuthorizationKey,
  );
  yield takeLatest(
    actions.confirmTransactionRequestAction.type,
    confirmTransaction,
  );
}
