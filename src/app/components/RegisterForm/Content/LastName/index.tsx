/**
 *
 * LastName
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { selectRegistrationPage } from 'app/containers/RegistrationPage/selectors';
import { Input } from 'antd';
import { actions } from 'app/containers/RegistrationPage/slice';
import { StyledFormItem } from 'app/components/Form/styled';
import { nameValidation } from 'utils/helpers';

export function LastName({ onValidateFields }) {
  const { lastName } = useSelector(selectRegistrationPage);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onChange = event => dispatch(actions.changeInputAction(event.target));
  const checkStringConsistsLettersOnly = (_, value) => {
    if (value && !nameValidation(value)) {
      return Promise.reject(
        new Error(
          t(
            translations.registerForm.content.lastName.validation
              .lastNameSyntax,
          ),
        ),
      );
    }

    if (!value) {
      return Promise.reject(
        new Error(
          t(
            translations.registerForm.content.lastName.validation
              .lastNameRequired,
          ),
        ),
      );
    }

    return Promise.resolve();
  };

  return (
    <StyledFormItem
      label={t(translations.registerForm.content.lastName.label)}
      name="lastName"
      rules={[{ validator: checkStringConsistsLettersOnly }]}
    >
      <Input
        onPressEnter={onValidateFields}
        onChange={onChange}
        name="lastName"
        value={lastName}
        placeholder={t(translations.registerForm.content.lastName.placeholder)}
      />
    </StyledFormItem>
  );
}
