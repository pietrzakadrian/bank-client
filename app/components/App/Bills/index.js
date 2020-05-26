import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectBills } from 'containers/DashboardPage/selectors';
import { getBillsAction } from 'containers/DashboardPage/actions';
import { Table } from 'antd';
import { StyledCard } from 'components/App/Card/Card.style';
import LoadingIndicator from 'components/LoadingIndicator';
import { StyledBillAmountMoney } from './Bills.style';

const stateSelector = createStructuredSelector({
  bills: makeSelectBills(),
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
    render: (text, { currency }) => (
      <>
        <StyledBillAmountMoney>{text}</StyledBillAmountMoney> {currency.name}
      </>
    ),
  },
];

export default function Bills() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { bills } = useSelector(stateSelector);

  const getBills = () => dispatch(getBillsAction());

  useEffect(() => {
    if (!bills.length) getBills();

    if (bills.length) {
      setIsLoading(false);
    }
  }, [JSON.stringify(bills)]);

  return (
    <StyledCard
      isBackground
      isLoading={isLoading}
      bordered={false}
      isShadow
      title="Bills"
      style={{ width: 600 }}
    >
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Table
          showHeader={false}
          pagination={false}
          dataSource={bills}
          columns={columns}
        />
      )}
    </StyledCard>
  );
}
