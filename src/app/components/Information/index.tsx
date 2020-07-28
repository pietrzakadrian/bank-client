/**
 *
 * Information
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledInformation } from './styled';
import { translations } from 'locales/i18n';

export function Information() {
  const { t } = useTranslation();

  return (
    <StyledInformation>{t(translations.information.content)}</StyledInformation>
  );
}
