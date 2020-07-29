/**
 *
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { loginPageSaga } from './saga';
import { Header } from 'app/components/Header';
import { Subheader } from 'app/components/Subheader';
import { Information } from 'app/components/Information';
import { RedirectToggle } from 'app/components/RedirectToggle';
import { Footer } from 'app/components/Footer';
import { ConstantCookie } from 'app/components/ConstantCookie';
import routes from 'utils/routes';
import { LoginForm } from 'app/components/LoginForm';

export function LoginPage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginPageSaga });

  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>

      <Header />
      <Subheader pageTitle={routes.login.name} />

      <Information />

      <LoginForm />

      <RedirectToggle />
      <Footer />

      <ConstantCookie />
    </>
  );
}
