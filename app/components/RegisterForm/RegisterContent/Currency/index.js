import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Select } from 'antd';
import {
  makeSelectCurrencies,
  makeSelectIsLoading,
} from 'containers/RegisterPage/selectors';
import {
  getCurrenciesAction,
  selectCurrencyAction,
} from 'containers/RegisterPage/actions';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import {
  StyledFormItem,
  StyledLoadingOutlined,
  StyledSpin,
} from '../../RegisterForm.style';

const stateSelector = createStructuredSelector({
  currencies: makeSelectCurrencies(),
  isLoading: makeSelectIsLoading(),
});

export default function Currency() {
  const { isLoading, currencies } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const spinIcon = <StyledLoadingOutlined spin />;

  return (
    <StyledFormItem
      label="Currency"
      name="currency"
      rules={[{ required: true, message: 'Currency is required.' }]}
    >
      <Select
        onClick={() => !currencies.length && dispatch(getCurrenciesAction())}
        notFoundContent={isLoading ? <StyledSpin indicator={spinIcon} /> : null}
        onSelect={(currency) => dispatch(selectCurrencyAction(currency))}
        placeholder="Select currency"
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
