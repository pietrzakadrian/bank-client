/**
 *
 * Action
 *
 */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectRegistrationPage } from 'app/containers/RegistrationPage/selectors';
import { selectError } from 'app/providers/ErrorProvider/selectors';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';
import { actions } from 'app/containers/RegistrationPage/slice';
import {
  StyledError,
  StyledFormActionsWrapper,
  StyledButton,
} from 'app/components/Form/styled';
import LoadingIndicator from 'app/components/LoadingIndicator';
import { translations } from 'locales/i18n';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

interface Props {
  steps: { content: JSX.Element }[];
  onValidateFields(): any;
}

export default function Action({ steps, onValidateFields }: Props) {
  const { currentStep } = useSelector(selectRegistrationPage);
  const error = useSelector(selectError(['registrationPage/registration']));
  const isLoading = useSelector(selectLoading('registrationPage/registration'));
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onPreviousStep = () => dispatch(actions.previousStepAction());

  return (
    <StyledFormActionsWrapper>
      <StyledButton
        disabled={isLoading || !!error}
        type="primary"
        onClick={onValidateFields}
        errored={error ? 1 : 0}
      >
        {(error && <StyledError>{error}</StyledError>) ||
          (currentStep < steps.length - 1 && !error && (
            <>
              <span> {t(translations.registerForm.actions.next)} </span>
              <RightOutlined />
            </>
          )) ||
          (currentStep === steps.length - 1 && isLoading && (
            <LoadingIndicator />
          )) ||
          (currentStep === steps.length - 1 &&
            !error &&
            t(translations.registerForm.actions.create))}
      </StyledButton>

      {currentStep > 0 && (
        <StyledButton
          disabled={isLoading}
          type="link"
          backed="true"
          onClick={onPreviousStep}
        >
          <LeftOutlined />
          <span>{t(translations.registerForm.actions.previous)}</span>
        </StyledButton>
      )}
    </StyledFormActionsWrapper>
  );
}
