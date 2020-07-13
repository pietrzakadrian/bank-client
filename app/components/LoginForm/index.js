/**
 *
 * LoginForm
 *
 */

import React from 'react';
import { StyledForm, StyledFormWrapper } from 'components/Form/Form.style';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { makeSelectCurrentStep } from 'containers/LoginPage/selectors';
import LoginAction from 'components/LoginAction';
import { PinCode, Password } from 'components/LoginContent';

const stateSelector = createStructuredSelector({
  currentStep: makeSelectCurrentStep(),
});

export default function LoginForm() {
  const { currentStep } = useSelector(stateSelector);
  const [form] = StyledForm.useForm();

  const steps = [
    {
      content: <PinCode form={form} />,
    },
    {
      content: <Password form={form} />,
    },
  ];

  return (
    <StyledFormWrapper>
      <StyledForm centered="true" form={form} layout="vertical" name="login">
        {steps[currentStep].content}
      </StyledForm>

      <LoginAction form={form} />
    </StyledFormWrapper>
  );
}
