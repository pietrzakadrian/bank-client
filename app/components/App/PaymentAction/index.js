import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  nextStepAction,
  previousStepAction,
  changeInputAction,
  getAuthorizationKeyAction,
} from 'containers/PaymentPage/actions';
import { makeSelectError } from 'providers/ErrorProvider/selectors';
import {
  makeSelectCurrentStep,
  makeSelectTransferTitle,
  makeSelectAmountMoney,
  makeSelectBills,
  makeSelectSenderBill,
  makeSelectAuthorizationKey,
} from 'containers/PaymentPage/selectors';
import steps from 'components/RegisterStep/Steps';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import {
  StyledFormActionsWrapper,
  StyledButton,
} from 'components/Form/Form.style';
import LoadingIndicator from 'components/LoadingIndicator';
import { getRequestName } from 'helpers';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { GET_BILLS_REQUEST } from 'containers/PaymentPage/constants';
import { Input } from 'antd';
import messages from './messages';

const stateSelector = createStructuredSelector({
  currentStep: makeSelectCurrentStep(),
  isLoading: makeSelectIsLoading(getRequestName(GET_BILLS_REQUEST)),
  error: makeSelectError([getRequestName(GET_BILLS_REQUEST)]),
  transferTitle: makeSelectTransferTitle(),
  amountMoney: makeSelectAmountMoney(),
  bills: makeSelectBills(),
  senderBill: makeSelectSenderBill(),
  authorizationKey: makeSelectAuthorizationKey(),
});

export default function PaymentAction({ form }) {
  const {
    isLoading,
    currentStep,
    error,
    amountMoney,
    bills,
    authorizationKey,
    senderBill,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [hasCreatedTransaction, setHasCreatedTransaction] = useState(false);
  const selectedBill = bills.find((bill) => bill.uuid === senderBill);

  const onChangeInput = (event) => dispatch(changeInputAction(event.target));
  const onPreviousStep = () => dispatch(previousStepAction());
  const onNextStep = () => dispatch(nextStepAction());
  const onGetAuthorizationKey = () => dispatch(getAuthorizationKeyAction());

  const onValidateFields = async () => {
    try {
      await form.validateFields();

      if (currentStep === steps.length - 1) {
        onNextStep();
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
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <>
              <FormattedMessage {...messages.next} /> <RightOutlined />
            </>
          )}
        </StyledButton>
      )}

      {currentStep === steps.length - 1 && (
        <>
          <div>
            Przelew wykonujesz ze swojego rachunku:{' '}
            {selectedBill.accountBillNumber} {selectedBill.amountMoney}{' '}
            {selectedBill.currency.name}
          </div>

          <div>
            Po wykonaniu przelewu, pozostanie Ci na koncie:{' '}
            {Number(selectedBill.amountMoney) - Number(amountMoney)}{' '}
            {selectedBill.currency.name}
          </div>

          <div>Wykonujesz przelew do:</div>

          <StyledButton
            onClick={() => setHasCreatedTransaction(true)}
            type="primary"
            disabled={isLoading || !!error || hasCreatedTransaction}
            errored={error ? 1 : 0}
          >
            <FormattedMessage {...messages.receive} /> <RightOutlined />
          </StyledButton>

          {hasCreatedTransaction && (
            <>
              <p>The authorization key has been sent</p>

              <div style={{ display: 'flex' }}>
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
                >
                  <FormattedMessage {...messages.make} />
                </StyledButton>
              </div>

              <div>
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
