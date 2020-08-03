/**
 *
 * SuccessfulResult
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { selectRegistrationPage } from 'app/containers/RegistrationPage/selectors';
import { translations } from 'locales/i18n';
import { StyledResult, StyledSubTitle, StyledAction } from './styled';
import {
  StyledButton,
  StyledError,
  StyledFormActionsWrapper,
} from 'app/components/Form/styled';
import { actions } from 'app/containers/RegistrationPage/slice';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';
import { selectError } from 'app/providers/ErrorProvider/selectors';
import LoadingIndicator from 'app/components/LoadingIndicator';

export function SuccessfulResult() {
  const { pinCode } = useSelector(selectRegistrationPage);
  const isLoading = useSelector(selectLoading('registrationPage/loginExpress'));
  const error = useSelector(selectError('registrationPage/loginExpress'));
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onLoginExpress = () => dispatch(actions.loginExpressRequestAction());

  return (
    <>
      <StyledResult
        status="success"
        title={t(translations.registerForm.content.successfulResult.title)}
      />

      <StyledSubTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: t(
              translations.registerForm.content.successfulResult.subtitle,
              {
                pinCode,
                interpolation: { escapeValue: false },
              },
            ),
          }}
        />
      </StyledSubTitle>

      <StyledFormActionsWrapper>
        <StyledAction>
          <StyledButton
            disabled={isLoading}
            type="primary"
            onClick={onLoginExpress}
          >
            {(error && <StyledError>{error}</StyledError>) ||
              (isLoading && <LoadingIndicator />) ||
              (!isLoading &&
                !error &&
                t(translations.registerForm.content.successfulResult.action))}
          </StyledButton>
        </StyledAction>
      </StyledFormActionsWrapper>
    </>
  );
}
