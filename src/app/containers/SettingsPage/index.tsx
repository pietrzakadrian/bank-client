/**
 *
 * SettingsPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { settingsPageSaga } from './saga';
import { SettingsForm } from 'app/components/App/SettingsForm';
import { translations } from 'locales/i18n';

export function SettingsPage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: settingsPageSaga });

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(translations.settings.title)}</title>
        <meta name="description" content="Description of SettingsPage" />
      </Helmet>

      <SettingsForm />
    </>
  );
}
