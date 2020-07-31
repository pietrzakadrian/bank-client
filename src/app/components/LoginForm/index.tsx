/**
 *
 * LoginForm
 *
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoginPage } from 'app/containers/LoginPage/selectors';
import { actions } from 'app/containers/LoginPage/slice';
import { StyledForm, StyledFormWrapper } from 'app/components/Form/styled';
import { PinCode, Password } from './Content';
import { Action } from './Action';

export function LoginForm() {
  const { currentStep } = useSelector(selectLoginPage);
  const [form] = StyledForm.useForm();
  const dispatch = useDispatch();

  const onNextStep = () => dispatch(actions.nextStepAction());
  const onLogin = () => dispatch(actions.loginRequestAction());

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
      <StyledForm
        noValidate
        centered="true"
        form={form}
        layout="vertical"
        name="login"
      >
        {steps[currentStep].content}
      </StyledForm>

      <Action steps={steps} onValidateFields={onValidateFields} />
    </StyledFormWrapper>
  );
}
