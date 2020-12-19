/**
 *
 * ResetPasswordPage
 *
 */

import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { routes } from 'utils';
import Footer from 'components/Footer';
import ConstantCookie from 'components/ConstantCookie';
import Information from 'components/Information';
import Header from 'components/Header';
import Subheader from 'components/Subheader';
import ResetPasswordForm from 'components/ResetPasswordForm';
import { useParams } from 'react-router-dom';
import { changeInputAction } from 'containers/App/actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export default function ResetPasswordPage() {
  useInjectReducer({ key: 'resetPasswordPage', reducer });
  useInjectSaga({ key: 'resetPasswordPage', saga });

  const { token } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeInputAction({ name: 'token', value: token }));
  }, [token]);

  return (
    <>
      <FormattedMessage {...messages.resetPassword}>
        {(title) => <Helmet title={title} />}
      </FormattedMessage>

      <Header />
      <Subheader pageTitle={routes.resetPassword.name} />

      <Information />

      <ResetPasswordForm />

      <Footer />

      <ConstantCookie />
    </>
  );
}
