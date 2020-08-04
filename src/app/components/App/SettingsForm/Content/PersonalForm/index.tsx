/**
 *
 * PersonalForm
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledForm,
  StyledFormActionsWrapper,
  StyledButton,
} from 'app/components/Form/styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectSettingsPage } from 'app/containers/SettingsPage/selectors';
import { actions } from 'app/containers/SettingsPage/slice';
import _ from 'lodash';
import { hasOwnProperties } from 'utils/helpers';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';
import LoadingIndicator from 'app/components/LoadingIndicator';
import { translations } from 'locales/i18n';
import { LastName } from './LastName';
import { EmailAddress } from './EmailAddress';
import { Password } from './Password';

export function PersonalForm() {
  const [form] = StyledForm.useForm();
  const { newData, user } = useSelector(selectSettingsPage);
  const isLoading = useSelector(selectLoading('settingsPage/setUserData'));
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSetUserData = () => dispatch(actions.setUserDataRequestAction());
  const onValidateFields = async () => {
    if (_.isEmpty(newData)) {
      return;
    }

    try {
      await form.validateFields();
      onSetUserData();
    } catch (error) {}
  };

  return (
    <StyledForm
      form={form}
      initialValues={{ lastName: user?.lastName, email: user?.email }}
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
            t(translations.settingsForm.content.personalForm.save)
          )}
        </StyledButton>
      </StyledFormActionsWrapper>
    </StyledForm>
  );
}
