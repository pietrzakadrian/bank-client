import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  nextStepAction,
  previousStepAction,
  changeInputAction,
  getAuthorizationKeyAction,
  checkRecipientAction,
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
import steps from 'components/RegisterStep/Steps';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import {
  StyledFormActionsWrapper,
  StyledButton,
  StyledError,
} from 'components/Form/Form.style';
import LoadingIndicator from 'components/LoadingIndicator';
import { getRequestName } from 'helpers';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import {
  GET_BILLS_REQUEST,
  CHECK_RECIPIENT_INCORRECT,
} from 'containers/PaymentPage/constants';
import { Input } from 'antd';
import messages from './messages';

const stateSelector = createStructuredSelector({
  currentStep: makeSelectCurrentStep(),
  isLoading: makeSelectIsLoading(getRequestName(GET_BILLS_REQUEST)),
  error: makeSelectError([
    getRequestName(GET_BILLS_REQUEST),
    getRequestName(CHECK_RECIPIENT_INCORRECT),
  ]),
  transferTitle: makeSelectTransferTitle(),
  amountMoney: makeSelectAmountMoney(),
  bills: makeSelectBills(),
  authorizationKey: makeSelectAuthorizationKey(),
  hasCreatedTransaction: makeSelectHasCreatedTransaction(),
});

export default function PaymentAction({ form }) {
  const {
    isLoading,
    currentStep,
    error,
    authorizationKey,
    hasCreatedTransaction,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangeInput = (event) => dispatch(changeInputAction(event.target));
  const onPreviousStep = () => dispatch(previousStepAction());
  const onNextStep = () => dispatch(nextStepAction());
  const onGetAuthorizationKey = () => dispatch(getAuthorizationKeyAction());
  const onCheckRecipient = () => dispatch(checkRecipientAction());
  const onCreateTransaction = () => dispatch(createTransactionAction());
  const onConfirmTransaction = () => dispatch(confirmTransactionAction());

  const onValidateFields = async () => {
    try {
      await form.validateFields();

      if (currentStep === steps.length - 1) {
        onNextStep();
      } else if (currentStep === 1) {
        onCheckRecipient();
      } else {
        onNextStep();
      }
    } catch (err) {
      Error(err);
    }
  };

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
            errored={error ? 1 : 0}
          >
            {hasCreatedTransaction ? (
              'The authorization key has been sent'
            ) : (
              <>
                <FormattedMessage {...messages.receive} /> <RightOutlined />
              </>
            )}
          </StyledButton>

          {hasCreatedTransaction && (
            <>
              <div style={{ marginTop: 10, display: 'flex' }}>
                <Input
                  onChange={(event) => onChangeInput(event)}
                  name="authorizationKey"
                  value={authorizationKey}
                  placeholder="Authorization key"
                  style={{ marginRight: 5 }}
                />

                <StyledButton
                  type="primary"
                  disabled={isLoading || !!error}
                  errored={error ? 1 : 0}
                  style={{ marginLeft: 5 }}
                  onClick={onConfirmTransaction}
                >
                  <FormattedMessage {...messages.make} />
                </StyledButton>
              </div>

              <div style={{ textAlign: 'left' }}>
                <StyledButton
                  type="link"
                  onClick={onGetAuthorizationKey}
                  disabled={authorizationKey}
                >
                  I did not receive an email with a code
                </StyledButton>
              </div>
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
  form: PropTypes.object.isRequired,
};
