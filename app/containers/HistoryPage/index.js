/**
 *
 * HistoryPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import TransactionHistory from 'components/App/TransactionHistory';
import reducer from './reducer';
import saga from './saga';

const key = 'historyPage';

export default function HistoryPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <Helmet>
        <title>HistoryPage</title>
        <meta name="description" content="Description of HistoryPage" />
      </Helmet>

      <TransactionHistory />
    </div>
  );
}
