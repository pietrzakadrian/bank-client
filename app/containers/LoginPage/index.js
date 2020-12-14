/**
 *
 * LoginPage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet-async';
import Header from 'components/Header';
import Subheader from 'components/Subheader';
import Information from 'components/Information';
import RedirectToggle from 'components/RedirectToggle';
import Footer from 'components/Footer';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import LoginForm from 'components/LoginForm';
import { routes } from 'utils';
import ConstantCookie from 'components/ConstantCookie';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'loginPage';
export default function LoginPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <>
      <FormattedMessage {...messages.login}>
        {(title) => <Helmet title={title} />}
      </FormattedMessage>

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
