import React from 'react';
import LocaleToggle from 'components/LocaleToggle';
import CurrencyToggle from 'components/CurrencyToggle';
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
import { StyledModal } from '../../Modal/Modal.style';

const stateSelector = createStructuredSelector({
  currencies: makeSelectCurrencies(),
  user: makeSelectUser(),
  newData: makeSelectNewData(),
  isOpenedModal: makeSelectIsOpenedModal(),
  isLoading: makeSelectIsLoading([getRequestName(SET_USER_DATA_REQUEST)]),
});

export default function SystemSettingsForm() {
  const [form] = StyledForm.useForm();
  const dispatch = useDispatch();
  const { user, isLoading, isOpenedModal, currencies, newData } = useSelector(
    stateSelector,
  );

  const onToggleModal = () => {
    form.resetFields();
    dispatch(toggleModalAction());
  };
  const onSetUserData = () => dispatch(setUserDataAction());

  return (
    <StyledForm form={form} layout="vertical" name="settings-currency">
      <CurrencyToggle
        label="Default currency"
        defaultValue={user.userConfig?.currency?.name}
      />

      <StyledFormItem tailed="true" label="Language">
        <LocaleToggle />
      </StyledFormItem>

      <StyledModal
        title="Change the default currency"
        visible={isOpenedModal}
        onOk={onSetUserData}
        onCancel={onToggleModal}
        footer={[
          <Button key="back" onClick={onToggleModal}>
            Cancel
          </Button>,
          <Button
            key="submit"
            disabled={isLoading}
            type="primary"
            onClick={onSetUserData}
          >
            Confirm
          </Button>,
        ]}
      >
        <p>
          You are trying to change your default currency to{' '}
          <strong>
            {
              currencies.find((currency) => currency.uuid === newData?.currency)
                ?.name
            }
          </strong>
          ? This will convert the available funds in the dashboard.
        </p>
        <p>Do you confirm the change approval?</p>
      </StyledModal>
    </StyledForm>
  );
}
