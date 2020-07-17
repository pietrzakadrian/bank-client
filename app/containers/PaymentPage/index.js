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
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { getAlertCount } from 'helpers';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'paymentPage';
const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
});

export default function PaymentPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { user } = useSelector(stateSelector);

  return (
    <>
      <FormattedMessage {...messages.payment}>
        {(title) => <Helmet title={`${getAlertCount(user)} ${title}`} />}
      </FormattedMessage>

      <PaymentForm />

      <Footer />
    </>
  );
}
