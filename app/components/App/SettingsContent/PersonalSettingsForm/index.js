import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDataAction } from 'containers/SettingsPage/actions';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  StyledForm,
  StyledFormActionsWrapper,
  StyledButton,
} from 'components/Form/styles';
import * as _ from 'lodash';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectNewData,
  makeSelectUser,
} from 'containers/SettingsPage/selectors';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { getRequestName, hasOwnProperties } from 'helpers';
import { SET_USER_DATA_REQUEST } from 'containers/SettingsPage/constants';
import { FormattedMessage } from 'react-intl';
import LastName from './LastName';
import EmailAddress from './EmailAddress';
import Password from './Password';
import messages from './messages';

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
  newData: makeSelectNewData(),
  isLoading: makeSelectIsLoading([getRequestName(SET_USER_DATA_REQUEST)]),
});

export default function PersonalSettings({ snippets }) {
  const [form] = StyledForm.useForm();
  const { isLoading, newData, user } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onSetUserData = () => dispatch(setUserDataAction(snippets));

  const onValidateFields = async () => {
    if (_.isEmpty(newData)) {
      return;
    }

    try {
      await form.validateFields();
      onSetUserData();
    } catch (error) {
      Error(error);
    }
  };

  return (
    <StyledForm
      form={form}
      initialValues={{ lastName: user.lastName, email: user.email }}
      layout="vertical"
      name="settings"
    >
      <LastName onValidateFields={onValidateFields} />
      <EmailAddress onValidateFields={onValidateFields} />
      <Password onValidateFields={onValidateFields} />

      <StyledFormActionsWrapper>
        <StyledButton
          disabled={
            isLoading ||
            _.isEmpty(newData) ||
            !hasOwnProperties(newData, ['lastName', 'email', 'password'])
          }
          onClick={onValidateFields}
          type="primary"
        >
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <FormattedMessage {...messages.save} />
          )}
        </StyledButton>
      </StyledFormActionsWrapper>
    </StyledForm>
  );
}

PersonalSettings.propTypes = {
  snippets: PropTypes.shape({
    success: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }),
};
