/**
 *
 * Privacy
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { StyledPrivacyWrapper } from './styled';

export function Privacy() {
  const { t } = useTranslation();

  return (
    <StyledPrivacyWrapper>
      <div
        dangerouslySetInnerHTML={{
          __html: t(translations.privacy.content, {
            interpolation: { escapeValue: false },
          }),
        }}
      />
    </StyledPrivacyWrapper>
  );
}
