import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDataAction } from 'containers/SettingsPage/actions';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  StyledForm,
  StyledFormActionsWrapper,
  StyledButton,
} from 'components/Form/Form.style';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectNewData,
  makeSelectUser,
} from 'containers/SettingsPage/selectors';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { getRequestName, hasOwnProperties } from 'helpers';
import { SET_USER_DATA_REQUEST } from 'containers/SettingsPage/constants';
import LastName from './LastName';
import EmailAddress from './EmailAddress';
import Password from './Password';

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
  newData: makeSelectNewData(),
  isLoading: makeSelectIsLoading([getRequestName(SET_USER_DATA_REQUEST)]),
});

export default function PersonalSettings() {
  const [form] = StyledForm.useForm();
  const { isLoading, newData } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onSetUserData = () => dispatch(setUserDataAction());

  const onValidateFields = async () => {
    try {
      await form.validateFields();
      onSetUserData();
    } catch (error) {
      Error(error);
    }
  };

  return (
    <StyledForm form={form} layout="vertical" name="settings">
      <LastName />

      <EmailAddress />

      <Password />

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
