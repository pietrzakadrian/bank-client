/**
 *
 * CurrencyToggle
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { StyledFormItem } from '../Form/styled';
import { Select } from 'antd';
import LoadingIndicator from '../LoadingIndicator';
import { selectApp } from 'app/containers/App/selectors';
import { actions } from 'app/containers/App/slice';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';

interface Props {
  label?: string;
  tailed?: string | undefined;
  onSelect?: any;
}

export function CurrencyToggle({ label, tailed, onSelect }: Props) {
  const { t } = useTranslation();
  const { currencies } = useSelector(selectApp);
  const isLoading = useSelector(selectLoading('global/getCurrencies'));

  const dispatch = useDispatch();

  const onGetCurrencies = () =>
    !currencies?.length && dispatch(actions.getCurrenciesRequestAction());

  return (
    <StyledFormItem
      label={label}
      tailed={tailed}
      name="currency"
      rules={[
        {
          required: true,
          message: t(translations.currency.validation),
        },
      ]}
    >
      <Select
        onSelect={onSelect}
        onClick={onGetCurrencies}
        notFoundContent={isLoading ? <LoadingIndicator /> : null}
        placeholder={t(translations.currency.placeholder)}
      >
        {currencies?.map(currency => (
          <Select.Option key={currency.uuid} value={currency.uuid}>
            {currency.name}
          </Select.Option>
        ))}
      </Select>
    </StyledFormItem>
  );
}
