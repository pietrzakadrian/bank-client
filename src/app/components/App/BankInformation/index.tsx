/**
 *
 * BankInformation
 *
 */
import React from 'react';
import { Widget } from '../Widget';
import { translations } from 'locales/i18n';
import { useTranslation } from 'react-i18next';

export function BankInformation() {
  const { t } = useTranslation();

  return <Widget description={t(translations.bankInformation)} />;
}
