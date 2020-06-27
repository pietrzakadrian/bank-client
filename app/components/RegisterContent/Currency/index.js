import React from 'react';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem } from 'components/Form/Form.style';
import CurrencyToggle from 'components/CurrencyToggle';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrency } from 'containers/RegisterPage/selectors';
import { useSelector } from 'react-redux';
import messages from './messages';

const stateSelector = createStructuredSelector({
  currency: makeSelectCurrency(),
});

function Currency({ intl }) {
  const { currency } = useSelector(stateSelector);

  const checkCurrencySelected = () => {
    if (currency) {
      return Promise.resolve();
    }

    return Promise.reject(new Error(intl.formatMessage(messages.validation)));
  };

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="currency"
      rules={[{ validator: checkCurrencySelected }]}
    >
      <CurrencyToggle defaultValue={currency} />
    </StyledFormItem>
  );
}

Currency.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Currency);
