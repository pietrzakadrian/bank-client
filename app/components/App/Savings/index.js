import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { PieChart, Pie, Cell } from 'recharts';
import {
  makeSelectSavingsColors,
  makeSelectSavings,
  makeSelectSavingsData,
} from 'containers/DashboardPage/selectors';
import { getAccountBalanceAction } from 'containers/DashboardPage/actions';

import Card from '../Card';

const stateSelector = createStructuredSelector({
  savings: makeSelectSavings(),
  savingsData: makeSelectSavingsData(),
  savingsColors: makeSelectSavingsColors(),
});

export default function Savings() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { savings, savingsData, savingsColors } = useSelector(stateSelector);

  const getSavings = () => dispatch(getAccountBalanceAction());

  useEffect(() => {
    if (!savings) getSavings();

    if (savings) {
      setIsLoading(false);
    }
  }, [savings]);

  const pieChart = (
    <PieChart margin={0} width={200} height={61}>
      <Pie
        data={savingsData}
        dataKey="value"
        innerRadius={75}
        outerRadius={80}
        paddingAngle={0}
      >
        {savingsData?.map((_, index) => (
          <Cell
            key={index}
            fill={savingsColors[index % savingsColors.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );

  return (
    <Card
      pie="true"
      title="Savings"
      unit="%"
      content={savings}
      isLoading={isLoading}
      svg={pieChart}
    />
  );
}
