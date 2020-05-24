import React, { useEffect, useState } from 'react';
import Trend from 'react-trend';

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
import { colors } from 'utils';
import Card from 'components/App/Card';

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
  }, [amountMoney && currencyName, accountBalanceHistory]);

  const trend = (
    <Trend
      smooth
      autoDraw
      autoDrawDuration={1500}
      autoDrawEasing="ease-out"
      data={accountBalanceHistory}
      gradient={[`${colors.primaryBlue}`]}
      radius={0}
      strokeWidth={4.0}
      strokeLinecap="butt"
    />
  );

  return <Card isLoading={isLoading} svg={trend} />;
}
