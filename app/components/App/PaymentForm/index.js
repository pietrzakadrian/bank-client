/**
 *
 * RegisterForm
 *
 */

import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import {
  makeSelectCurrentStep,
  makeSelectHasConfirmedTransaction,
} from 'containers/PaymentPage/selectors';
import steps from 'components/App/PaymentStep/Steps';
import PaymentStep from 'components/App/PaymentStep';
import { StyledFormWrapper, StyledForm } from 'components/Form/Form.style';
import PaymentAction from 'components/App/PaymentAction';
import { SuccessfulResult } from '../PaymentContent';

const stateSelector = createStructuredSelector({
  currentStep: makeSelectCurrentStep(),
  hasConfirmedTransaction: makeSelectHasConfirmedTransaction(),
});

export default function PaymentForm() {
  const { currentStep, hasConfirmedTransaction } = useSelector(stateSelector);
  const [form] = StyledForm.useForm();

  useEffect(() => {
    form.validateFields(['recipientBill']);
  }, []);

  return (
    <>
      <PaymentStep />

      <StyledFormWrapper shadowed>
        {hasConfirmedTransaction ? (
          <SuccessfulResult />
        ) : (
          <StyledForm form={form} layout="vertical" name="payment">
            {steps[currentStep].content}
          </StyledForm>
        )}

        {!hasConfirmedTransaction && <PaymentAction form={form} />}
      </StyledFormWrapper>
    </>
  );
}
