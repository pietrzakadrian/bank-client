/**
 *
 * LoginForm
 *
 */

import React from 'react';
import { StyledForm, StyledFormWrapper } from 'components/Form/styles';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { makeSelectCurrentStep } from 'containers/LoginPage/selectors';
import LoginAction from 'components/LoginAction';
import { PinCode, Password } from 'components/LoginContent';
import { nextStepAction } from 'containers/App/actions';
import { loginAction } from 'containers/LoginPage/actions';
import ForgotPasswordRedirect from 'components/ForgotPasswordRedirect'


const stateSelector = createStructuredSelector({
  currentStep: makeSelectCurrentStep(),
});

export default function LoginForm() {
  const { currentStep } = useSelector(stateSelector);
  const [form] = StyledForm.useForm();
  const dispatch = useDispatch();

  const onNextStep = () => dispatch(nextStepAction());
  const onLogin = () => dispatch(loginAction());

  const onValidateFields = async () => {
    try {
      await form.validateFields();

      if (currentStep === steps.length - 1) {
        onLogin();
      } else {
        onNextStep();
      }
    } catch (error) {
      Error(error);
    }
  };

  const steps = [
    { content: <PinCode onValidateFields={onValidateFields} /> },
    { content: <Password onValidateFields={onValidateFields} /> },
  ];

  return (
    <StyledFormWrapper>
      <StyledForm centered="true" form={form} layout="vertical" name="login">
        {steps[currentStep].content}
      </StyledForm>

      <LoginAction steps={steps} onValidateFields={onValidateFields} />

      <ForgotPasswordRedirect />
    </StyledFormWrapper>
  );
}
