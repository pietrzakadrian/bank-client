/* eslint-disable react/prop-types */
/**
 *
 * TransactionHistory
 *
 */

import React, { useEffect } from 'react';
import { getRequestName, dateFormat } from 'helpers';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionHistoryAction } from 'containers/HistoryPage/actions';
import { Table } from 'antd';
import LoadingIndicator from 'components/LoadingIndicator';
import { createStructuredSelector } from 'reselect';
import { makeSelectTransactions } from 'containers/HistoryPage/selectors';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { GET_TRANSACTION_HISTORY_REQUEST } from 'containers/HistoryPage/constants';
import { makeSelectUser } from 'containers/App/selectors';
import { makeSelectLocale } from 'providers/LanguageProvider/selectors';
import {
  StyledSenderAmountMoney,
  StyledUser,
} from 'components/App/Transactions/Transactions.style';
import { format } from 'date-fns';

const stateSelector = createStructuredSelector({
  locale: makeSelectLocale(),
  user: makeSelectUser(),
  transactions: makeSelectTransactions(),
  isLoading: makeSelectIsLoading(
    getRequestName(GET_TRANSACTION_HISTORY_REQUEST),
  ),
});

export default function TransactionHistory() {
  const {
    locale,
    transactions: { data, meta },
    isLoading,
    user,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onGetTransactionHistory = (currentPage = 1) =>
    dispatch(getTransactionHistoryAction(currentPage));

  useEffect(() => {
    onGetTransactionHistory();
  }, []);

  const tableLoading = {
    spinning: isLoading,
    indicator: <LoadingIndicator />,
  };
  const pagination = {
    current: meta?.page,
    pageSize: meta?.take,
    total: meta?.itemCount,
  };

  const columns = [
    {
      title: 'Sender',
      render: ({ senderBill }) => (
        <div>
          <StyledUser>
            {senderBill.user.firstName} {senderBill.user.lastName}
          </StyledUser>
          <div>{senderBill.accountBillNumber}</div>
        </div>
      ),
    },
    {
      title: 'Recipient',
      render: ({ recipientBill }) => (
        <div>
          <StyledUser>
            {recipientBill.user.firstName} {recipientBill.user.lastName}
          </StyledUser>
          <div>{recipientBill.accountBillNumber}</div>
        </div>
      ),
    },
    {
      title: 'Amount money',
      render: ({ amountMoney, senderBill }) => (
        <div>
          {senderBill.user.uuid === user.uuid ? (
            <StyledSenderAmountMoney>
              -{amountMoney} {senderBill.currency.name}
            </StyledSenderAmountMoney>
          ) : (
            <>
              {amountMoney} {senderBill.currency.name}
            </>
          )}
        </div>
      ),
    },
    {
      title: 'Transfer Title',
      render: ({ transferTitle }) => <div>{transferTitle}</div>,
    },
    {
      title: 'Date',
      render: ({ updatedAt }) => (
        <div>
          {format(
            new Date(updatedAt),
            locale === 'en' ? dateFormat(12) : dateFormat(24),
          )}
        </div>
      ),
    },
  ];

  return (
    <Table
      rowKey={({ uuid }) => uuid}
      loading={tableLoading}
      dataSource={data}
      columns={columns}
      pagination={pagination}
      onChange={({ current }) => onGetTransactionHistory(current)}
    />
  );
}
