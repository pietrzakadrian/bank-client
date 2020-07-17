/**
 *
 * HistoryPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import TransactionHistory from 'components/App/TransactionHistory';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'containers/App/selectors';
import { getAlertCount } from 'helpers';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'historyPage';
const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
});

export default function HistoryPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { user } = useSelector(stateSelector);

  return (
    <>
      <FormattedMessage {...messages.history}>
        {(title) => <Helmet title={`${getAlertCount(user)} ${title}`} />}
      </FormattedMessage>

      <TransactionHistory />
    </>
  );
}
