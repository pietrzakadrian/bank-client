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
import {
  makeSelectNewData,
  makeSelectUser,
} from 'containers/SettingsPage/selectors';
import { changeInputAction, checkEmailAction } from 'containers/App/actions';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { getRequestName, hasOwnProperties, nameValidation } from 'helpers';
import { SET_USER_DATA_REQUEST } from 'containers/SettingsPage/constants';
import LoadingIndicator from 'components/LoadingIndicator';

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
  newData: makeSelectNewData(),
  isLoading: makeSelectIsLoading([getRequestName(SET_USER_DATA_REQUEST)]),
});

export default function PersonalSettings() {
  const [form] = StyledForm.useForm();
  const { user, isLoading, newData } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onSetUserData = () => dispatch(setUserDataAction());
  const onChangeInput = (event) => dispatch(changeInputAction(event.target));
  const onCheckEmail = (value, reject, resolve) =>
    dispatch(checkEmailAction(value, reject, resolve));

  const checkStringConsistsLettersOnly = (_, value) => {
    if (value && !nameValidation(value)) {
      return Promise.reject(new Error('not ok'));
    }

    return Promise.resolve();
  };

  const onValidateFields = async () => {
    try {
      await form.validateFields();
      onSetUserData();
    } catch (error) {
      Error(error);
    }
  };

  const checkEmailAddressAlreadyExist = (_, value, callback) =>
    new Promise((resolve, reject) => {
      if (value !== user.email) {
        onCheckEmail(value, reject, resolve);
      } else {
        resolve();
      }
    }).catch(() => callback('not ok'));

  const checkLengthOfCharactersInPassword = (_, value) => {
    if (!value || (value && value.length > 5)) {
      return Promise.resolve();
    }

    return Promise.reject(new Error('not ok2'));
  };

  return (
    <StyledForm form={form} layout="vertical" name="settings">
      <StyledFormItem
        rules={[{ validator: checkStringConsistsLettersOnly }]}
        label="First Name"
        name="firstName"
      >
        <Input
          onChange={(event) => onChangeInput(event)}
          name="firstName"
          defaultValue={user.firstName}
        />
      </StyledFormItem>

      <StyledFormItem
        tailed="true"
        rules={[{ validator: checkStringConsistsLettersOnly }]}
        label="Last Name"
        name="lastName"
      >
        <Input
          onChange={(event) => onChangeInput(event)}
          name="lastName"
          defaultValue={user.lastName}
        />
      </StyledFormItem>

      <StyledFormItem
        label="E-Mail address"
        name="email"
        tailed="true"
        hasFeedback
        rules={[
          {
            type: 'email',
            message: 'test1',
          },
          {
            asyncValidator: checkEmailAddressAlreadyExist,
          },
        ]}
      >
        <Input
          onChange={(event) => onChangeInput(event)}
          name="email"
          defaultValue={user.email}
        />
      </StyledFormItem>

      <StyledFormItem
        rules={[{ validator: checkLengthOfCharactersInPassword }]}
        tailed="true"
        label="Password"
        name="password"
      >
        <Input.Password
          onChange={(event) => onChangeInput(event)}
          name="password"
          placeholder="New password"
        />
      </StyledFormItem>

      <StyledFormActionsWrapper>
        <StyledButton
          disabled={
            isLoading ||
            !hasOwnProperties(newData, [
              'firstName',
              'lastName',
              'email',
              'password',
            ])
          }
          onClick={onValidateFields}
          type="primary"
        >
          {isLoading ? <LoadingIndicator /> : 'Save data'}
        </StyledButton>
      </StyledFormActionsWrapper>
    </StyledForm>
  );
}
