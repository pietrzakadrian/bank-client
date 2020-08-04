/**
 *
 * Recipient
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledFormItem } from 'app/components/Form/styled';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'app/containers/PaymentPage/slice';
import { translations } from 'locales/i18n';
import { Input, AutoComplete, Tooltip } from 'antd';
import { selectPaymentPage } from 'app/containers/PaymentPage/selectors';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { numberValidation } from 'utils/helpers';

export function Recipient({ onValidateFields }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { recipients } = useSelector(selectPaymentPage);

  const onChange = (name, value) =>
    dispatch(actions.changeInputAction({ name, value }));
  const onSearchRecipient = (value: string) => {
    if (value) {
      dispatch(actions.searchRecipientRequestAction(value));
    }
  };

  const checkStringConsistsNumbersOnly = (_, value) => {
    if (value && !numberValidation(value)) {
      return Promise.reject(
        new Error(
          t(
            translations.paymentForm.content.recipient.validation
              .recipientSyntax,
          ),
        ),
      );
    }

    if (!value) {
      return Promise.reject(
        new Error(
          t(
            translations.paymentForm.content.recipient.validation
              .recipientRequired,
          ),
        ),
      );
    }

    return Promise.resolve();
  };

  const options = recipients?.data?.map(recipient => ({
    label: (
      <>
        <div>
          {recipient?.user.firstName} {recipient?.user.lastName}
        </div>
        <div>{recipient?.accountBillNumber}</div>
      </>
    ),
    value: recipient?.accountBillNumber.replace(/ /g, ''),
  }));

  return (
    <StyledFormItem
      label={t(translations.paymentForm.content.recipient.label)}
      name="recipientBill"
      rules={[{ validator: checkStringConsistsNumbersOnly }]}
    >
      <AutoComplete
        onSearch={onSearchRecipient}
        onChange={value => onChange('recipientAccountBillNumber', value)}
        options={options}
        notFoundContent={
          <div>
            {t(translations.paymentForm.content.recipient.notFoundContent)}
          </div>
        }
      >
        <Input
          onPressEnter={onValidateFields}
          maxLength={26}
          placeholder={t(
            translations.paymentForm.content.recipient.placeholder,
          )}
          suffix={
            <Tooltip
              title={t(translations.paymentForm.content.recipient.tooltip)}
            >
              <QuestionCircleOutlined />
            </Tooltip>
          }
        />
      </AutoComplete>
    </StyledFormItem>
  );
}
