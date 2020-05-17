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
import { intlShape, injectIntl } from 'react-intl';
import {
  StyledLoadingOutlined,
  StyledSpin,
} from 'components/RegisterForm/RegisterForm.style';
import { StyledFormItem } from 'components/Form/Form.style';
import messages from './messages';

const stateSelector = createStructuredSelector({
  currencies: makeSelectCurrencies(),
  isLoading: makeSelectIsLoading(),
});

function Currency({ intl }) {
  const { isLoading, currencies } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const spinIcon = <StyledLoadingOutlined spin />;

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="currency"
      rules={[
        { required: true, message: intl.formatMessage(messages.validation) },
      ]}
    >
      <Select
        onClick={() => !currencies.length && dispatch(getCurrenciesAction())}
        notFoundContent={isLoading ? <StyledSpin indicator={spinIcon} /> : null}
        onSelect={(currency) => dispatch(selectCurrencyAction(currency))}
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
