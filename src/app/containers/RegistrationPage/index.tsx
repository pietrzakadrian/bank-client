/**
 *
 * RegistrationPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectRegistrationPage } from './selectors';
import { registrationPageSaga } from './saga';
import { Header } from 'app/components/Header';
import { Subheader } from 'app/components/Subheader';
import { Information } from 'app/components/Information';
import { RedirectToggle } from 'app/components/RedirectToggle';
import { Footer } from 'app/components/Footer';
import { ConstantCookie } from 'app/components/ConstantCookie';
import routes from 'utils/routes';
import { RegisterForm } from 'app/components/RegisterForm';

interface Props {}

export function RegistrationPage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: registrationPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const registrationPage = useSelector(selectRegistrationPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>RegistrationPage</title>
        <meta name="description" content="Description of RegistrationPage" />
      </Helmet>

      <Header />
      <Subheader pageTitle={routes.registration.name} />

      <Information />

      <RegisterForm />

      <RedirectToggle />
      <Footer />

      <ConstantCookie />
    </>
  );
}
