import React from 'react';
import LocaleToggle from 'components/LocaleToggle';
import CurrencyToggle from 'components/CurrencyToggle';
import PropTypes from 'prop-types';
import {
  makeSelectUser,
  makeSelectIsOpenedModal,
  makeSelectNewData,
} from 'containers/SettingsPage/selectors';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { getRequestName } from 'helpers';
import { SET_USER_DATA_REQUEST } from 'containers/SettingsPage/constants';
import { StyledForm, StyledFormItem } from 'components/Form/Form.style';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { toggleModalAction } from 'containers/App/actions';
import { setUserDataAction } from 'containers/SettingsPage/actions';
import { makeSelectCurrencies } from 'containers/App/selectors';
import { StyledModal } from 'components/App/Modal/Modal.style';
import LoadingIndicator from 'components/LoadingIndicator';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const stateSelector = createStructuredSelector({
  currencies: makeSelectCurrencies(),
  user: makeSelectUser(),
  newData: makeSelectNewData(),
  isOpenedModal: makeSelectIsOpenedModal(),
  isLoading: makeSelectIsLoading([getRequestName(SET_USER_DATA_REQUEST)]),
});

export default function SystemSettingsForm({ snippets }) {
  const [form] = StyledForm.useForm();
  const dispatch = useDispatch();
  const { user, isLoading, isOpenedModal, currencies, newData } = useSelector(
    stateSelector,
  );

  const onToggleModal = () => {
    form.resetFields();
    dispatch(toggleModalAction());
  };
  const onSetUserData = () => dispatch(setUserDataAction(snippets));

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

      <FormattedMessage {...messages.title}>
        {(title) => (
          <StyledModal
            centered="true"
            title={title}
            visible={isOpenedModal}
            onOk={onSetUserData}
            onCancel={onToggleModal}
            footer={[
              <Button key="back" onClick={onToggleModal}>
                <FormattedMessage {...messages.cancel} />
              </Button>,
              <Button
                key="submit"
                disabled={isLoading}
                type="primary"
                onClick={onSetUserData}
              >
                {isLoading ? (
                  <LoadingIndicator />
                ) : (
                  <FormattedMessage {...messages.confirm} />
                )}
              </Button>,
            ]}
          >
            <p>
              <FormattedMessage
                {...messages.tryingChangeDefaultCurrencyPartOne}
              />{' '}
              <strong>
                {
                  currencies?.find(
                    (currency) => currency?.uuid === newData?.currency,
                  )?.name
                }
              </strong>
              <FormattedMessage
                {...messages.tryingChangeDefaultCurrencyPartTwo}
              />
            </p>
            <p>
              <FormattedMessage
                {...messages.tryingChangeDefaultCurrencyConfirm}
              />
            </p>
          </StyledModal>
        )}
      </FormattedMessage>
    </StyledForm>
  );
}

SystemSettingsForm.propTypes = {
  snippets: PropTypes.shape({
    success: PropTypes.shape({
      title: PropTypes.string.isRequired,
      descritpion: PropTypes.string.isRequired,
    }),
  }),
};
