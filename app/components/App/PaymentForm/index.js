/**
 *
 * RegisterForm
 *
 */

import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { makeSelectCurrentStep } from 'containers/PaymentPage/selectors';
import { FormattedMessage } from 'react-intl';
import PaymentStep from 'components/App/PaymentStep';
import { StyledFormWrapper, StyledForm } from 'components/Form/styles';
import PaymentAction from 'components/App/PaymentAction';
import { checkRecipientAction } from 'containers/PaymentPage/actions';
import { nextStepAction } from 'containers/App/actions';
import {
  Bill,
  Recipient,
  AmountMoney,
  TransferTitle,
  Confirm,
} from 'components/App/PaymentContent';
import messages from './messages';

const stateSelector = createStructuredSelector({
  currentStep: makeSelectCurrentStep(),
});

export default function PaymentForm() {
  const { currentStep } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [form] = StyledForm.useForm();

  const onNextStep = () => dispatch(nextStepAction());
  const onCheckRecipient = () => dispatch(checkRecipientAction());

  useEffect(() => {
    form.validateFields(['recipientBill']);
  }, []);

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

  const steps = [
    {
      id: 1,
      title: <FormattedMessage {...messages.bill} />,
      content: <Bill />,
    },
    {
      id: 2,
      title: <FormattedMessage {...messages.recipient} />,
      content: <Recipient onValidateFields={onValidateFields} />,
    },
    {
      id: 3,
      title: <FormattedMessage {...messages.amountMoney} />,
      content: <AmountMoney onValidateFields={onValidateFields} />,
    },
    {
      id: 4,
      title: <FormattedMessage {...messages.transferTitle} />,
      content: <TransferTitle onValidateFields={onValidateFields} />,
    },
    {
      id: 5,
      title: <FormattedMessage {...messages.confirmData} />,
      content: <Confirm />,
    },
  ];

  return (
    <>
      <PaymentStep steps={steps} />

      <StyledFormWrapper shadowed="true">
        <StyledForm
          centered="true"
          form={form}
          layout="vertical"
          name="payment"
        >
          {steps[currentStep].content}
        </StyledForm>

        <PaymentAction steps={steps} onValidateFields={onValidateFields} />
      </StyledFormWrapper>
    </>
  );
}
