import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { PieChart, Pie, Cell } from 'recharts';
import {
  makeSelectCurrencyName,
  makeSelectAmountMoney,
  makeSelectExpenses,
} from 'containers/DashboardPage/selectors';
import { getAccountBalanceAction } from 'containers/DashboardPage/actions';

const COLORS = ['#0088FE', '#00C49F'];
const stateSelector = createStructuredSelector({
  revenues: makeSelectAmountMoney(),
  expenses: makeSelectExpenses(),
  currencyName: makeSelectCurrencyName(),
});

export default function Savings() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const { revenues, expenses, currencyName } = useSelector(stateSelector);

  const getSavings = () => dispatch(getAccountBalanceAction());

  useEffect(() => {
    if (!revenues || !expenses || !currencyName) getSavings();

    if (revenues && expenses && currencyName) {
      setIsLoading(false);

      if ((revenues && expenses) === '0.00') {
        setData([
          {
            name: 'revenues',
            value: 100,
          },
        ]);
      } else {
        setData([
          {
            id: 1,
            name: 'revenues',
            value: revenues,
          },
          {
            id: 2,
            name: 'expenses',
            value: expenses,
          },
        ]);
      }
    }
  }, [revenues && expenses && currencyName]);

  return (
    <div>
      {isLoading ? (
        <div>spinner</div>
      ) : (
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            dataKey="value"
            cx={100}
            cy={100}
            innerRadius={70}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={0}
          >
            {data.map((entry, index) => (
              <Cell key={data.id} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      )}
    </div>
  );
}
