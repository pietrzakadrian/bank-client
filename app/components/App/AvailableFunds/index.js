import React, { useEffect, useState } from 'react';
import Trend from 'react-trend';
import { Card } from 'antd';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectAmountMoney,
  makeSelectAccountBalanceHistory,
  makeSelectCurrencyName,
} from 'containers/DashboardPage/selectors';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAmountMoneyAction,
  getAccountBalanceHistoryAction,
} from 'containers/DashboardPage/actions';
import { StyledAvailableFunds } from './styles';

const stateSelector = createStructuredSelector({
  amountMoney: makeSelectAmountMoney(),
  accountBalanceHistory: makeSelectAccountBalanceHistory(),
  currencyName: makeSelectCurrencyName(),
});

export default function AvailableFunds() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { amountMoney, accountBalanceHistory, currencyName } = useSelector(
    stateSelector,
  );

  const getAmountMoney = () => dispatch(getAmountMoneyAction());
  const getAccountBalanceHistory = () =>
    dispatch(getAccountBalanceHistoryAction());

  useEffect(() => {
    if (!accountBalanceHistory.length) {
      getAccountBalanceHistory();
    }

    if (!amountMoney || !currencyName) {
      getAmountMoney();
    }

    if (amountMoney && currencyName && accountBalanceHistory.length) {
      setIsLoading(false);
    }
  }, [amountMoney && currencyName && accountBalanceHistory]);

  return (
    <StyledAvailableFunds>
      <Card title="Available Funds" style={{ width: 300 }}>
        {isLoading ? (
          <div>loader</div>
        ) : (
          <>
            {amountMoney} {currencyName}
            <Trend
              smooth
              autoDraw
              autoDrawDuration={3000}
              autoDrawEasing="ease-out"
              data={accountBalanceHistory}
              gradient={['#42b3f4']}
              radius={0}
              strokeWidth={3.6}
              strokeLinecap="butt"
            />
          </>
        )}
      </Card>
    </StyledAvailableFunds>
  );
}
