/**
 *
 * ForgetPasswordPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectForgetPasswordPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { routes } from 'utils';
import Footer from 'components/Footer';
import ConstantCookie from 'components/ConstantCookie';
import Header from 'components/Header';
import Subheader from 'components/Subheader';
import ForgotPasswordForm from 'components/ForgotPasswordForm';
import Information from 'components/Information';


const stateSelector = createStructuredSelector({
  forgetPasswordPage: makeSelectForgetPasswordPage(),
});

function ForgetPasswordPage() {
  useInjectReducer({ key: 'forgetPasswordPage', reducer });
  useInjectSaga({ key: 'forgetPasswordPage', saga });

  /* eslint-disable no-unused-vars */
  const { forgetPasswordPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <>
     <FormattedMessage {...messages.forgetPassword}>
        {(title) => <Helmet title={title} />}
      </FormattedMessage>

      <Header />
      <Subheader pageTitle={routes.forgetPassword.name} />

      <Information />

      <ForgotPasswordForm />

      <Footer />

      <ConstantCookie />
    </>
  );
}

ForgetPasswordPage.propTypes = {};

export default ForgetPasswordPage;
