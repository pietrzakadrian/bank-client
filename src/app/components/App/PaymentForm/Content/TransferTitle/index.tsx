/**
 *
 * TransferTitle
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

export function TransferTitle({ onValidateFields }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { transferTitle } = useSelector(selectPaymentPage);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(actions.changeInputAction(event.target));

  return (
    <StyledFormItem
      label={t(translations.paymentForm.content.transferTitle.label)}
      name="transferTitle"
      rules={[
        {
          required: true,
          message: t(translations.paymentForm.content.transferTitle.validation),
        },
      ]}
    >
      <Input
        onPressEnter={onValidateFields}
        onChange={onChange}
        name="transferTitle"
        value={transferTitle}
        placeholder={t(
          translations.paymentForm.content.transferTitle.placeholder,
        )}
      />
    </StyledFormItem>
  );
}
