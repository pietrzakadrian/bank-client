/**
 *
 * RegistrationPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { registrationPageSaga } from './saga';
import { Header } from 'app/components/Header';
import { Subheader } from 'app/components/Subheader';
import { Information } from 'app/components/Information';
import { RedirectToggle } from 'app/components/RedirectToggle';
import { Footer } from 'app/components/Footer';
import { ConstantCookie } from 'app/components/ConstantCookie';
import routes from 'utils/routes';
import { RegistrationForm } from 'app/components/RegistrationForm';
import { translations } from 'locales/i18n';
import { useTranslation } from 'react-i18next';

export function RegistrationPage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: registrationPageSaga });

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(translations.registration.title)}</title>
        <meta name="description" content="Description of RegistrationPage" />
      </Helmet>

      <Header />
      <Subheader pageTitle={routes.registration.name} />

      <Information />

      <RegistrationForm />

      <RedirectToggle />
      <Footer />

      <ConstantCookie />
    </>
  );
}
