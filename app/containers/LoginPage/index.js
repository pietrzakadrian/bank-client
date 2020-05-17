/**
 *
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from 'components/Header';
import Subheader from 'components/Subheader';
import Information from 'components/Information';
import RedirectToggle from 'components/RedirectToggle';
import Footer from 'components/Footer';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import LoginForm from 'components/LoginForm';
import reducer from './reducer';
import saga from './saga';

export default function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  return (
    <div>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>

      <Header />
      <Subheader pageTitle="Log In" />

      <Information />

      <LoginForm />

      <RedirectToggle />
      <Footer />
    </div>
  );
}
