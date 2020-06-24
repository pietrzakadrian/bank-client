import React from 'react';
import { takeLatest, debounce, call, put, select } from 'redux-saga/effects';
import { api, request, routes } from 'utils';
import { push } from 'connected-react-router';
import { notification } from 'antd';
import {
  makeSelectToken,
  makeSelectIsCollapsedSidebar,
} from 'containers/App/selectors';
import {
  makeSelectRecipients,
  makeSelectRecipientBill,
  makeSelectRecipientBillUuid,
  makeSelectSenderBillUuid,
  makeSelectAmountMoney,
  makeSelectTransferTitle,
  makeSelectTransaction,
  makeSelectAuthorizationKey,
} from 'containers/PaymentPage/selectors';
import { FormattedMessage } from 'react-intl';
import {
  GET_BILLS_REQUEST,
  SEARCH_RECIPIENT_REQUEST,
  CHECK_RECIPIENT,
  CREATE_TRANSACTION_REQUEST,
  CONFIRM_TRANSACTION_REQUEST,
  GET_AUTHORIZATION_KEY_REQUEST,
} from './constants';
import {
  getBillsSuccessAction,
  getBillsErrorAction,
  searchRecipientSuccessAction,
  searchRecipientErrorAction,
  checkRecipientCorrectAction,
  checkRecipientIncorrectAction,
  createTransactionSuccessAction,
  getAuthorizationKeySuccessAction,
  // getAuthorizationKeyErrorAction,
  confirmTransactionSuccessAction,
  // confirmTransactionErrorAction,
} from './actions';
import messages from './messages';

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

export function* checkRecipient() {
  const recipients = yield select(makeSelectRecipients());
  const recipientBill = yield select(makeSelectRecipientBill());
  const isExist = recipients.find(({ uuid }) => uuid === recipientBill.uuid);

  if (isExist) {
    yield put(checkRecipientCorrectAction());
  } else {
    yield put(
      checkRecipientIncorrectAction(
        <FormattedMessage {...messages.billNotValid} />,
      ),
    );
  }
}

export function* createTransaction() {
  const { accessToken } = yield select(makeSelectToken());
  const senderBill = yield select(makeSelectSenderBillUuid());
  const recipientBill = yield select(makeSelectRecipientBillUuid());
  const amountMoney = yield select(makeSelectAmountMoney());
  const transferTitle = yield select(makeSelectTransferTitle());
  const requestURL = api.transactions('create');
  const requestParameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      amountMoney,
      transferTitle,
      senderBill,
      recipientBill,
    }),
  };

  try {
    const { uuid } = yield call(request, requestURL, requestParameters);
    yield put(createTransactionSuccessAction(uuid));
  } catch (error) {
    // yield put(createTransactionErrorAction(error));
    // switch (error.statusCode) {
    //   case 401:
    //     yield put(push(routes.login.path));
    //     break;
    //   default:
    //     yield put(push(routes.login.path));
    //     break;
    // }
  }
}

export function* getAuthorizationKey() {
  const { accessToken } = yield select(makeSelectToken());
  const transaction = yield select(makeSelectTransaction());
  const requestURL = api.transactions('authorizationKey')(transaction);
  const requestParameters = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const { authorizationKey } = yield call(
      request,
      requestURL,
      requestParameters,
    );
    yield put(getAuthorizationKeySuccessAction(authorizationKey));
  } catch (error) {
    // yield put(getAuthorizationKeyErrorAction(error));
    // switch (error.statusCode) {
    //   case 401:
    //     yield put(push(routes.login.path));
    //     break;
    //   default:
    //     yield put(push(routes.login.path));
    //     break;
    // }
  }
}

export function* confirmTransaction() {
  const { accessToken } = yield select(makeSelectToken());
  const authorizationKey = yield select(makeSelectAuthorizationKey());
  const isCollapsedSidebar = yield select(makeSelectIsCollapsedSidebar());
  const requestURL = api.transactions('confirm');
  const requestParameters = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ authorizationKey }),
  };
  const style = { width: 400, marginLeft: isCollapsedSidebar ? 80 : 250 };
  const placement = 'bottomLeft';

  try {
    yield call(request, requestURL, requestParameters);
    yield put(confirmTransactionSuccessAction());

    notification.success({
      message: <FormattedMessage {...messages.transferConfirmedTitle} />,
      description: (
        <FormattedMessage {...messages.transferConfirmedDescription} />
      ),
      style,
      placement,
    });

    yield put(push(routes.dashboard.path));
  } catch (error) {
    // yield put(confirmTransactionErrorAction(error));
    // switch (error.statusCode) {
    //   case 401:
    //     yield put(push(routes.login.path));
    //     break;
    //   default:
    //     yield put(push(routes.login.path));
    //     break;
    // }
  }
}

export default function* paymentPageSaga() {
  yield takeLatest(GET_BILLS_REQUEST, getBills);
  yield debounce(400, SEARCH_RECIPIENT_REQUEST, searchRecipient);
  yield takeLatest(CHECK_RECIPIENT, checkRecipient);
  yield takeLatest(CREATE_TRANSACTION_REQUEST, createTransaction);
  yield takeLatest(GET_AUTHORIZATION_KEY_REQUEST, getAuthorizationKey);
  yield takeLatest(CONFIRM_TRANSACTION_REQUEST, confirmTransaction);
}
