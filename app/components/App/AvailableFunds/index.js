import React, { useEffect } from 'react';
import Trend from 'react-trend';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectAmountMoney,
  makeSelectAccountBalanceHistory,
  makeSelectCurrencyName,
} from 'containers/DashboardPage/selectors';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { colors } from 'utils';
import Widget from 'components/App/Widget';
import { FormattedMessage } from 'react-intl';
import { GET_AVAILABLE_FUNDS_REQUEST } from 'containers/DashboardPage/constants';
import { getRequestName } from 'helpers';
import { getAvailableFundsAction } from 'containers/DashboardPage/actions';
import messages from './messages';

const stateSelector = createStructuredSelector({
  amountMoney: makeSelectAmountMoney(),
  accountBalanceHistory: makeSelectAccountBalanceHistory(),
  currencyName: makeSelectCurrencyName(),
  isLoading: makeSelectIsLoading(getRequestName(GET_AVAILABLE_FUNDS_REQUEST)),
});

export default function AvailableFunds() {
  const dispatch = useDispatch();
  const {
    amountMoney,
    accountBalanceHistory,
    currencyName,
    isLoading,
  } = useSelector(stateSelector);

  const getAvailableFunds = () => dispatch(getAvailableFundsAction());

  useEffect(() => {
    getAvailableFunds();
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
