/**
 *
 * LoginPage
 *
 */

import React from 'react';
import { intlShape, injectIntl } from 'react-intl';

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
import messages from './messages';

function LoginPage({ intl }) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  return (
    <div>
      <Helmet>
        <title>{intl.formatMessage(messages.login)}</title>
        <meta
          name="description"
          content={intl.formatMessage(messages.description)}
        />
      </Helmet>

      <Header />
      <Subheader pageTitle={intl.formatMessage(messages.login)} />

      <Information />

      <LoginForm />

      <RedirectToggle />
      <Footer />
    </div>
  );
}

LoginPage.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(LoginPage);
