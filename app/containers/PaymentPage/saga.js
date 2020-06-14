import { takeLatest, debounce, call, put, select } from 'redux-saga/effects';
import { api, request, routes } from 'utils';
import { push } from 'connected-react-router';
import { makeSelectToken } from 'containers/App/selectors';
import {
  makeSelectRecipients,
  makeSelectRecipientBill,
  makeSelectRecipientBillUuid,
  makeSelectSenderBillUuid,
  makeSelectAmountMoney,
  makeSelectTransferTitle,
} from 'containers/PaymentPage/selectors';
import {
  GET_BILLS_REQUEST,
  SEARCH_RECIPIENT_REQUEST,
  CHECK_RECIPIENT,
  CREATE_TRANSACTION_REQUEST,
} from './constants';
import {
  getBillsSuccessAction,
  getBillsErrorAction,
  searchRecipientSuccessAction,
  searchRecipientErrorAction,
  checkRecipientCorrectAction,
  checkRecipientIncorrectAction,
  createTransactionSuccessAction,
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

export function* checkRecipient() {
  const recipients = yield select(makeSelectRecipients());
  const recipientBill = yield select(makeSelectRecipientBill());
  const isExist = recipients.find(({ uuid }) => uuid === recipientBill.uuid);

  if (isExist) {
    yield put(checkRecipientCorrectAction());
  } else {
    yield put(
      checkRecipientIncorrectAction('The bill number entered is not valid.'),
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
    headers: { Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({
      senderBill,
      recipientBill,
      amountMoney,
      transferTitle,
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

export default function* paymentPageSaga() {
  yield takeLatest(GET_BILLS_REQUEST, getBills);
  yield debounce(400, SEARCH_RECIPIENT_REQUEST, searchRecipient);
  yield takeLatest(CHECK_RECIPIENT, checkRecipient);
  yield takeLatest(CREATE_TRANSACTION_REQUEST, createTransaction);
}
