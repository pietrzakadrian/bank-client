/**
 *
 * Action
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledFormActionsWrapper,
  StyledButton,
  StyledError,
} from 'app/components/Form/styled';
import { useSelector, useDispatch } from 'react-redux';
import LoadingIndicator from 'app/components/LoadingIndicator';
import { selectPaymentPage } from 'app/containers/PaymentPage/selectors';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';
import { selectError } from 'app/providers/ErrorProvider/selectors';
import { actions } from 'app/containers/PaymentPage/slice';
import { translations } from 'locales/i18n';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { CreatedTransactionWrapper, AuthorizationKeyWrapper } from './styled';
import { Input } from 'antd';

export function Action({ onValidateFields, steps }) {
  const { t } = useTranslation();
  const { currentStep, authorizationKey, hasCreatedTransaction } = useSelector(
    selectPaymentPage,
  );
  const dispatch = useDispatch();
  const isLoading = useSelector(
    selectLoading([
      'paymentPage/createTransaction',
      'global/getBills',
      'paymentPage/confirmTransaction',
    ]),
  );
  const error = useSelector(
    selectError([
      'paymentPage/createTransaction',
      'paymentPage/checkRecipient',
      'paymentPage/confirmTransaction',
    ]),
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(actions.changeInputAction(event.target));
  const onPreviousStep = () => dispatch(actions.previousStepAction());
  const onGetAuthorizationKey = () =>
    dispatch(actions.getAuthorizationKeyRequestAction());
  const onCreateTransaction = () =>
    dispatch(actions.createTransactionRequestAction());
  const onConfirmTransaction = () =>
    dispatch(actions.confirmTransactionRequestAction());

  return (
    <StyledFormActionsWrapper>
      {currentStep < steps.length - 1 && (
        <StyledButton
          disabled={isLoading || !!error}
          type="primary"
          onClick={onValidateFields}
          errored={error ? 1 : 0}
        >
          {(isLoading && <LoadingIndicator />) ||
            (error && <StyledError>{error}</StyledError>) ||
            (!error && !isLoading && (
              <>
                <span>{t(translations.paymentForm.actions.next)}</span>{' '}
                <RightOutlined />
              </>
            ))}
        </StyledButton>
      )}

      {currentStep === steps.length - 1 && (
        <>
          <StyledButton
            onClick={onCreateTransaction}
            type="primary"
            disabled={isLoading || !!error || hasCreatedTransaction}
            errored={error && !authorizationKey ? 1 : 0}
          >
            {(hasCreatedTransaction && (
              <span>
                {t(translations.paymentForm.actions.authorizationKeySent)}
              </span>
            )) ||
              (!hasCreatedTransaction && isLoading && <LoadingIndicator />) ||
              (!hasCreatedTransaction && (
                <>
                  <span>{t(translations.paymentForm.actions.receive)}</span>

                  <RightOutlined />
                </>
              ))}
          </StyledButton>

          {hasCreatedTransaction && (
            <>
              <CreatedTransactionWrapper>
                <Input
                  onPressEnter={onConfirmTransaction}
                  onChange={onChange}
                  name="authorizationKey"
                  value={authorizationKey}
                  placeholder={t(translations.paymentForm.actions.placeholder)}
                />

                <StyledButton
                  type="primary"
                  disabled={isLoading || !!error || !authorizationKey}
                  errored={error ? 1 : 0}
                  onClick={onConfirmTransaction}
                >
                  {(isLoading && <LoadingIndicator />) ||
                    (!isLoading && error && authorizationKey && (
                      <StyledError>{error}</StyledError>
                    )) ||
                    (!error &&
                      !isLoading &&
                      t(translations.paymentForm.actions.make))}
                </StyledButton>
              </CreatedTransactionWrapper>

              <AuthorizationKeyWrapper>
                <StyledButton
                  type="link"
                  onClick={onGetAuthorizationKey}
                  disabled={authorizationKey ? false : true}
                >
                  {t(translations.paymentForm.actions.dontGetAuthrozationKey)}
                </StyledButton>
              </AuthorizationKeyWrapper>
            </>
          )}
        </>
      )}

      {currentStep > 0 && (
        <StyledButton
          disabled={isLoading}
          type="link"
          backed="true"
          onClick={onPreviousStep}
        >
          <LeftOutlined />{' '}
          <span>{t(translations.paymentForm.actions.previous)} </span>
        </StyledButton>
      )}
    </StyledFormActionsWrapper>
  );
}
