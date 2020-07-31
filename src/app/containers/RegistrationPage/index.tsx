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
import { RegisterForm } from 'app/components/RegisterForm';

export function RegistrationPage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: registrationPageSaga });

  return (
    <>
      <Helmet>
        <title>RegistrationPage</title>
        <meta name="description" content="Description of RegistrationPage" />
      </Helmet>

      <Header />
      <Subheader pageTitle={routes.registration.name} />

      <Information />

      <RegisterForm />

      <RedirectToggle />
      <Footer />

      <ConstantCookie />
    </>
  );
}
