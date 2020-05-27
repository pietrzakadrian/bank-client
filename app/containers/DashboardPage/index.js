/**
 *
 * DashboardPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import Greeting from 'components/App/Greeting';
// import makeSelectDashboardPage from './selectors';
import AvailableFunds from 'components/App/AvailableFunds';
import Savings from 'components/App/Savings';
import BankInformation from 'components/App/BankInformation';
import Bills from 'components/App/Bills';
import RecentTransactions from 'components/App/RecentTransactions';
import BankCards from 'components/App/BankCards';
import {
  StyledGridWrapper,
  StyledGridItem,
} from 'components/App/Grid/Grid.style';
import reducer from './reducer';
import saga from './saga';
import Credits from '../../components/App/Credits';
import Deposits from '../../components/App/Deposits';

// const stateSelector = createStructuredSelector({
//   dashboardPage: makeSelectDashboardPage(),
// });

// function getFromLS(key) {
//   let ls = {};
//   if (global.localStorage)
//     ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};

//   return ls[key];
// }

// function saveToLS(key, value) {
//   if (global.localStorage) {
//     global.localStorage.setItem(
//       'rgl-8',
//       JSON.stringify({
//         [key]: value,
//       }),
//     );
//   }
// }

const ResponsiveGridLayout = WidthProvider(Responsive);
// const originalLayouts = getFromLS('layouts') || {};

export default function DashboardPage() {
  useInjectReducer({ key: 'dashboardPage', reducer });
  useInjectSaga({ key: 'dashboardPage', saga });

  /* eslint-disable no-unused-vars */
  // const { dashboardPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>DashboardPage</title>
        <meta name="description" content="Description of DashboardPage" />
      </Helmet>

      <Greeting />

      <StyledGridWrapper>
        <ResponsiveGridLayout
          breakpoints={{ lg: 1100, md: 900, sm: 610, xs: 480, xxs: 0 }}
          cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={8}
          margin={[20, 10]}
          isResizable={false}
          isDraggable
        >
          <StyledGridItem
            key="1"
            data-grid={{ x: 0, y: 0, w: 1, h: 6, static: true }}
          >
            <AvailableFunds />
          </StyledGridItem>

          <StyledGridItem
            key="2"
            data-grid={{ x: 1, y: 0, w: 1, h: 6, static: true }}
          >
            <Savings />
          </StyledGridItem>

          <StyledGridItem
            key="3"
            data-grid={{ x: 2, y: 0, w: 1, h: 6, static: true }}
          >
            <BankInformation />
          </StyledGridItem>

          <StyledGridItem key="4" data-grid={{ x: 0, y: 2, w: 2, h: 16 }}>
            <Bills />
          </StyledGridItem>

          <StyledGridItem key="5" data-grid={{ x: 2, y: 2, w: 1, h: 16 }}>
            <RecentTransactions />
          </StyledGridItem>

          <StyledGridItem key="6" data-grid={{ x: 0, y: 3, w: 1, h: 16 }}>
            <BankCards />
          </StyledGridItem>

          <StyledGridItem key="7" data-grid={{ x: 1, y: 3, w: 1, h: 16 }}>
            <Credits />
          </StyledGridItem>

          <StyledGridItem key="8" data-grid={{ x: 2, y: 2, w: 1, h: 16 }}>
            <Deposits />
          </StyledGridItem>
        </ResponsiveGridLayout>
      </StyledGridWrapper>
    </div>
  );
}
