/**
 *
 * SettingsForm
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'containers/SettingsPage/selectors';
import { getUserDataAction } from 'containers/SettingsPage/actions';
import {
  StyledFormWrapper,
  StyledForm,
  StyledFormItem,
} from 'components/Form/Form.style';
import LoadingIndicator from 'components/LoadingIndicator';
import { Input } from 'antd';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { getRequestName } from 'helpers';
import { GET_USER_DATA_REQUEST } from 'containers/SettingsPage/constants';
import LocaleToggle from 'components/LocaleToggle';
import CurrencyToggle from 'components/CurrencyToggle';

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
  isLoading: makeSelectIsLoading([getRequestName(GET_USER_DATA_REQUEST)]),
});

export default function SettingsForm() {
  const { user, isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onGetUserData = () => dispatch(getUserDataAction());

  useEffect(() => {
    onGetUserData();
  }, []);

  return (
    <StyledFormWrapper shadowed>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <StyledForm layout="vertical" name="settings">
          <StyledFormItem label="firstName" name="firstName">
            <Input name="firstName" defaultValue={user.firstName} />
          </StyledFormItem>

          <StyledFormItem tailed label="lastName" name="lastName">
            <Input name="lastName" defaultValue={user.lastName} />
          </StyledFormItem>

          <StyledFormItem tailed label="email" name="email">
            <Input name="email" defaultValue={user.email} />
          </StyledFormItem>

          <StyledFormItem tailed label="password" name="password">
            <Input.Password name="password" />
          </StyledFormItem>

          <CurrencyToggle defaultValue={user.userConfig?.currency?.name} />
        </StyledForm>
      )}

      <div>
        <LocaleToggle />
      </div>
    </StyledFormWrapper>
  );
}
