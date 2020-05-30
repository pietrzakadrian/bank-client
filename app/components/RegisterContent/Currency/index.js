import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Select } from 'antd';
import { makeSelectCurrencies } from 'containers/RegisterPage/selectors';
import { makeSelectIsLoading } from 'containers/App/selectors';
import {
  getCurrenciesAction,
  selectCurrencyAction,
} from 'containers/RegisterPage/actions';
import { intlShape, injectIntl } from 'react-intl';

import { StyledFormItem } from 'components/Form/Form.style';
import LoadingIndicator from 'components/LoadingIndicator';
import messages from './messages';

const stateSelector = createStructuredSelector({
  currencies: makeSelectCurrencies(),
  isLoading: makeSelectIsLoading(),
});

function Currency({ intl }) {
  const { isLoading, currencies } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onGetCurrencies = () =>
    !currencies.length && dispatch(getCurrenciesAction());
  const onSelectCurrency = (currency) =>
    dispatch(selectCurrencyAction(currency));

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="currency"
      rules={[
        { required: true, message: intl.formatMessage(messages.validation) },
      ]}
    >
      <Select
        onClick={onGetCurrencies}
        notFoundContent={isLoading ? <LoadingIndicator /> : null}
        onSelect={onSelectCurrency}
        placeholder={intl.formatMessage(messages.placeholder)}
      >
        {currencies.map((currency) => (
          <Select.Option key={currency.uuid} value={currency.uuid}>
            {currency.name}
          </Select.Option>
        ))}
      </Select>
    </StyledFormItem>
  );
}

Currency.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Currency);
