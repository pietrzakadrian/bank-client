/**
 *
 * EmailAddress
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { selectRegistrationPage } from 'app/containers/RegistrationPage/selectors';
import { StyledFormItem } from 'app/components/Form/styled';
import { Input, Checkbox } from 'antd';
import { actions } from 'app/containers/RegistrationPage/slice';
import { StyledInformation } from './styled';

export function EmailAddress({ onValidateFields }) {
  const { email } = useSelector(selectRegistrationPage);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onChange = event => dispatch(actions.changeInputAction(event.target));
  const onCheckEmail = (value, reject, resolve) =>
    dispatch(actions.checkEmailAction({ value, reject, resolve }));

  const checkDataProcessingIsAccepted = (_, value) => {
    if (value) {
      return Promise.resolve();
    }

    return Promise.reject(
      new Error(
        t(
          translations.registerForm.content.emailAddress.validation
            .processingPersonalData,
        ),
      ),
    );
  };

  const checkEmailAddressAlreadyExist = (_, value, callback): any =>
    new Promise((resolve, reject) =>
      onCheckEmail(value, reject, resolve),
    ).catch(() =>
      callback(
        t(
          translations.registerForm.content.emailAddress.validation
            .emailAddressExist,
        ),
      ),
    );

  return (
    <>
      <StyledFormItem
        label={t(translations.registerForm.content.emailAddress.label)}
        name="email"
        hasFeedback
        rules={[
          {
            type: 'email',
            message: t(
              translations.registerForm.content.emailAddress.validation
                .emailAddressSyntax,
            ),
          },
          {
            required: true,
            message: t(
              translations.registerForm.content.emailAddress.validation
                .emailAddressRequired,
            ),
          },
          { validator: checkEmailAddressAlreadyExist },
        ]}
      >
        <Input
          onPressEnter={onValidateFields}
          onChange={onChange}
          name="email"
          value={email}
          placeholder={t(
            translations.registerForm.content.emailAddress.placeholder,
          )}
        />
      </StyledFormItem>

      <StyledFormItem
        tailed="true"
        name="confirm-personal-data"
        valuePropName="checked"
        rules={[{ validator: checkDataProcessingIsAccepted }]}
      >
        <Checkbox>
          {t(translations.registerForm.content.emailAddress.checkboxContent)}
        </Checkbox>
      </StyledFormItem>

      <StyledInformation>
        {t(translations.registerForm.content.emailAddress.information)}
      </StyledInformation>
    </>
  );
}
