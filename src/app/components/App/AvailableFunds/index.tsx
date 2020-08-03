/**
 *
 * AvailableFunds
 *
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDashboardPage } from 'app/containers/DashboardPage/selectors';
import { actions } from 'app/containers/DashboardPage/slice';
import Trend from 'react-trend';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';
import { Widget } from '../Widget';
import { translations } from 'locales/i18n';
import { useTranslation } from 'react-i18next';

export function AvailableFunds() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { amountMoney, accountBalanceHistory, currencyName } = useSelector(
    selectDashboardPage,
  );
  const isLoading = useSelector(
    selectLoading('dashboardPage/getAvailableFunds'),
  );

  const getAvailableFunds = () =>
    dispatch(actions.getAvailableFundsRequestAction());

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    getAvailableFunds();
  });

  const trend = (
    <Trend
      smooth
      autoDraw
      autoDrawDuration={1500}
      autoDrawEasing="ease-out"
      data={accountBalanceHistory}
      gradient={['#1890ff']}
      radius={0}
      strokeWidth={4.0}
      strokeLinecap="butt"
    />
  );

  return (
    <Widget
      isLoading={isLoading}
      svg={trend}
      title={t(translations.availableFunds)}
      content={amountMoney}
      unit={currencyName}
    />
  );
}
