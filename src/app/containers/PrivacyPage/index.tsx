/**
 *
 * PrivacyPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from 'app/components/Header';
import { Subheader } from 'app/components/Subheader';
import { Privacy } from 'app/components/Privacy';
import { ConstantCookie } from 'app/components/ConstantCookie';
import routes from 'utils/routes';
import { translations } from 'locales/i18n';
import { useTranslation } from 'react-i18next';

export function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(translations.privacy.title)}</title>
        <meta name="description" content="Description of PrivacyPage" />
      </Helmet>

      <Header />
      <Subheader pageTitle={routes.privacy.name} />

      <Privacy />

      <ConstantCookie />
    </>
  );
}
