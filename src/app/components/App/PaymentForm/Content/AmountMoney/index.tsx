/**
 *
 * AmountMoney
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledFormItem } from 'app/components/Form/styled';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'app/containers/PaymentPage/slice';
import { translations } from 'locales/i18n';
import { Input } from 'antd';
import { selectPaymentPage } from 'app/containers/PaymentPage/selectors';

export function AmountMoney({ onValidateFields }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { amountMoney, senderBill } = useSelector(selectPaymentPage);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(actions.changeInputAction(event.target));

  const checkCorrectAmountMoney = (_, value) => {
    if (!value && value !== 0) {
      return Promise.reject(
        new Error(
          t(
            translations.paymentForm.content.amountMoney.validation
              .requiredValidation,
          ),
        ),
      );
    }

    if (value && +value > +senderBill.amountMoney) {
      return Promise.reject(
        new Error(
          t(
            translations.paymentForm.content.amountMoney.validation
              .valueValidation,
          ),
        ),
      );
    }

    if (+value === 0 || +value < 0) {
      return Promise.reject(
        new Error(
          t(
            translations.paymentForm.content.amountMoney.validation
              .zeroLessValidation,
          ),
        ),
      );
    }

    return Promise.resolve();
  };

  return (
    <StyledFormItem
      label={t(translations.paymentForm.content.amountMoney.label)}
      name="amountMoney"
      rules={[{ validator: checkCorrectAmountMoney }]}
    >
      <Input
        onPressEnter={onValidateFields}
        type="number"
        onChange={onChange}
        name="amountMoney"
        value={amountMoney}
        placeholder={t(
          translations.paymentForm.content.amountMoney.placeholder,
        )}
      />
    </StyledFormItem>
  );
}
