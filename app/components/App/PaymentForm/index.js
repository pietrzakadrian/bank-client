/**
 *
 * RegisterForm
 *
 */

import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { makeSelectCurrentStep } from 'containers/PaymentPage/selectors';
import steps from 'components/App/PaymentStep/Steps';
import PaymentStep from 'components/App/PaymentStep';
import { StyledFormWrapper, StyledForm } from 'components/Form/Form.style';
import PaymentAction from 'components/App/PaymentAction';

const stateSelector = createStructuredSelector({
  currentStep: makeSelectCurrentStep(),
});

export default function PaymentForm() {
  const { currentStep } = useSelector(stateSelector);
  const [form] = StyledForm.useForm();

  useEffect(() => {
    form.validateFields(['recipientBill']);
  }, []);

  return (
    <>
      <PaymentStep />

      <StyledFormWrapper shadowed>
        <StyledForm
          centered="true"
          form={form}
          layout="vertical"
          name="payment"
        >
          {steps[currentStep].content}
        </StyledForm>

        <PaymentAction form={form} />
      </StyledFormWrapper>
    </>
  );
}
