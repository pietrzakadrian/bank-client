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
import { actions } from 'app/containers/LoginPage/slice';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface Props {
  steps: { content: JSX.Element }[];
  onValidateFields(): void;
}

export function Action({ steps, onValidateFields }: Props) {
  const { t } = useTranslation();
  const currentStep = useSelector(selectCurrentStep);
  const dispatch = useDispatch();

  const onPreviousStep = () => dispatch(actions.previousStepAction());

  return (
    <StyledFormActionsWrapper>
      <StyledButton type="primary" onClick={onValidateFields}>
        {(currentStep < steps.length - 1 && (
          <div>
            {t(translations.loginForm.actions.next)} <RightOutlined />
          </div>
        )) ||
          (currentStep === steps.length - 1 && false && <LoadingIndicator />) ||
          (currentStep === steps.length - 1 && false && (
            <StyledError>{false}</StyledError>
          )) ||
          (currentStep === steps.length - 1 &&
            t(translations.loginForm.actions.create))}
      </StyledButton>

      {currentStep > 0 && (
        <StyledButton type="link" back="true" onClick={onPreviousStep}>
          <>
            <LeftOutlined /> {t(translations.loginForm.actions.previous)}
          </>
        </StyledButton>
      )}
    </StyledFormActionsWrapper>
  );
}
