/**
 *
 * PaymentForm
 *
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPaymentPage } from 'app/containers/PaymentPage/selectors';
import { StyledForm, StyledFormWrapper } from 'app/components/Form/styled';
import { actions } from 'app/containers/PaymentPage/slice';
import { PaymentStep } from '../PaymentStep';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { Recipient, AmountMoney, TransferTitle, Bill } from './Content';
import { Action } from './Action';

export function PaymentForm() {
  const { currentStep } = useSelector(selectPaymentPage);
  const dispatch = useDispatch();
  const [form] = StyledForm.useForm();
  const { t } = useTranslation();

  const onNextStep = () => dispatch(actions.nextStepAction());
  const onCheckRecipient = () => dispatch(actions.checkRecipientAction());

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
      title: t(translations.paymentForm.bill),
      content: <Bill />,
    },
    {
      id: 2,
      title: t(translations.paymentForm.recipient),
      content: <Recipient onValidateFields={onValidateFields} />,
    },
    {
      id: 3,
      title: t(translations.paymentForm.amountMoney),
      content: <AmountMoney onValidateFields={onValidateFields} />,
    },
    {
      id: 4,
      title: t(translations.paymentForm.transferTitle),
      content: <TransferTitle onValidateFields={onValidateFields} />,
    },
    {
      id: 5,
      title: t(translations.paymentForm.confirmData),
      // content: <Confirm />,
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

        <Action steps={steps} onValidateFields={onValidateFields} />
      </StyledFormWrapper>
    </>
  );
}
