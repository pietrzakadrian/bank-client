/**
 *
 * LoginForm
 *
 */

import React from 'react';
import { StyledForm, StyledFormWrapper } from 'components/Form/Form.style';

import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import {
  makeSelectPinCode,
  makeSelectPassword,
  makeSelectCurrentStep,
} from 'containers/LoginPage/selectors';
import steps from 'components/LoginStep/Steps';
import LoginAction from 'components/LoginAction';

const stateSelector = createStructuredSelector({
  pinCode: makeSelectPinCode(),
  password: makeSelectPassword(),
  currentStep: makeSelectCurrentStep(),
});

export default function LoginForm() {
  const { currentStep } = useSelector(stateSelector);
  const [form] = StyledForm.useForm();

  return (
    <StyledFormWrapper>
      <StyledForm form={form} layout="vertical" name="register">
        {steps[currentStep].content}
      </StyledForm>

      <LoginAction form={form} />
    </StyledFormWrapper>
  );
}
