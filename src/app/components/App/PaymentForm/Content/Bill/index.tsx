/**
 *
 * Bill
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledFormItem } from 'app/components/Form/styled';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'app/containers/PaymentPage/slice';
import { actions as appActions } from 'app/containers/App/slice';

import { translations } from 'locales/i18n';
import { Select } from 'antd';
import { selectPaymentPage } from 'app/containers/PaymentPage/selectors';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';
import LoadingIndicator from 'app/components/LoadingIndicator';

export function Bill() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { bills } = useSelector(selectPaymentPage);
  const isLoading = useSelector(selectLoading('global/getBills'));

  const onGetBills = () => dispatch(appActions.getBillsRequestAction());
  const onSelectSenderBill = bill =>
    dispatch(actions.selectSenderBillAction(bill));

  return (
    <StyledFormItem
      label={t(translations.paymentForm.content.bill.label)}
      name="senderBill"
      rules={[
        {
          required: true,
          message: t(translations.paymentForm.content.bill.validation),
        },
      ]}
    >
      <Select
        onClick={onGetBills}
        notFoundContent={isLoading ? <LoadingIndicator /> : null}
        onSelect={bill => onSelectSenderBill(bill)}
        placeholder={t(translations.paymentForm.content.bill.placeholder)}
      >
        {bills.map(({ uuid, accountBillNumber, amountMoney, currency }) => (
          <Select.Option key={uuid} value={uuid}>
            <div>{accountBillNumber}</div>
            <div>
              {amountMoney} {currency.name}
            </div>
          </Select.Option>
        ))}
      </Select>
    </StyledFormItem>
  );
}
