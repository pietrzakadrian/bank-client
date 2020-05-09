/**
 *
 * RegisterPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
// import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectRegisterPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import Header from '../../components/Header';
import Subheader from '../../components/Subheader';
import RegisterForm from '../../components/RegisterForm';
import RedirectToggle from '../../components/RedirectToggle';
import Footer from '../../components/Footer';
import Information from '../../components/Information';

const stateSelector = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
});

function RegisterPage() {
  useInjectReducer({ key: 'registerPage', reducer });
  useInjectSaga({ key: 'registerPage', saga });

  /* eslint-disable no-unused-vars */
  const { registerPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>RegisterPage</title>
        <meta name="description" content="Description of RegisterPage" />
      </Helmet>

      <Header />
      <Subheader pageTitle="Register" />

      <Information />

      <RegisterForm />
      <RedirectToggle />

      <Footer />

      {/* <FormattedMessage {...messages.header} /> */}
    </div>
  );
}

RegisterPage.propTypes = {};

export default RegisterPage;
