/**
 *
 * Password
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledFormItem } from 'app/components/Form/styled';
import { useDispatch } from 'react-redux';
import { actions } from 'app/containers/SettingsPage/slice';
import { translations } from 'locales/i18n';
import { Input } from 'antd';

export function Password({ onValidateFields }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(actions.changeInputAction(event.target));

  const checkLengthOfCharactersInPassword = (_, value) => {
    if (!value || (value && value.length > 5)) {
      return Promise.resolve();
    }

    return Promise.reject(
      new Error(
        t(translations.settingsForm.content.personalForm.password.validation),
      ),
    );
  };

  return (
    <StyledFormItem
      rules={[{ validator: checkLengthOfCharactersInPassword }]}
      tailed="true"
      label={t(translations.settingsForm.content.personalForm.password.label)}
      name="password"
    >
      <Input.Password
        onPressEnter={onValidateFields}
        onChange={onChange}
        name="password"
        placeholder={t(
          translations.settingsForm.content.personalForm.password.placeholder,
        )}
      />
    </StyledFormItem>
  );
}
