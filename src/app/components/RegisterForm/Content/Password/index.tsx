/**
 *
 * Password
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { selectRegistrationPage } from 'app/containers/RegistrationPage/selectors';
import { StyledFormItem } from 'app/components/Form/styled';
import { Input } from 'antd';
import { actions } from 'app/containers/RegistrationPage/slice';

// todo: create interface

export function Password({ onValidateFields }) {
  const { password } = useSelector(selectRegistrationPage);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onChange = event => dispatch(actions.changeInputAction(event.target));
  const checkLengthOfCharactersInPassword = (_, value) => {
    if (value && value.length > 5) {
      return Promise.resolve();
    }

    return Promise.reject(
      new Error(
        t(
          translations.registerForm.content.password.validation
            .passwordNotEnoughCharacters,
        ),
      ),
    );
  };

  return (
    <StyledFormItem
      label={t(translations.registerForm.content.password.label)}
      name="password"
      rules={[{ validator: checkLengthOfCharactersInPassword }]}
    >
      <Input.Password
        onPressEnter={onValidateFields}
        onChange={onChange}
        name="password"
        value={password}
        placeholder={t(translations.registerForm.content.password.placeholder)}
      />
    </StyledFormItem>
  );
}
