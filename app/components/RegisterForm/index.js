/**
 *
 * RegisterForm
 *
 */

import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import RegisterAction from 'components/RegisterAction';
import {
  makeSelectPinCode,
  makeSelectCurrentStep,
} from 'containers/RegisterPage/selectors';
import steps from 'components/RegisterStep/Steps';
import RegisterStep from 'components/RegisterStep';
import SuccessfulResult from 'components/RegisterContent/SuccessfulResult';
import { StyledFormWrapper, StyledForm } from 'components/Form/Form.style';

const stateSelector = createStructuredSelector({
  pinCode: makeSelectPinCode(),
  currentStep: makeSelectCurrentStep(),
});

export default function RegisterForm() {
  const { pinCode, currentStep } = useSelector(stateSelector);
  const [form] = StyledForm.useForm();

  useEffect(() => {
    form.validateFields([
      'firstName',
      'lastName',
      'password',
      'email',
      'confirm-personal-data',
    ]);
  }, []);

  return (
    <>
      <RegisterStep />

      <StyledFormWrapper>
        {pinCode ? (
          <SuccessfulResult />
        ) : (
          <>
            <StyledForm
              centered="true"
              form={form}
              layout="vertical"
              name="register"
            >
              {steps[currentStep].content}
            </StyledForm>

            <RegisterAction form={form} />
          </>
        )}
      </StyledFormWrapper>
    </>
  );
}
