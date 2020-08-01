/**
 *
 * RegisterForm
 *
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRegistrationPage } from 'app/containers/RegistrationPage/selectors';
import { StyledForm, StyledFormWrapper } from 'app/components/Form/styled';
import { actions } from 'app/containers/RegistrationPage/slice';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import Action from './Action';
import { RegisterStep } from 'app/components/RegisterStep';
import {
  FirstName,
  LastName,
  Password,
  EmailAddress,
  SuccessfulResult,
  Currency,
} from 'app/components/RegisterForm/Content';

export function RegisterForm() {
  const { pinCode, currentStep } = useSelector(selectRegistrationPage);
  const dispatch = useDispatch();
  const [form] = StyledForm.useForm();
  const { t } = useTranslation();

  const onNextStep = () => dispatch(actions.nextStepAction());
  const onRegister = () => dispatch(actions.registrationRequestAction());

  const onValidateFields = async () => {
    try {
      await form.validateFields();

      if (currentStep === steps.length - 1) {
        onRegister();
      } else {
        onNextStep();
      }
    } catch (error) {
      Error(error);
    }
  };

  const steps = [
    {
      id: 1,
      title: t(translations.registerForm.content.firstName.label),
      content: <FirstName onValidateFields={onValidateFields} />,
    },
    {
      id: 2,
      title: t(translations.registerForm.content.lastName.label),
      content: <LastName onValidateFields={onValidateFields} />,
    },
    {
      id: 3,
      title: t(translations.registerForm.content.password.label),
      content: <Password onValidateFields={onValidateFields} />,
    },
    {
      id: 4,
      title: t(translations.registerForm.content.currency.label),
      content: <Currency />,
    },
    {
      id: 5,
      title: t(translations.registerForm.content.emailAddress.label),
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

            <Action onValidateFields={onValidateFields} steps={steps} />
          </>
        )}
      </StyledFormWrapper>
    </>
  );
}
