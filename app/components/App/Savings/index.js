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
import Widget from 'components/App/Widget';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

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
  }, [savings, JSON.stringify(savingsData), JSON.stringify(savingsColors)]);

  const pieChart = (
    <PieChart margin={0} width={200} height={61}>
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
    <FormattedMessage {...messages.savings}>
      {(title) => (
        <Widget
          pie="true"
          title={title}
          unit="%"
          content={savings}
          isLoading={isLoading}
          svg={pieChart}
        />
      )}
    </FormattedMessage>
  );
}
