/**
 *
 * Currency
 *
 * This should be wrapped in Form.Item, but then validation of this field does not work.
 * That's why Form.Item has been added to CurrencyToggle.
 * This component was created because I wanted to keep the component structure.
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { CurrencyToggle } from 'app/components/CurrencyToggle';
import { useDispatch } from 'react-redux';
import { actions } from 'app/containers/RegistrationPage/slice';

export function Currency() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onSelect = uuid => dispatch(actions.selectCurrencyAction(uuid));

  return (
    <CurrencyToggle
      onSelect={onSelect}
      label={t(translations.registerForm.content.currency.label)}
    />
  );
}
