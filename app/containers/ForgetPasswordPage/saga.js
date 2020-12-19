import { call, takeLatest, select, put } from "redux-saga/effects";
import { api, request } from "utils";
import { forgotPasswordErrorAction, forgotPasswordSuccessAction } from "./actions";
import { FORGOT_PASSWORD_REQUEST } from "./constants";
import { makeSelectEmail } from "./selectors";
import React from 'react';
import { FormattedMessage } from "react-intl";
import messages from "containers/ForgetPasswordPage/messages";
import { makeSelectLocale } from "providers/LanguageProvider/selectors";

export function* forgotPassword() {
  const emailAddress = yield select(makeSelectEmail());
  const locale = yield select(makeSelectLocale());
  const requestURL = api.auth.forgetPassword;
  const requestParameters = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ emailAddress, locale }),
  };

  try {
    yield call(request, requestURL, requestParameters);
    yield put(forgotPasswordSuccessAction());
  } catch (error) {
    let message;

    switch (error?.statusCode) {
      case 400: {
        message = <FormattedMessage {...messages.notFound} />;
        break;
      }

      default: {
        message = <FormattedMessage {...messages.serverError} />;
        break;
      }
    }

    yield put(forgotPasswordErrorAction(message));
  }
}

export default function* forgetPasswordPageSaga() {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPassword);

}
