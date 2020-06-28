import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDataAction } from 'containers/SettingsPage/actions';
import {
  StyledForm,
  StyledFormActionsWrapper,
  StyledFormItem,
  StyledButton,
} from 'components/Form/Form.style';
import { createStructuredSelector } from 'reselect';
import { Input } from 'antd';
import { changeInputAction } from 'containers/App/actions';
import { makeSelectUser } from 'containers/SettingsPage/selectors';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { getRequestName } from 'helpers';
import { SET_USER_DATA_REQUEST } from 'containers/SettingsPage/constants';
import LoadingIndicator from 'components/LoadingIndicator';

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
  isLoading: makeSelectIsLoading([getRequestName(SET_USER_DATA_REQUEST)]),
});

export default function PersonalSettings() {
  const { user, isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onSetUserData = () => dispatch(setUserDataAction());
  const onChangeInput = (event) => dispatch(changeInputAction(event.target));

  return (
    <StyledForm layout="vertical" name="settings">
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
          {isLoading ? <LoadingIndicator /> : 'Save data'}
        </StyledButton>
      </StyledFormActionsWrapper>
    </StyledForm>
  );
}
