/**
 *
 * DashboardPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import Greeting from 'components/App/Greeting';
import { useMediaQuery } from 'react-responsive';
// eslint-disable-next-line import/no-extraneous-dependencies
import useResizeObserver from 'use-resize-observer';
import AvailableFunds from 'components/App/AvailableFunds';
import Savings from 'components/App/Savings';
import BankInformation from 'components/App/BankInformation';
import Bills from 'components/App/Bills';
import RecentTransactions from 'components/App/RecentTransactions';
import BankCards from 'components/App/BankCards';
import { onResize } from 'providers/ResizeLayout';
import {
  StyledGridWrapper,
  StyledGridItem,
} from 'components/App/Grid/Grid.style';
import { createStructuredSelector } from 'reselect';
import Credits from 'components/App/Credits';
import Deposits from 'components/App/Deposits';
import { makeSelectLayout } from 'containers/App/selectors';
import saga from './saga';
import reducer from './reducer';
import { changeLayoutAction } from './actions';
import { makeSelectIsOpenedModal } from './selectors';

const key = 'dashboardPage';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const stateSelector = createStructuredSelector({
  layout: makeSelectLayout(),
  isOpenedModal: makeSelectIsOpenedModal(),
});

export default function DashboardPage() {
  const { layout, isOpenedModal } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const { ref } = useResizeObserver({ onResize });
  const isMobile = useMediaQuery({ maxWidth: 479 });

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <Helmet>
        <title>DashboardPage</title>
        <meta name="description" content="Description of DashboardPage" />
      </Helmet>

      <Greeting />

      <StyledGridWrapper ref={ref}>
        <ResponsiveReactGridLayout
          breakpoints={{ lg: 1100, md: 900, sm: 580, xs: 480, xxs: 0 }}
          cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={8}
          margin={[20, 10]}
          isResizable={false}
          isDraggable={!isOpenedModal && !isMobile}
          layouts={layout}
          onLayoutChange={(_, layouts) => dispatch(changeLayoutAction(layouts))}
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
        </ResponsiveReactGridLayout>
      </StyledGridWrapper>
    </div>
  );
}
