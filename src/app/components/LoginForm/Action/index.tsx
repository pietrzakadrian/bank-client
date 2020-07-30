/**
 *
 * Action
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentStep } from 'app/containers/LoginPage/selectors';
import {
  StyledError,
  StyledFormActionsWrapper,
  StyledButton,
} from 'app/components/Form/styled';
import { translations } from 'locales/i18n';
import LoadingIndicator from 'app/components/LoadingIndicator';
import { actions as AppActions } from 'app/containers/App/slice';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { selectError } from 'app/providers/ErrorProvider/selectors';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';

interface Props {
  steps: { content: JSX.Element }[];
  onValidateFields(): any;
}

export function Action({ steps, onValidateFields }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentStep = useSelector(selectCurrentStep);
  const error = useSelector(selectError('loginPage/login'));
  const isLoading = useSelector(selectLoading('loginPage/login'));

  const onPreviousStep = event =>
    dispatch(AppActions.previousStepAction(event.currentTarget));

  return (
    <StyledFormActionsWrapper>
      <StyledButton
        disabled={isLoading || !!error}
        errored={error ? 1 : 0}
        type="primary"
        onClick={onValidateFields}
      >
        {(currentStep < steps.length - 1 && (
          <>
            <span>{t(translations.loginForm.actions.next)}</span>
            <RightOutlined />
          </>
        )) ||
          (currentStep === steps.length - 1 && isLoading && (
            <LoadingIndicator />
          )) ||
          (currentStep === steps.length - 1 && error && (
            <StyledError>{error}</StyledError>
          )) ||
          (currentStep === steps.length - 1 && (
            <span>{t(translations.loginForm.actions.create)}</span>
          ))}
      </StyledButton>

      {currentStep > 0 && (
        <StyledButton
          data-key="loginPage"
          type="link"
          backed="true"
          onClick={onPreviousStep}
        >
          <>
            <LeftOutlined />
            <span>{t(translations.loginForm.actions.previous)}</span>
          </>
        </StyledButton>
      )}
    </StyledFormActionsWrapper>
  );
}
