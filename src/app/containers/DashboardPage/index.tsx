/**
 *
 * DashboardPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, actions, sliceKey } from './slice';
import { useMediaQuery } from 'react-responsive';
import { dashboardPageSaga } from './saga';
import { selectApp } from '../App/selectors';
import { Greeting } from 'app/components/App/Greeting';
import {
  StyledGridWrapper,
  StyledGridItem,
} from 'app/components/App/Grid/styled';
import { AvailableFunds } from 'app/components/App/AvailableFunds';
import { Savings } from 'app/components/App/Savings';
import { BankInformation } from 'app/components/App/BankInformation';
import { Cards } from 'app/components/App/Cards';
import { Credits } from 'app/components/App/Credits';
import { Deposits } from 'app/components/App/Deposits';
import { Bills } from 'app/components/App/Bills';
import { RecentTransactions } from 'app/components/App/RecentTransactions';
import { translations } from 'locales/i18n';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export function DashboardPage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: dashboardPageSaga });

  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 479 });
  const { layout, user } = useSelector(selectApp);
  const { t } = useTranslation();

  const onChangeLayout = layouts =>
    dispatch(actions.changeLayoutAction(layouts));

  return (
    <>
      <Helmet>
        <title>{t(translations.dashboard.title)}</title>
        <meta name="description" content="Description of DashboardPage" />
      </Helmet>

      <Greeting />

      <StyledGridWrapper>
        <ResponsiveReactGridLayout
          breakpoints={{ lg: 1100, md: 900, sm: 580, xs: 480, xxs: 0 }}
          cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={8}
          margin={[20, 10]}
          isResizable={false}
          isDraggable={!isMobile}
          // layouts={layout}
          // onLayoutChange={(_, layouts) => onChangeLayout(layouts)}
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
            <Cards />
          </StyledGridItem>

          <StyledGridItem key="7" data-grid={{ x: 1, y: 3, w: 1, h: 16 }}>
            <Credits />
          </StyledGridItem>

          <StyledGridItem key="8" data-grid={{ x: 2, y: 2, w: 1, h: 16 }}>
            <Deposits />
          </StyledGridItem>
        </ResponsiveReactGridLayout>
      </StyledGridWrapper>
    </>
  );
}
