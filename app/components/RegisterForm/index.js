/**
 *
 * RegisterForm
 *
 */

import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import RegisterAction from 'components/RegisterAction';
import {
  makeSelectPinCode,
  makeSelectCurrentStep,
} from 'containers/RegisterPage/selectors';
import { nextStepAction } from 'containers/App/actions';
import { registerAction } from 'containers/RegisterPage/actions';
import RegisterStep from 'components/RegisterStep';
import SuccessfulResult from 'components/RegisterContent/SuccessfulResult';
import { StyledFormWrapper, StyledForm } from 'components/Form/styles';
import { FormattedMessage } from 'react-intl';
import {
  EmailAddress,
  Currency,
  Password,
  LastName,
  FirstName,
} from 'components/RegisterContent';
import messages from './messages';

const stateSelector = createStructuredSelector({
  pinCode: makeSelectPinCode(),
  currentStep: makeSelectCurrentStep(),
});

export default function RegisterForm() {
  const { pinCode, currentStep } = useSelector(stateSelector);
  const [form] = StyledForm.useForm();
  const dispatch = useDispatch();

  const onRegister = () => dispatch(registerAction());
  const onNextStep = () => dispatch(nextStepAction());

  const onValidateFields = async () => {
    try {
      await form.validateFields();

      if (currentStep === steps.length - 1) {
        onRegister();
      } else {
        onNextStep();
      }
    } catch (err) {
      Error(err);
    }
  };

  useEffect(() => {
    form.validateFields([
      'firstName',
      'lastName',
      'password',
      'email',
      'confirm-personal-data',
    ]);
  }, []);

  const steps = [
    {
      title: <FormattedMessage {...messages.firstName} />,
      content: <FirstName onValidateFields={onValidateFields} />,
    },
    {
      title: <FormattedMessage {...messages.lastName} />,
      content: <LastName onValidateFields={onValidateFields} />,
    },
    {
      title: <FormattedMessage {...messages.password} />,
      content: <Password onValidateFields={onValidateFields} />,
    },
    {
      title: <FormattedMessage {...messages.currency} />,
      content: <Currency />,
    },
    {
      title: <FormattedMessage {...messages.email} />,
      content: <EmailAddress onValidateFields={onValidateFields} />,
    },
  ];

  return (
    <>
      <RegisterStep steps={steps} />

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

            <RegisterAction onValidateFields={onValidateFields} steps={steps} />
          </>
        )}
      </StyledFormWrapper>
    </>
  );
}
