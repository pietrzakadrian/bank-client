/**
 *
 * RegisterForm
 *
 */

import React, { useEffect } from 'react';
import { Result, Button, Form } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import {
  registerAction,
  nextStepAction,
  previousStepAction,
} from 'containers/RegisterPage/actions';
import {
  makeSelectIsLoading,
  makeSelectPinCode,
  makeSelectCurrentStep,
} from 'containers/RegisterPage/selectors';
import steps from 'components/RegisterStep/Steps';
import RegisterStep from 'components/RegisterStep';
import {
  StyledFormWrapper,
  StyledForm,
  StyledFormActionsWrapper,
  StyledButton,
} from './RegisterForm.style';

const stateSelector = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  pinCode: makeSelectPinCode(),
  currentStep: makeSelectCurrentStep(),
});

export default function RegisterForm() {
  const { pinCode, isLoading, currentStep } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onValidateFields = async () => {
    try {
      await form.validateFields();

      if (currentStep === steps.length - 1) {
        dispatch(registerAction());
      } else {
        dispatch(nextStepAction());
      }
    } catch (error) {
      Error(error);
    }
  };

  useEffect(() => {
    form.validateFields([
      'firstName',
      'lastName',
      'password',
      'currency',
      'email',
      'confirm-personal-data',
    ]);
  }, []);

  return (
    <>
      <RegisterStep />

      <StyledFormWrapper>
        {pinCode ? (
          <Result
            status="success"
            title="The account has been successfully registered!"
            subTitle={`Your PIN code is: ${pinCode}. Remember it or save it in a safe place, because you must enter the PIN code when you want to log into the banking system.`}
            extra={[
              <Button key="1" type="primary">
                Log in to the banking system
              </Button>,
            ]}
          />
        ) : (
          <>
            <StyledForm form={form} layout="vertical" name="register">
              {steps[currentStep].content}
            </StyledForm>

            <StyledFormActionsWrapper>
              <StyledButton
                disabled={isLoading}
                type="primary"
                onClick={onValidateFields}
              >
                {(currentStep < steps.length - 1 && (
                  <>
                    Next <RightOutlined />
                  </>
                )) ||
                  (currentStep === steps.length - 1 && 'Create an account')}
              </StyledButton>

              {currentStep > 0 && (
                <StyledButton
                  disabled={isLoading}
                  type="link"
                  back="true"
                  onClick={() => dispatch(previousStepAction())}
                >
                  <LeftOutlined /> Back
                </StyledButton>
              )}
            </StyledFormActionsWrapper>
          </>
        )}
      </StyledFormWrapper>
    </>
  );
}
