import { call, put, select, takeLatest } from "redux-saga/effects";
import { api, request } from "utils";
import { resetPasswordErrorAction, resetPasswordSuccessAction } from "./actions";
import { RESET_PASSWORD_REQUEST } from "./constants";
import { makeSelectPassword, makeSelectToken } from "./selectors";
import messages from "./messages";
import { FormattedMessage } from "react-intl";
import React from 'react';

export function* resetPassword() {
  const password = yield select(makeSelectPassword());
  const token = yield select(makeSelectToken());
  const requestURL = api.auth.resetPassword;
  const requestParameters = {
    method: 'PATCH',
    headers: {       Authorization: `Bearer ${token}`, Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ password })
  };

  try {
    yield call(request, requestURL, requestParameters);
    yield put(resetPasswordSuccessAction());
  } catch (error) {
    let message;

    switch (error?.statusCode) {
      case 400: {
        message = <FormattedMessage {...messages.tokenError} />;
        break;
      }

      default: {
        message = <FormattedMessage {...messages.serverError} />;
        break;
      }
    }

    yield put(resetPasswordErrorAction(message));
  }
}

export default function* resetPasswordPageSaga() {
  yield takeLatest(RESET_PASSWORD_REQUEST, resetPassword);
}
