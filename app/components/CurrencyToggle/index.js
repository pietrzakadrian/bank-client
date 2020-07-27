import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { makeSelectCurrencies } from 'containers/App/selectors';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import {
  getCurrenciesAction,
  selectCurrencyAction,
} from 'containers/App/actions';
import { intlShape, injectIntl } from 'react-intl';
import LoadingIndicator from 'components/LoadingIndicator';
import { GET_CURRENCIES_REQUEST } from 'containers/App/constants';
import { getRequestName } from 'helpers';
import { StyledFormItem } from 'components/Form/styles';
import messages from './messages';

const stateSelector = createStructuredSelector({
  currencies: makeSelectCurrencies(),
  isLoading: makeSelectIsLoading(getRequestName(GET_CURRENCIES_REQUEST)),
});

/*
  This component should not be wrapped in Form.Item, but it must stay so because validation then works.
  Dependent variables have been moved to props.
  */

function CurrencyToggle({ intl, label, tailed }) {
  const { isLoading, currencies } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onGetCurrencies = () =>
    !currencies?.length && dispatch(getCurrenciesAction());
  const onSelectCurrency = (currency) =>
    dispatch(selectCurrencyAction(currency));

  return (
    <StyledFormItem
      label={label}
      tailed={tailed}
      name="currency"
      rules={[
        {
          required: true,
          message: intl.formatMessage(messages.validation),
        },
      ]}
    >
      <Select
        onClick={onGetCurrencies}
        notFoundContent={isLoading ? <LoadingIndicator /> : null}
        onSelect={onSelectCurrency}
        placeholder={intl.formatMessage(messages.placeholder)}
        name="currency"
      >
        {currencies?.map((currency) => (
          <Select.Option key={currency.uuid} value={currency.uuid}>
            {currency.name}
          </Select.Option>
        ))}
      </Select>
    </StyledFormItem>
  );
}

CurrencyToggle.propTypes = {
  intl: intlShape.isRequired,
  label: PropTypes.string,
  tailed: PropTypes.string,
};

export default injectIntl(CurrencyToggle);
