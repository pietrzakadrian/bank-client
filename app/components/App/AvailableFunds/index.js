import React, { useEffect, useState } from 'react';
import Trend from 'react-trend';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectAmountMoney,
  makeSelectAccountBalanceHistory,
  makeSelectCurrencyName,
} from 'containers/DashboardPage/selectors';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAmountMoneyAction,
  getAccountBalanceHistoryAction,
} from 'containers/DashboardPage/actions';
import { colors } from 'utils';
import Widget from 'components/App/Widget';
import { FormattedMessage } from 'react-intl';
import {
  GET_AMOUNT_MONEY_REQUEST,
  GET_ACCOUNT_BALANCE_HISTORY_REQUEST,
} from 'containers/DashboardPage/constants';
import { getRequestName } from 'helpers';
import messages from './messages';

const stateSelector = createStructuredSelector({
  amountMoney: makeSelectAmountMoney(),
  accountBalanceHistory: makeSelectAccountBalanceHistory(),
  currencyName: makeSelectCurrencyName(),
  isLoading: makeSelectIsLoading(getRequestName(GET_AMOUNT_MONEY_REQUEST)),
});

export default function AvailableFunds() {
  const dispatch = useDispatch();
  const {
    amountMoney,
    accountBalanceHistory,
    currencyName,
    isLoading,
  } = useSelector(stateSelector);

  const getAmountMoney = () => dispatch(getAmountMoneyAction());
  // const getAccountBalanceHistory = () =>
  //   dispatch(getAccountBalanceHistoryAction());

  useEffect(() => {
    getAmountMoney();
  }, []);

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

  return (
    <FormattedMessage {...messages.availableFunds}>
      {(title) => (
        <Widget
          isLoading={isLoading}
          svg={trend}
          title={title}
          content={amountMoney}
          unit={currencyName}
        />
      )}
    </FormattedMessage>
  );
}
