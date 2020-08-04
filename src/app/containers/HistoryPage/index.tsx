/**
 *
 * HistoryPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { historyPageSaga } from './saga';
import { translations } from 'locales/i18n';
import { TransactionHistory } from 'app/components/App/TransactionHistory';

export function HistoryPage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: historyPageSaga });

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(translations.history.title)}</title>
        <meta name="description" content="Description of HistoryPage" />
      </Helmet>

      <TransactionHistory />
    </>
  );
}
