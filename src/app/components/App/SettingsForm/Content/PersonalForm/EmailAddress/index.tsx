/**
 *
 * EmailAddress
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledFormItem } from 'app/components/Form/styled';
import { useDispatch } from 'react-redux';
import { actions } from 'app/containers/SettingsPage/slice';
import { translations } from 'locales/i18n';
import { Input } from 'antd';
import { actions as appActions } from 'app/containers/App/slice';

export function EmailAddress({ onValidateFields }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(actions.changeInputAction(event.target));

  const onCheckEmail = (value, reject, resolve) =>
    dispatch(appActions.checkEmailRequestAction({ value, reject, resolve }));

  const checkEmailAddressAlreadyExist = (_, value): any =>
    new Promise((resolve, reject) =>
      onCheckEmail(value, reject, resolve),
    ).catch(() =>
      Promise.reject(
        t(
          translations.settingsForm.content.personalForm.emailAddress.validation
            .emailAddressExist,
        ),
      ),
    );

  return (
    <StyledFormItem
      label={t(
        translations.settingsForm.content.personalForm.emailAddress.label,
      )}
      name="email"
      tailed="true"
      hasFeedback
      rules={[
        {
          type: 'email',
          message: t(
            translations.settingsForm.content.personalForm.emailAddress
              .validation.emailAddressSyntax,
          ),
        },
        {
          validator: checkEmailAddressAlreadyExist,
        },
      ]}
    >
      <Input
        onPressEnter={onValidateFields}
        onChange={onChange}
        name="email"
        placeholder={t(
          translations.settingsForm.content.personalForm.emailAddress
            .placeholder,
        )}
      />
    </StyledFormItem>
  );
}
