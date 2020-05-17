/**
 *
 * LoginPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
// import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from 'components/Header';
import Subheader from 'components/Subheader';
import Information from 'components/Information';
import RedirectToggle from 'components/RedirectToggle';
import Footer from 'components/Footer';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import LoginForm from 'components/LoginForm';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

const stateSelector = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

export default function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  /* eslint-disable no-unused-vars */
  const { loginPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

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
