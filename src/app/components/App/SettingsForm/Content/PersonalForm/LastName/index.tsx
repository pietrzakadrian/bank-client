/**
 *
 * LastName
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledFormItem } from 'app/components/Form/styled';
import { useDispatch } from 'react-redux';
import { actions } from 'app/containers/SettingsPage/slice';
import { translations } from 'locales/i18n';
import { Input } from 'antd';
import { nameValidation } from 'utils/helpers';

export function LastName({ onValidateFields }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(actions.changeInputAction(event.target));

  const checkStringConsistsLettersOnly = (_, value) => {
    if (value && !nameValidation(value)) {
      return Promise.reject(
        new Error(
          t(translations.settingsForm.content.personalForm.lastName.validation),
        ),
      );
    }

    return Promise.resolve();
  };

  return (
    <StyledFormItem
      rules={[{ validator: checkStringConsistsLettersOnly }]}
      label={t(translations.settingsForm.content.personalForm.lastName.label)}
      name="lastName"
    >
      <Input
        onPressEnter={onValidateFields}
        placeholder={t(
          translations.settingsForm.content.personalForm.lastName.placeholder,
        )}
        onChange={onChange}
        name="lastName"
      />
    </StyledFormItem>
  );
}
