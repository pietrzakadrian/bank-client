/**
 *
 * PaymentPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { paymentPageSaga } from './saga';
import { Footer } from 'app/components/Footer';
import { PaymentForm } from 'app/components/App/PaymentForm';
import { translations } from 'locales/i18n';

export function PaymentPage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: paymentPageSaga });

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(translations.payment.title)}</title>
        <meta name="description" content="Description of PaymentPage" />
      </Helmet>

      <PaymentForm />

      <Footer />
    </>
  );
}
