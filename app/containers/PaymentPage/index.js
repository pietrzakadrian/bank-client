/**
 *
 * PaymentPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from 'components/Footer';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import PaymentForm from 'components/App/PaymentForm';
import reducer from './reducer';
import saga from './saga';

const key = 'paymentPage';
export default function PaymentPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <>
      <Helmet>
        <title>PaymentPage</title>
        <meta name="description" content="Description of PaymentPage" />
      </Helmet>

      <PaymentForm />

      <Footer />
    </>
  );
}
