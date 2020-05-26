/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectRecentTransactions } from 'containers/DashboardPage/selectors';
import { getRecentTransactionsAction } from 'containers/DashboardPage/actions';
import { StyledCard } from 'components/App/Card/Card.style';
import LoadingIndicator from 'components/LoadingIndicator';
import { Table } from 'antd';
import { format } from 'date-fns';

const dateFormat = `dd.MM.yyyy`;

const stateSelector = createStructuredSelector({
  recentTransactions: makeSelectRecentTransactions(),
});

const columns = [
  {
    key: 'leftSide',
    render: ({ transferTitle, senderAccountBill: { user } }) => (
      <div>
        <div>
          from {user.firstName} {user.lastName}
        </div>
        <div>{transferTitle}</div>
      </div>
    ),
  },
  {
    key: 'rightSide',
    render: ({ updatedAt, amountMoney }) => (
      <div>
        <div>{format(new Date(updatedAt), dateFormat)}</div>
        <div>{amountMoney}</div>
      </div>
    ),
  },
];

export default function RecentTransactions() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { recentTransactions } = useSelector(stateSelector);

  const getRecentTransactions = () => dispatch(getRecentTransactionsAction());

  useEffect(() => {
    if (!recentTransactions.length) getRecentTransactions();

    if (recentTransactions.length) {
      setIsLoading(false);
    }
  }, [JSON.stringify(recentTransactions)]);

  return (
    <StyledCard
      isLoading={isLoading}
      bordered={false}
      isShadow
      title="Recent Transactions"
      style={{ width: 330 }}
    >
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Table
          showHeader={false}
          pagination={false}
          dataSource={recentTransactions}
          columns={columns}
        />
      )}
    </StyledCard>
  );
}
