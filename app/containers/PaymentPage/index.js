/**
 *
 * PaymentPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectPaymentPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  paymentPage: makeSelectPaymentPage(),
});

function PaymentPage() {
  useInjectReducer({ key: 'paymentPage', reducer });
  useInjectSaga({ key: 'paymentPage', saga });

  /* eslint-disable no-unused-vars */
  const { paymentPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>PaymentPage</title>
        <meta name="description" content="Description of PaymentPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

PaymentPage.propTypes = {};

export default PaymentPage;
