/**
 *
 * Savings
 *
 */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Widget } from 'app/components/App/Widget';
import { translations } from 'locales/i18n';
import { PieChart, Pie, Cell } from 'recharts';
import { selectDashboardPage } from 'app/containers/DashboardPage/selectors';
import { actions } from 'app/containers/DashboardPage/slice';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';

export function Savings() {
  const { t } = useTranslation();
  const { savingsPercent, savingsData, savingsColors } = useSelector(
    selectDashboardPage,
  );
  const isLoading = useSelector(selectLoading('dashboardPage/getSavings'));
  const dispatch = useDispatch();

  const getSavings = () => dispatch(actions.getAccountBalanceRequestAction());

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    getSavings();
  });

  const pieChart = (
    <PieChart width={200} height={61}>
      <Pie
        data={savingsData}
        dataKey="value"
        innerRadius={75}
        outerRadius={80}
        paddingAngle={0}
      >
        {savingsData?.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={savingsColors[index % savingsColors.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );

  return (
    <Widget
      pie="true"
      title={t(translations.savings)}
      unit="%"
      content={savingsPercent}
      isLoading={isLoading}
      svg={pieChart}
    />
  );
}
