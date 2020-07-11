/* eslint-disable react/prop-types */
/**
 *
 * TransactionHistory
 *
 */

import React, { useEffect } from 'react';
import { getRequestName, truncateString } from 'helpers';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionHistoryAction } from 'containers/HistoryPage/actions';
import LoadingIndicator from 'components/LoadingIndicator';
import { createStructuredSelector } from 'reselect';
import { makeSelectTransactions } from 'containers/HistoryPage/selectors';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { GET_TRANSACTION_HISTORY_REQUEST } from 'containers/HistoryPage/constants';
import { makeSelectUser } from 'containers/App/selectors';
import { makeSelectDateFormat } from 'providers/LanguageProvider/selectors';
import {
  StyledSenderAmountMoney,
  StyledUser,
  StyledTable,
} from 'components/App/Transactions/Transactions.style';
import { format } from 'date-fns';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const stateSelector = createStructuredSelector({
  dateFormat: makeSelectDateFormat(),
  user: makeSelectUser(),
  transactions: makeSelectTransactions(),
  isLoading: makeSelectIsLoading(
    getRequestName(GET_TRANSACTION_HISTORY_REQUEST),
  ),
});

export default function TransactionHistory() {
  const { dateFormat, transactions, isLoading, user } = useSelector(
    stateSelector,
  );
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
    current: transactions?.meta?.page,
    pageSize: transactions?.meta?.take,
    total: transactions?.meta?.itemCount,
  };

  const columns = [
    {
      title: <FormattedMessage {...messages.sender} />,
      render: ({ senderBill }) => (
        <div>
          <StyledUser>
            {truncateString(
              `${senderBill.user.firstName} ${senderBill.user.lastName}`,
              20,
            )}
          </StyledUser>
          <div>{senderBill.accountBillNumber}</div>
        </div>
      ),
    },
    {
      title: <FormattedMessage {...messages.recipient} />,
      render: ({ recipientBill }) => (
        <div>
          <StyledUser>
            {truncateString(
              `${recipientBill.user.firstName} ${recipientBill.user.lastName}`,
              20,
            )}
          </StyledUser>
          <div>{recipientBill.accountBillNumber}</div>
        </div>
      ),
    },
    {
      title: <FormattedMessage {...messages.amountMoney} />,
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
      title: <FormattedMessage {...messages.transferTitle} />,
      render: ({ transferTitle }) => <div>{transferTitle}</div>,
    },
    {
      title: <FormattedMessage {...messages.date} />,
      render: ({ updatedAt }) => (
        <div>{format(new Date(updatedAt), dateFormat)}</div>
      ),
    },
  ];

  return (
    <StyledTable
      rowKey={({ uuid }) => uuid}
      loading={tableLoading}
      dataSource={transactions.data}
      columns={columns}
      pagination={pagination}
      onChange={({ current }) => onGetTransactionHistory(current)}
    />
  );
}
