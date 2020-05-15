/**
 *
 * RegisterPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
// import { FormattedMessage } from 'react-intl';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import Header from '../../components/Header';
import Subheader from '../../components/Subheader';
import RegisterForm from '../../components/RegisterForm';
import RedirectToggle from '../../components/RedirectToggle';
import Footer from '../../components/Footer';
import Information from '../../components/Information';

export default function RegisterPage() {
  useInjectReducer({ key: 'registerPage', reducer });
  useInjectSaga({ key: 'registerPage', saga });

  return (
    <>
      <Helmet>
        <title>Registration</title>
        <meta name="description" content="Description of RegisterPage" />
      </Helmet>

      <Header />
      <Subheader pageTitle="Registration" />

      <Information />

      <RegisterForm />

      <RedirectToggle />
      <Footer />
    </>
  );
}
