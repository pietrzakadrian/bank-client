/**
 *
 * ResetPasswordForm
 *
 */

import React from 'react';
import { StyledResult } from 'components/ForgotPasswordForm/styles';
import { StyledForm, StyledFormWrapper } from 'components/Form/styles';
import ResetPasswordAction from 'components/ResetPasswordAction';
import {
  resetPasswordAction,
  resetPasswordErrorAction,
} from 'containers/ResetPasswordPage/actions';
import {
  makeSelectIsSuccess,
  makeSelectPassword,
  makeSelectPassword2,
} from 'containers/ResetPasswordPage/selectors';
import Password from 'components/ResetPasswordContent/Password';
import Password2 from 'components/ResetPasswordContent/Password2';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import messages from './messages';

const stateSelector = createStructuredSelector({
  password: makeSelectPassword(),
  password2: makeSelectPassword2(),
  isSuccess: makeSelectIsSuccess(),
});

export default function ResetPasswordForm() {
  const [form] = StyledForm.useForm();
  const dispatch = useDispatch();
  const { password, isSuccess, password2 } = useSelector(stateSelector);
  const onReset = () => dispatch(resetPasswordAction());
  const onValidateFields = async () => {
    try {
      await form.validateFields();

      if (password !== password2) {
        return dispatch(
          resetPasswordErrorAction(
            <FormattedMessage {...messages.passwordNotMatching} />,
          ),
        );
      }

      onReset();
    } catch (error) {
      Error(error);
    }
  };

  return (
    <StyledFormWrapper>
      {isSuccess ? (
        <StyledResult
          status="success"
          title={<FormattedMessage {...messages.title} />}
          subTitle={<FormattedMessage {...messages.description} />}
        />
      ) : (
        <StyledForm
          name="reset-password"
          layout="vertical"
          centered="true"
          form={form}
        >
          <Password onValidateFields={onValidateFields} />
          <Password2 onValidateFields={onValidateFields} />

          <ResetPasswordAction onValidateFields={onValidateFields} />
        </StyledForm>
      )}
    </StyledFormWrapper>
  );
}