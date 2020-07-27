import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { previousStepAction, changeInputAction } from 'containers/App/actions';
import {
  getAuthorizationKeyAction,
  createTransactionAction,
  confirmTransactionAction,
} from 'containers/PaymentPage/actions';
import { makeSelectError } from 'providers/ErrorProvider/selectors';
import {
  makeSelectCurrentStep,
  makeSelectTransferTitle,
  makeSelectAmountMoney,
  makeSelectBills,
  makeSelectAuthorizationKey,
  makeSelectHasCreatedTransaction,
} from 'containers/PaymentPage/selectors';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import {
  StyledFormActionsWrapper,
  StyledButton,
  StyledError,
} from 'components/Form/styles';
import LoadingIndicator from 'components/LoadingIndicator';
import { getRequestName, disabledSpacesInput } from 'helpers';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import {
  GET_BILLS_REQUEST,
  CHECK_RECIPIENT_INCORRECT,
  CONFIRM_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_REQUEST,
  CONFIRM_TRANSACTION_INCORRECT,
} from 'containers/PaymentPage/constants';
import { Input } from 'antd';
import messages from './messages';
import { AuthorizationKeyWrapper, CreatedTransactionWrapper } from './styles';

const stateSelector = createStructuredSelector({
  currentStep: makeSelectCurrentStep(),
  isLoading: makeSelectIsLoading([
    getRequestName(CREATE_TRANSACTION_REQUEST),
    getRequestName(GET_BILLS_REQUEST),
    getRequestName(CONFIRM_TRANSACTION_REQUEST),
  ]),
  error: makeSelectError([
    getRequestName(GET_BILLS_REQUEST),
    getRequestName(CHECK_RECIPIENT_INCORRECT),
    getRequestName(CONFIRM_TRANSACTION_INCORRECT),
  ]),
  transferTitle: makeSelectTransferTitle(),
  amountMoney: makeSelectAmountMoney(),
  bills: makeSelectBills(),
  authorizationKey: makeSelectAuthorizationKey(),
  hasCreatedTransaction: makeSelectHasCreatedTransaction(),
});

function PaymentAction({ intl, onValidateFields, steps }) {
  const {
    isLoading,
    currentStep,
    error,
    authorizationKey,
    hasCreatedTransaction,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const snippets = {
    success: {
      title: intl.formatMessage(messages.transferConfirmedTitle),
      description: intl.formatMessage(messages.transferConfirmedDescription),
    },
  };

  const onChangeInput = (event) => dispatch(changeInputAction(event.target));
  const onPreviousStep = () => dispatch(previousStepAction());
  const onGetAuthorizationKey = () => dispatch(getAuthorizationKeyAction());

  const onCreateTransaction = () => dispatch(createTransactionAction());
  const onConfirmTransaction = () =>
    dispatch(confirmTransactionAction(snippets));

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
                <FormattedMessage {...messages.next} /> <RightOutlined />
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
              <FormattedMessage {...messages.authorizationKeySent} />
            )) ||
              (!hasCreatedTransaction && isLoading && <LoadingIndicator />) ||
              (!hasCreatedTransaction && (
                <>
                  <FormattedMessage {...messages.receive} /> <RightOutlined />
                </>
              ))}
          </StyledButton>

          {hasCreatedTransaction && (
            <>
              <CreatedTransactionWrapper>
                <FormattedMessage {...messages.placeholder}>
                  {(placeholder) => (
                    <Input
                      onPressEnter={onConfirmTransaction}
                      onKeyPress={disabledSpacesInput}
                      onChange={(event) => onChangeInput(event)}
                      name="authorizationKey"
                      value={authorizationKey}
                      placeholder={placeholder}
                    />
                  )}
                </FormattedMessage>

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
                    (!error && !isLoading && (
                      <FormattedMessage {...messages.make} />
                    ))}
                </StyledButton>
              </CreatedTransactionWrapper>

              <AuthorizationKeyWrapper>
                <StyledButton
                  type="link"
                  onClick={onGetAuthorizationKey}
                  disabled={authorizationKey}
                >
                  <FormattedMessage {...messages.dontGetAuthrozationKey} />
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
          back="true"
          onClick={onPreviousStep}
        >
          <LeftOutlined /> <FormattedMessage {...messages.previous} />
        </StyledButton>
      )}
    </StyledFormActionsWrapper>
  );
}

PaymentAction.propTypes = {
  intl: intlShape.isRequired,
  onValidateFields: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
};

export default injectIntl(PaymentAction);
