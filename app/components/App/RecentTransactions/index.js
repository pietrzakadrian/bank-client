import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectRecentTransactions } from 'containers/DashboardPage/selectors';
import { getRecentTransactionsAction } from 'containers/DashboardPage/actions';
import { StyledCard } from 'components/App/Card/Card.style';
import LoadingIndicator from 'components/LoadingIndicator';
import { Table } from 'antd';

const stateSelector = createStructuredSelector({
  recentTransactions: makeSelectRecentTransactions(),
});

const columns = [
  {
    dataIndex: 'accountBillNumber',
    key: 'accountBillNumber',
    render: (text) => <div>{text}</div>,
  },
  {
    dataIndex: 'amountMoney',
    key: 'amountMoney',
    render: (text) => <div>{text}</div>,
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
