/**
 *
 * SystemForm
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledForm, StyledFormItem } from 'app/components/Form/styled';
import { LocaleToggle } from 'app/components/LocaleToggle';
import { translations } from 'locales/i18n';
import { CurrencyToggle } from 'app/components/CurrencyToggle';
import { selectApp } from 'app/containers/App/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from './Modal';
import { actions } from 'app/containers/SettingsPage/slice';

export function SystemForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [form] = StyledForm.useForm();
  const { user } = useSelector(selectApp);

  const onSelect = uuid => dispatch(actions.selectCurrencyAction(uuid));

  return (
    <StyledForm
      initialValues={{ currency: user.userConfig?.currency?.name }}
      form={form}
      layout="vertical"
      name="settings-currency"
    >
      <CurrencyToggle
        onSelect={onSelect}
        label={t(translations.settingsForm.content.systemForm.currency.label)}
      />

      <StyledFormItem
        tailed="true"
        label={t(translations.settingsForm.content.systemForm.language.label)}
      >
        <LocaleToggle />
      </StyledFormItem>

      <Modal form={form} />
    </StyledForm>
  );
}
