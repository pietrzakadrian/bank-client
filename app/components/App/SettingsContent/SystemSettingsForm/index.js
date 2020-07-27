import React from 'react';
import LocaleToggle from 'components/LocaleToggle';
import CurrencyToggle from 'components/CurrencyToggle';
import PropTypes from 'prop-types';
import { makeSelectUser } from 'containers/SettingsPage/selectors';
import { createStructuredSelector } from 'reselect';
import { StyledForm, StyledFormItem } from 'components/Form/styles';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Modal from './Modal';

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
});

export default function SystemSettingsForm({ snippets }) {
  const [form] = StyledForm.useForm();
  const { user } = useSelector(stateSelector);

  return (
    <StyledForm
      initialValues={{ currency: user.userConfig?.currency.name }}
      form={form}
      layout="vertical"
      name="settings-currency"
    >
      <FormattedMessage {...messages.currencyLabel}>
        {(label) => <CurrencyToggle label={label} />}
      </FormattedMessage>

      <FormattedMessage {...messages.languageLabel}>
        {(label) => (
          <StyledFormItem tailed="true" label={label}>
            <LocaleToggle />
          </StyledFormItem>
        )}
      </FormattedMessage>

      <Modal snippets={snippets} form={form} />
    </StyledForm>
  );
}

SystemSettingsForm.propTypes = {
  snippets: PropTypes.shape({
    success: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
