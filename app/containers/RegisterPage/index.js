/**
 *
 * RegisterPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { intlShape, injectIntl } from 'react-intl';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import Header from 'components/Header';
import Subheader from 'components/Subheader';
import RegisterForm from 'components/RegisterForm';
import RedirectToggle from 'components/RedirectToggle';
import Footer from 'components/Footer';
import Information from 'components/Information';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

function RegisterPage({ intl }) {
  useInjectReducer({ key: 'registerPage', reducer });
  useInjectSaga({ key: 'registerPage', saga });

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage(messages.registration)}</title>
        <meta
          name="description"
          content={intl.formatMessage(messages.description)}
        />
      </Helmet>

      <Header />
      <Subheader pageTitle={intl.formatMessage(messages.registration)} />

      <Information />

      <RegisterForm />

      <RedirectToggle />
      <Footer />
    </>
  );
}

RegisterPage.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(RegisterPage);
