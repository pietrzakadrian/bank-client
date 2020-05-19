/**
 *
 * LoginForm
 *
 */

import React from 'react';
import {
  StyledForm,
  StyledFormWrapper,
  StyledError,
} from 'components/Form/Form.style';

import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { makeSelectCurrentStep } from 'containers/LoginPage/selectors';
import { makeSelectError } from 'containers/App/selectors';
import steps from 'components/LoginStep/Steps';
import LoginAction from 'components/LoginAction';

const stateSelector = createStructuredSelector({
  currentStep: makeSelectCurrentStep(),
  error: makeSelectError(),
});

export default function LoginForm() {
  const { currentStep, error } = useSelector(stateSelector);
  const [form] = StyledForm.useForm();

  return (
    <StyledFormWrapper>
      <StyledForm form={form} layout="vertical" name="register">
        {steps[currentStep].content}
      </StyledForm>

      {error && <StyledError>{error}</StyledError>}

      <LoginAction form={form} />
    </StyledFormWrapper>
  );
}
