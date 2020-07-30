/**
 *
 * PinCode
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { selectPinCode } from 'app/containers/LoginPage/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'app/containers/App/slice';
import { translations } from 'locales/i18n';
import { StyledFormItem } from 'app/components/Form/styled';
import { Input } from 'antd';

export function PinCode({ onValidateFields }) {
  const { t } = useTranslation();
  const pinCode = useSelector(selectPinCode);
  const dispatch = useDispatch();

  const onChangePinCode = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(actions.changeInputAction(event.target));

  return (
    <StyledFormItem
      label={t(translations.loginForm.pinCode.label)}
      name="pinCode"
      rules={[
        {
          required: true,
          message: t(translations.loginForm.pinCode.validation),
        },
      ]}
    >
      <Input
        data-key="loginPage"
        type="number"
        max={10e5 - 1}
        min="0"
        onPressEnter={onValidateFields}
        onChange={onChangePinCode}
        name="pinCode"
        value={pinCode}
        placeholder={t(translations.loginForm.pinCode.placeholder)}
      />
    </StyledFormItem>
  );
}
