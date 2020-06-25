/* eslint-disable react/prop-types */
/**
 *
 * TransactionHistory
 *
 */

import React, { useEffect } from 'react';
import { getRequestName } from 'helpers';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionHistoryAction } from 'containers/HistoryPage/actions';
import { Table } from 'antd';
import LoadingIndicator from 'components/LoadingIndicator';
import { createStructuredSelector } from 'reselect';
import { makeSelectTransactions } from 'containers/HistoryPage/selectors';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { GET_TRANSACTION_HISTORY_REQUEST } from '../../../containers/HistoryPage/constants';

const stateSelector = createStructuredSelector({
  transactions: makeSelectTransactions(),
  isLoading: makeSelectIsLoading(
    getRequestName(GET_TRANSACTION_HISTORY_REQUEST),
  ),
});

export default function TransactionHistory() {
  const {
    transactions: { data, meta },
    isLoading,
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
          <div>
            {senderBill.user.firstName} {senderBill.user.lastName}
          </div>
          <div>{senderBill.accountBillNumber}</div>
        </div>
      ),
    },
    {
      title: 'Recipient',
      render: ({ recipientBill }) => (
        <div>
          <div>
            {recipientBill.user.firstName} {recipientBill.user.lastName}
          </div>
          <div>{recipientBill.accountBillNumber}</div>
        </div>
      ),
    },
    {
      title: 'Amount money',
      render: ({ amountMoney, senderBill }) => (
        <div>
          {amountMoney} {senderBill.currency.name}
        </div>
      ),
    },
    {
      title: 'Transfer Title',
      render: ({ transferTitle }) => <div>{transferTitle}</div>,
    },
  ];

  return (
    <Table
      rowKey={(record) => record.uuid}
      loading={tableLoading}
      dataSource={data}
      columns={columns}
      pagination={pagination}
      onChange={({ current }) => onGetTransactionHistory(current)}
    />
  );
}
