/**
 *
 * SettingsForm
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'containers/SettingsPage/selectors';
import {
  getUserDataAction,
  setUserDataAction,
} from 'containers/SettingsPage/actions';
import {
  StyledFormWrapper,
  StyledForm,
  StyledFormActionsWrapper,
  StyledFormItem,
  StyledButton,
} from 'components/Form/Form.style';
import LoadingIndicator from 'components/LoadingIndicator';
import { Input } from 'antd';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { getRequestName } from 'helpers';
import {
  GET_USER_DATA_REQUEST,
  SET_USER_DATA_REQUEST,
} from 'containers/SettingsPage/constants';
import LocaleToggle from 'components/LocaleToggle';
import CurrencyToggle from 'components/CurrencyToggle';
import { changeInputAction } from 'containers/App/actions';

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
  isLoading: makeSelectIsLoading([
    getRequestName(GET_USER_DATA_REQUEST),
    getRequestName(SET_USER_DATA_REQUEST),
  ]),
});

export default function SettingsForm() {
  const { user, isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onGetUserData = () => dispatch(getUserDataAction());
  const onSetUserData = () => dispatch(setUserDataAction());
  const onChangeInput = (event) => dispatch(changeInputAction(event.target));

  useEffect(() => {
    onGetUserData();
  }, []);

  return (
    <StyledFormWrapper shadowed>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <>
            <StyledForm
              style={{ margin: 20 }}
              layout="vertical"
              name="settings"
            >
              <StyledFormItem label="First Name" name="firstName">
                <Input
                  onChange={(event) => onChangeInput(event)}
                  name="firstName"
                  defaultValue={user.firstName}
                />
              </StyledFormItem>

              <StyledFormItem tailed label="Last Name" name="lastName">
                <Input
                  onChange={(event) => onChangeInput(event)}
                  name="lastName"
                  defaultValue={user.lastName}
                />
              </StyledFormItem>

              <StyledFormItem tailed label="E-Mail address" name="email">
                <Input
                  onChange={(event) => onChangeInput(event)}
                  name="email"
                  defaultValue={user.email}
                />
              </StyledFormItem>

              <StyledFormItem tailed label="Password" name="password">
                <Input.Password
                  onChange={(event) => onChangeInput(event)}
                  name="password"
                  placeholder="New password"
                />
              </StyledFormItem>

              <StyledFormActionsWrapper>
                <StyledButton
                  disabled={isLoading}
                  onClick={onSetUserData}
                  type="primary"
                >
                  Save data
                </StyledButton>
              </StyledFormActionsWrapper>
            </StyledForm>

            <StyledForm
              style={{ margin: 20 }}
              layout="vertical"
              name="settings-currency"
            >
              <CurrencyToggle
                label="Default currency"
                defaultValue={user.userConfig?.currency?.name}
              />

              <StyledFormItem tailed label="Language">
                <LocaleToggle />
              </StyledFormItem>
            </StyledForm>
          </>
        )}
      </div>
    </StyledFormWrapper>
  );
}
